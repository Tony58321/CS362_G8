import './Login.css'

export default function Login() {
    return(
        <>
        <h1 class="title">Welcome to Statify</h1>
        <h3 class="subtitle">Know your music, know yourself. Tune into your trends.</h3>
        <ul id="features">
            <li>View your top tracks, artists, and genres</li>
            <li>Adjust the date range for your statistics</li>
            <li>Compare your data with national listening trends</li>
        </ul>
        <button id="login">Log in with Spotify</button>
        </>
    )
}