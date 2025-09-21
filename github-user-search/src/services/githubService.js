import axios from "axios";

const BASE_URL = "https://api.github.com";

// Basic user fetch (Task 1)
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

// Advanced search (Task 2)
export const searchUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username}+`;
  if (location) query += `location:${location}+`;
  if (minRepos) query += `repos:>=${minRepos}`;

  // Trim trailing "+"
  query = query.trim().replace(/\+$/, "");

  const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
  return response.data.items;
};
