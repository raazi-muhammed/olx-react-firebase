import NavBar from "./components/layout/NavBar";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SellerProduct from "./pages/SellerProduct";

function App() {
    return (
        <div>
            <AuthProvider>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/sell" element={<SellerProduct />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
