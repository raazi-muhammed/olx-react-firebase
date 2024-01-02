import { useContext, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog";
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
import { Button } from "@/components/ui/button";
import AuthContext from "@/context/AuthContext";
enum PageSate {
    QUICK_LOGIN_SING_UP = "QUICK_LOGIN_SING_UP",
    LOGIN_EMAIL = "LOGIN_EMAIL",
    SING_UP = "SING_UP",
}
const LoginModal = () => {
    const { signInWithGoogle } = useContext(AuthContext);

    const [pageState, setPageState] = useState<PageSate>(
        PageSate.QUICK_LOGIN_SING_UP
    );

    const handleSignInWithGoogle = () => {
        try {
            signInWithGoogle();
        } catch (error) {
            console.log(error);
        }
    };

    return (
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
                            <p className="mx-auto my-4 font-bold">OR</p>
                            <Button
                                onClick={() =>
                                    setPageState(PageSate.LOGIN_EMAIL)
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
                            <p className="mx-auto my-4 font-bold">OR</p>
                            <Button
                                onClick={() =>
                                    setPageState(PageSate.QUICK_LOGIN_SING_UP)
                                }
                                variant="ghost"
                                size="sm"
                                className="underline font-bold"
                            >
                                Quick Login
                            </Button>

                            <Button
                                onClick={() => setPageState(PageSate.SING_UP)}
                                variant="ghost"
                                size="sm"
                                className="underline font-bold"
                            >
                                Sign Up
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="outline" className="gap-2 mb-4">
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
                            <p className="mx-auto my-4 font-bold">OR</p>
                            <Button
                                onClick={() =>
                                    setPageState(PageSate.LOGIN_EMAIL)
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
                        <p>All your personal details are safe with us.</p>
                        <p>
                            If you continue, you are accepting
                            <span className="text-blue-500 ms-1">
                                OLX Terms and Conditions and Privacy Policy
                            </span>
                        </p>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
