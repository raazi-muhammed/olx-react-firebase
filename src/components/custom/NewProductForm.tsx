import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    FormDescription,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addAddToDb } from "@/services/fireStore";
import { useContext, useState } from "react";
import { uploadImage } from "@/services/fireStorage";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import AuthContext from "@/context/AuthContext";

const formSchema = z.object({
    title: z.string().min(5),
    description: z.string().min(10),
    category: z.string(),
    price: z.coerce.number().gt(0),
    photos: z.string().optional(),
    location: z.string().min(5),
    name: z.string().min(6),
    phone: z.coerce.number(),
});

export default function NewProductForm() {
    const navigate = useNavigate();
    const [imageToUpload, setImageToUpload] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const { currentUser } = useContext(AuthContext);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        if (!imageToUpload) {
            toast("No image");
            return;
        }

        const photoUrl = await uploadImage(imageToUpload);
        if (photoUrl) {
            addAddToDb({ ...values, photos: photoUrl });
        }

        toast("Add posted");
        navigate("/");
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <p className="font-bold text-lg m-0">INCLUDE SOME DETAILS</p>

                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title*</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormDescription>
                                Mention the key features of your item (e.g.
                                brand, model, age, type)
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category*</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description*</FormLabel>
                            <FormControl>
                                <Textarea {...field} />
                            </FormControl>
                            <FormDescription>
                                Include condition, features and reason for
                                selling
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <p className="font-bold text-lg mt-4 pt-4">MORE DETAILS</p>
                <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price*</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="photos"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Photos*</FormLabel>
                            {imagePreview ? (
                                <img
                                    className="object-cover rounded mb-2 border border-input h-32"
                                    src={imagePreview}
                                    alt=""
                                />
                            ) : null}
                            <FormControl>
                                <Input
                                    accept="image/*"
                                    onChange={(e) => {
                                        if (e.target.files) {
                                            setImageToUpload(e.target.files[0]);
                                            setImagePreview(
                                                URL.createObjectURL(
                                                    e.target.files[0]
                                                )
                                            );
                                        }
                                    }}
                                    type="file"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Location*</FormLabel>
                            <FormControl>
                                <Input {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <p className="font-bold text-lg mt-4 pt-4">YOUR DETAILS</p>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Name*</FormLabel>
                            <FormControl>
                                <Input
                                    type="text"
                                    {...field}
                                    defaultValue={
                                        currentUser?.displayName
                                            ? currentUser.displayName
                                            : currentUser?.email
                                            ? currentUser.email
                                            : ""
                                    }
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone Number*</FormLabel>
                            <FormControl>
                                <Input
                                    type="number"
                                    {...field}
                                    defaultValue={
                                        currentUser?.phoneNumber
                                            ? currentUser.phoneNumber
                                            : ""
                                    }
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button className="w-full" type="submit">
                    Post Now
                </Button>
            </form>
        </Form>
    );
}
