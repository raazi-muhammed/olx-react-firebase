import NavBar from "./components/layout/NavBar";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div>
            <AuthProvider>
                <NavBar />
                <HomePage />
            </AuthProvider>
        </div>
    );
}

export default App;
