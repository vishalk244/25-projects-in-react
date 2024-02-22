export default function User({ user }) {
    const {
        avatar_url,
        html_url,
        followers,
        following,
        public_repos,
        name,
        login,
        created_at
    } = user;

    const createdDate = new Date(created_at);

    return (
        <div className="user">
            <div>
                <img src={avatar_url} alt="User" className="avatar" />
            </div>
            <div className="name-container">
                <h1><a href={user.html_url}>{name || login}</a></h1>
                {/* <a href={`https://github.com/${login}`}>{name || login}</a> */}
               
                {/* <p>User joined on{createdDate.toLocaleDateString()}</p> */}
                <p>
                    User joined on{" "}
                    {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
                        month: "short",
                    })} ${createdDate.getFullYear()}`}
                </p>
            </div>
            <div className="profile-info">
                <div>
                    <p>Public Repos :</p>
                    <p>{public_repos}</p>
                </div>
                <div>
                    <p>Followers : </p>
                    <p>{followers}</p>
                </div>
                <div>
                    <p>Following : </p>
                    <p>{following}</p>
                </div>
            </div>
            {/* <h1>{user.name}</h1>
            <p>{user.bio}</p> */}
        </div>
    )
}