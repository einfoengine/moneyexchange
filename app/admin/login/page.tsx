import Login from "@/components/Login";

const App = () => {
    return(
        <div className="nt-admin">
            <h3>Admin Restrected Area</h3>
            <p>Your IP and all of your activites are being monitored!</p>
            <Login path=""/>
        </div>
    );
}
export default App