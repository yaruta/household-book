import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export async function createUserData({ email, id }) {
  const response = await fetch(
    `https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users/${id}.json`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, id: id }),
    }
  );
  if (!response.ok) {
    throw new Error("An error occured while creating data for the user");
  }
  return await response.json();
}

export async function getUserId({ email }) {
  const response = await fetch(
    "https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users.json"
  );
  if (!response.ok) {
    throw new Error("An error Occured while fetching users data");
  }
  const data = await response.json();
  const user = Object.values(data).find((user) => user.email === email);
  return user.id;
}

export async function addItem({ userId, item }) {
  const url = `https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/tables/${item.id}.json`;
  const response = await fetch(url, {
    method: "PUT",
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

export async function removeItem({ userId, id }) {
  const url = `https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/tables/${id}.json`;
  const response = await fetch(url, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("An error occured while deleting item from the table");
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

export async function addUserInfo({ userId, user }) {
  const url = `https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/user-info.json`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("An error occured while adding user info");
  }

  return response.json();
}

export async function getUserInfo({ userId }) {
  const response = await fetch(
    `https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/user-info.json`
  );
  if (!response.ok) {
    throw new Error("An error occured while fetching users data");
  }
  const data = await response.json();
  return data;
}


