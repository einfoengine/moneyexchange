import Login from "./login";
const App = () => {
    return(
        <div className="nt-dashboard">
            <div className="nt-login">
                <h3>Admin Restrected Area</h3>
                <p>Your IP and all of your activites are being monitored!</p>
                <Login/>
            </div>
        </div>
    );
}
export default App