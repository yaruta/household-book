import { QueryClient } from "@tanstack/react-query";

/**
 * Creates a new instance of QueryClient for managing server state.
 */
export const queryClient = new QueryClient();


/**
 * Creates user data in the Firebase database.
 * @param {Object} params - The user data parameters.
 * @param {string} params.email - The user's email address.
 * @param {string} params.id - The unique user ID.
 * @returns {Promise} The created user data.
 * @throws {Error} If the request fails.
 */
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


/**
 * Retrieves the user ID based on the provided email.
 * @param {Object} params - The email parameter.
 * @param {string} params.email - The user's email address.
 * @returns {Promise} The user ID associated with the email.
 * @throws {Error} If the request fails.
 */
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


/**
 * Adds an item to or replaces an item in the user's table in Firebase.
 * @param {Object} params - The parameters containing user ID and item data.
 * @param {string} params.userId - The user's ID.
 * @param {Object} params.item - The item data.
 * @returns {Promise} The added item.
 * @throws {Error} If the request fails.
 */
export async function addItem({ userId, item }) {
  const date = item.id.substring(0, 6);
  const url = `https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/tables/${date}/${item.id}.json`;
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


/**
 * Removes an item from the user's table in Firebase.
 * @param {Object} params - The parameters containing user ID and item ID.
 * @param {string} params.userId - The user's ID.
 * @param {string} params.id - The item ID.
 * @returns {Promise} The response data.
 * @throws {Error} If the request fails.
 */
export async function removeItem({ userId, id }) {
  const date = id.substring(0, 6);
  const url = `https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/tables/${date}/${id}.json`;
  const response = await fetch(url, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("An error occured while deleting item from the table");
  }

  return response.json();
}


/**
 * Fetches a specific table for the given user and date.
 * @param {Object} params - The parameters containing user ID and selected date.
 * @param {string} params.userId - The user's ID.
 * @param {AbortSignal} params.signal - The abort signal for request cancellation.
 * @param {string} params.selectedDate - The selected date for fetching the table.
 * @returns {Promise} The fetched table data.
 * @throws {Error} If the request fails.
 */
export async function fetchTable({ userId, signal, selectedDate }) {
  const url = `https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/tables/${selectedDate}.json`;
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error("An error occured while fetching the table");
  }

  const data = await response.json();
  return data;
}


/**
 * Fetches all tables for the given user.
 * @param {Object} params - The parameters containing user ID.
 * @param {string} params.userId - The user's ID.
 * @param {AbortSignal} params.signal - The abort signal for request cancellation.
 * @returns {Promise} The fetched tables data.
 * @throws {Error} If the request fails.
*/
export async function fetchTables({ userId, signal }) {
  const url = `https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/tables.json`;
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error("An error occured while fetching the tables");
  }

  const data = await response.json();
  return data;
}


/**
 * Adds or edits user information to Firebase.
 * @param {Object} params - The parameters containing user ID and user data.
 * @param {string} params.userId - The user's ID.
 * @param {Object} params.userData - The user information to add.
 * @returns {Promise} The added user data.
 * @throws {Error} If the request fails.
*/
export async function addUserInfo({ userId, userData }) {
  const url = `https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/user-info.json`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  if (!response.ok) {
    throw new Error("An error occured while adding user info");
  }

  return response.json();
}


/**
 * Fetches user information for the given user.
 * @param {Object} params - The parameters containing user ID.
 * @param {string} params.userId - The user's ID.
 * @returns {Promise} The fetched user data.
 * @throws {Error} If the request fails.
*/
export async function getUserInfo({ signal, userId }) {
  const response = await fetch(
    `https://household-book-default-rtdb.europe-west1.firebasedatabase.app/users/${userId}/user-info.json`,
    { signal }
  );
  if (!response.ok) {
    throw new Error("An error occured while fetching users data");
  }
  const data = await response.json();
  return data;
}
