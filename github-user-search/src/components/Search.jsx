import { use, useState } from 'react';
import { fetchUserData } from '../services/githubService';

export default function Search() {
    const [username, setUsername] = useState("" );
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true);
        setError("");
        setUser(null);

    try {
        const data = await fetchUserData(username);
        setUser(data);
    } catch {
        setError("Looks like we can't find the user");
        } finally {
            setloading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder = "Enter GitHub username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {user && (
                <div>
                    <img src={user.avatar_url} alt="avatar" width={100} />
          <h2>{user.name || "No name provided"}</h2>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}