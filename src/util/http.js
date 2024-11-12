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

export async function addItem({ userId, item }) {
  const url = `https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/tables.json`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });
  if (!response.ok) {
    throw new Error("An error occured while adding new item to the table");
  }

  return response.json();
}

export async function fetchTable({ userId, signal }) {
  const url = `https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/tables.json`;
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error("An error occured while fetching the table");
  }

  const data = await response.json();
  return data;
}
