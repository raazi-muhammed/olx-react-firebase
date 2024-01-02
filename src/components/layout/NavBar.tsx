import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useContext } from "react";
import AuthContext from "@/context/AuthContext";
import { Link } from "react-router-dom";
import Icons from "@/assets/Icons";
import ProfileDropDown from "../custom/ProfileDropDown";
import LoginModal from "../custom/LoginModal";
import { IoMdSearch } from "react-icons/io";

const NavBar = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <nav className="bg-slate-100 w-screen">
            <div className="container mx-auto flex p-2 gap-4">
                <Link className="mx-3" to="/">
                    <Icons.OlxLogo />
                </Link>
                <Input className="w-48" type="text" placeholder="Location" />
                <div className="flex bg-primary rounded w-full">
                    <Input
                        type="text"
                        placeholder="Search"
                        className="w-full"
                    />
                    <Button className="bg-primary px-2" size="icon">
                        <IoMdSearch size="1.8em" />
                    </Button>
                </div>
                <Select>
                    <SelectTrigger className="w-fit font-semibold text-md border-none bg-slate-100 h-12">
                        <SelectValue placeholder="Language" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="hindi">Hindi</SelectItem>
                    </SelectContent>
                </Select>
                {currentUser ? <ProfileDropDown /> : <LoginModal />}
                <Link to="/sell">
                    <div className="grid place-items-center">
                        <Icons.Sell />
                        <span className="absolute font-bold">+ SELL</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
