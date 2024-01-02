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
import { useTranslation } from "react-i18next";

const NavBar = () => {
    const { currentUser } = useContext(AuthContext);
    const { t, i18n } = useTranslation();
    const handleLanguageChange = (lng: string) => {
        i18n.changeLanguage(lng);
    };
    return (
        <nav className="bg-slate-100 w-screen">
            <div className="container mx-auto flex p-2 gap-4">
                <Link className="mx-3" to="/">
                    <Icons.OlxLogo />
                </Link>
                <Input
                    className="w-48"
                    type="text"
                    placeholder={t("navBarContent.location")}
                />
                <div className="flex bg-primary rounded w-full">
                    <Input
                        type="text"
                        placeholder={t("navBarContent.search")}
                        className="w-full"
                    />
                    <Button className="bg-primary px-2" size="icon">
                        <IoMdSearch size="1.8em" />
                    </Button>
                </div>
                <Select onValueChange={handleLanguageChange}>
                    <SelectTrigger className="w-fit font-semibold text-md border-none bg-slate-100 h-12">
                        <SelectValue placeholder={t("navBarContent.lang")} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="hi">हिंदी</SelectItem>
                    </SelectContent>
                </Select>
                {currentUser ? <ProfileDropDown /> : <LoginModal />}
                <Link to="/sell">
                    <div className="grid place-items-center">
                        <Icons.Sell />
                        <span className="absolute font-bold">
                            + {t("navBarContent.sell")}
                        </span>
                    </div>
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
