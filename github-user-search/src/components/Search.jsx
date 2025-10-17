// src/components/Search.jsx
import React, { useState } from "react";
import { fetchUserData, searchUsersAdvanced, fetchUsersDetails } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const perPage = 30;

  async function handleSearch(e) {
    e && e.preventDefault();
    setError("");
    setResults([]);
    setTotal(0);
    setPage(1);
    try {
      setLoading(true);

      if (username.trim()) {
        const user = await fetchUserData(username.trim());
        setResults([user]);
        setTotal(1);
        setLoading(false);
        return;
      }

      const data = await searchUsersAdvanced({
        query,
        location,
        minRepos: minRepos ? Number(minRepos) : 0,
        page: 1,
        per_page: perPage,
      });

      if (!data || !data.items || data.items.length === 0) {
        setError("Looks like we cant find the user");
        setLoading(false);
        return;
      }

      const logins = data.items.map((it) => it.login);
      const details = await fetchUsersDetails(logins);
      setResults(details);
      setTotal(data.total_count || details.length);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Looks like we cant find the user");
      setLoading(false);
    }
  }

  async function loadMore() {
    const next = page + 1;
    setLoading(true);
    try {
      const data = await searchUsersAdvanced({
        query,
        location,
        minRepos: minRepos ? Number(minRepos) : 0,
        page: next,
        per_page: perPage,
      });
      if (!data || !data.items || data.items.length === 0) {
        setLoading(false);
        return;
      }
      const logins = data.items.map((it) => it.login);
      const details = await fetchUsersDetails(logins);
      setResults((prev) => [...prev, ...details]);
      setPage(next);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Looks like we cant find the user");
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">GitHub User Search</h1>

      <form className="bg-white p-4 rounded-lg shadow-md" onSubmit={handleSearch}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium mb-1">Username (single user)</label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. torvalds"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
            <p className="text-xs text-gray-500 mt-1">If username provided, advanced fields are ignored.</p>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Keyword (name / username)</label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. john, react"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g. Kenya"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Min Repos</label>
            <input
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              type="number"
              min="0"
              placeholder="e.g. 5"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring"
            />
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700">
            Search
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 rounded"
            onClick={() => {
              setUsername("");
              setQuery("");
              setLocation("");
              setMinRepos("");
              setResults([]);
              setError("");
              setPage(1);
              setTotal(0);
            }}
          >
            Reset
          </button>
        </div>
      </form>

      <div className="mt-6">
        {loading && <div className="text-center py-6">Loading...</div>}

        {error && !loading && <div className="text-center text-red-600">{error}</div>}

        {!loading && !error && results.length > 0 && (
          <div>
            <p className="mb-2 text-sm text-gray-600">Showing {results.length} of {total} result(s)</p>

            <ul className="grid gap-4">
              {results.map((user) => (
                <li key={user.id} className="bg-white p-4 rounded shadow flex items-center gap-4">
                  <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <a href={user.html_url} target="_blank" rel="noreferrer" className="text-lg font-semibold hover:underline">
                          {user.login}
                        </a>
                        <div className="text-sm text-gray-600">{user.name || ""}</div>
                      </div>
                      <div className="text-sm text-gray-500">Repos: {user.public_repos ?? "—"}</div>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {user.location ? `Location: ${user.location}` : ""}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {results.length < total && (
              <div className="mt-4 text-center">
                <button onClick={loadMore} className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                  Load more
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
