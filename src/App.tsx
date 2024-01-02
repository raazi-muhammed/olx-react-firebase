import NavBar from "./components/layout/NavBar";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SellerProduct from "./pages/SellerProduct";
import Footer from "./components/layout/Footer";
import FooterAdd from "./components/layout/FooterAdd";
import { Toaster } from "@/components/ui/sonner";

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
                    <FooterAdd />
                    <Footer />
                </BrowserRouter>
            </AuthProvider>
            <Toaster />
        </div>
    );
}

export default App;
