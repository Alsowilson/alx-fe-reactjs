// src/services/githubService.js
import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY || "";
const api = axios.create({
  baseURL: "https://api.github.com",
  headers: token ? { Authorization: `token ${token}` } : undefined,
});

export async function fetchUserData(username) {
  const res = await api.get(`/users/${encodeURIComponent(username)}`);
  return res.data;
}

export async function searchUsersAdvanced({ query = "", location = "", minRepos = 0, page = 1, per_page = 30 }) {
  const parts = [];
  if (query && query.trim()) parts.push(query.trim());
  if (location && location.trim()) parts.push(`location:${location.trim()}`);
  if (minRepos && Number(minRepos) > 0) parts.push(`repos:>=${Number(minRepos)}`);
  const q = parts.join(" ").trim() || "type:user";

  const res = await api.get("/search/users", {
    params: { q, page, per_page },
  });
  return res.data; // { total_count, items }
}

export async function fetchUsersDetails(logins = []) {
  return Promise.all(
    logins.map(async (login) => {
      const r = await api.get(`/users/${login}`);
      return r.data;
    })
  );
}
