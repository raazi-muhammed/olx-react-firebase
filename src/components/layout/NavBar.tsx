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
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

type Props = {};

const NavBar = (props: Props) => {
    return (
        <nav className="bg-slate-100 flex p-2">
            <p>OLX</p>
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
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Log In</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when
                            you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <Button>Continue with Phone</Button>
                        <Button>Continue with Google</Button>
                        <p>or</p>
                        <Button>Login with Email</Button>
                    </div>
                    <DialogFooter>
                        <div>
                            <p>All your personal details are safe with us.</p>
                            <p>
                                If you continue, you are accepting OLX Terms and
                                Conditions and Privacy Policy
                            </p>
                        </div>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <Button>Sell</Button>
        </nav>
    );
};

export default NavBar;
