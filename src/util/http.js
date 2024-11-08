import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function createUserData(email) {
  const response = await fetch(
    "https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email }),
    }
  );
  if (!response.ok) {
    throw new Error("An error occured while creating data for the user");
  }
  
  return response.json().then((name) => name.name);
}
