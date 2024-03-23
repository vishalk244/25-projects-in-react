import { useEffect, useState } from 'react';
import User from './user';
import './style.css';

export default function GithubProfileFinder() {
    const [userName, setUserName] = useState("vishalk244");
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData() {
        setLoading(true);
        const response = await fetch(`https://api.github.com/users/${userName}`);
        const result = await response.json();
        console.log(result);
        if (result) {
            setUserData(result);
            setLoading(false);
            setUserName("");
        }
    }

    function handleSearch() {
        fetchGithubUserData()
    }

    useEffect(() => {
        fetchGithubUserData()
    }, []);

    if (loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="github-profile-container">
            <div className="input-wrapper">
                <input
                    type="text"
                    name="search-by-username"
                    placeholder="Search by username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            {
                userData !== null ? <User user={userData} /> : null
            }
        </div>
    );
}