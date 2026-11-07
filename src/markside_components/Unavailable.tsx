import { Link } from 'react-router-dom';

function Unavailable() {
    return (
        <main className="body-central-default">
            <h2 className="blue-league-title">Page not found</h2>
            <p className="gray-league-paragraph">There's nothing at this address yet.</p>
            <br></br>
            <Link className="gray-league-paragraph league-p-clickable" to="/">Back to home</Link>
        </main>
    )
}

export default Unavailable;
