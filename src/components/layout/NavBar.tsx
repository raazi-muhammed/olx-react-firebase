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

const NavBar = () => {
    const [showSignUp, setShowSingUp] = useState<boolean>(false);
    const { currentUser, logout } = useContext(AuthContext);

    return (
        <nav className="bg-slate-100 flex p-2">
            <Link to="/">
                <p>OLX</p>
            </Link>
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
            <Input type="text" placeholder="Search" />
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
            {currentUser ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">Profile</Button>
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
                        <Button variant="outline">Log In</Button>
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
                        <div className="grid gap-4 py-4">
                            <Button variant="outline">
                                Continue with Phone
                            </Button>
                            <Button variant="outline">
                                Continue with Google
                            </Button>
                            <p>or</p>
                            {showSignUp ? <SignUpForm /> : <LogInForm />}
                        </div>
                        {!showSignUp ? (
                            <Button
                                onClick={() => setShowSingUp(true)}
                                variant="ghost"
                            >
                                Sign Up
                            </Button>
                        ) : (
                            <Button
                                onClick={() => setShowSingUp(false)}
                                variant="ghost"
                            >
                                Log In
                            </Button>
                        )}

                        <DialogFooter>
                            <div>
                                <p>
                                    All your personal details are safe with us.
                                </p>
                                <p>
                                    If you continue, you are accepting OLX Terms
                                    and Conditions and Privacy Policy
                                </p>
                            </div>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            )}
            <Link to="/sell">
                <Button>Sell</Button>
            </Link>
        </nav>
    );
};

export default NavBar;
