import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
import { IoMdSearch } from "react-icons/io";
import { FiSmartphone } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { LoginCarousel } from "../constants/content";
import SignUpForm from "../custom/SignUpForm";
import LogInForm from "../custom/LogInForm";
import { useContext, useState } from "react";
import AuthContext from "@/context/AuthContext";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import Icons from "@/assets/Icons";

enum PageSate {
    QUICK_LOGIN_SING_UP = "QUICK_LOGIN_SING_UP",
    LOGIN_EMAIL = "LOGIN_EMAIL",
    SING_UP = "SING_UP",
}

const NavBar = () => {
    const [pageState, setPageState] = useState<PageSate>(
        PageSate.QUICK_LOGIN_SING_UP
    );
    const { currentUser, logout, signInWithGoogle } = useContext(AuthContext);

    const handleSignInWithGoogle = () => {
        try {
            signInWithGoogle();
        } catch (error) {
            console.log(error);
        }
    };

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
                {currentUser ? (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="ghost"
                                className="underline font-bold"
                            >
                                Profile
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem>
                                    {currentUser.email}
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuItem onClick={logout}>
                                Log out
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button
                                className="h-12 font-semibold underline hover:no-underline"
                                variant="ghost"
                            >
                                Log In
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <Carousel>
                                    <CarouselContent>
                                        {LoginCarousel.map((_, index) => (
                                            <CarouselItem key={index}>
                                                <div className="flex w-fit flex-col items-center justify-center gap-4 mx-auto pt-4">
                                                    <picture>
                                                        <img
                                                            className="h-24"
                                                            src={_.image}
                                                            alt=""
                                                        />
                                                    </picture>
                                                    <p>{_.text}</p>
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </DialogHeader>
                            <div className="grid py-4">
                                {pageState === PageSate.SING_UP ? (
                                    <>
                                        <SignUpForm />
                                        <p className="mx-auto my-4 font-bold">
                                            OR
                                        </p>
                                        <Button
                                            onClick={() =>
                                                setPageState(
                                                    PageSate.LOGIN_EMAIL
                                                )
                                            }
                                            variant="ghost"
                                            size="sm"
                                            className="underline font-bold"
                                        >
                                            Login
                                        </Button>
                                    </>
                                ) : pageState === PageSate.LOGIN_EMAIL ? (
                                    <>
                                        <LogInForm />
                                        <p className="mx-auto my-4 font-bold">
                                            OR
                                        </p>
                                        <Button
                                            onClick={() =>
                                                setPageState(
                                                    PageSate.QUICK_LOGIN_SING_UP
                                                )
                                            }
                                            variant="ghost"
                                            size="sm"
                                            className="underline font-bold"
                                        >
                                            Quick Login
                                        </Button>

                                        <Button
                                            onClick={() =>
                                                setPageState(PageSate.SING_UP)
                                            }
                                            variant="ghost"
                                            size="sm"
                                            className="underline font-bold"
                                        >
                                            Sign Up
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <Button
                                            variant="outline"
                                            className="gap-2 mb-4"
                                        >
                                            <FiSmartphone size="1.3em" />
                                            <span>Continue with Phone</span>
                                        </Button>
                                        <Button
                                            onClick={handleSignInWithGoogle}
                                            variant="outline"
                                            className="gap-2"
                                        >
                                            <FaGoogle size="1.3em" />
                                            Continue with Google
                                        </Button>
                                        <p className="mx-auto my-4 font-bold">
                                            OR
                                        </p>
                                        <Button
                                            onClick={() =>
                                                setPageState(
                                                    PageSate.LOGIN_EMAIL
                                                )
                                            }
                                            variant="ghost"
                                            size="sm"
                                            className="underline font-bold"
                                        >
                                            Log In
                                        </Button>
                                    </>
                                )}
                            </div>
                            <DialogFooter>
                                <div className="text-xs text-slate-400 text-center">
                                    <p>
                                        All your personal details are safe with
                                        us.
                                    </p>
                                    <p>
                                        If you continue, you are accepting
                                        <span className="text-blue-500 ms-1">
                                            OLX Terms and Conditions and Privacy
                                            Policy
                                        </span>
                                    </p>
                                </div>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                )}
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
