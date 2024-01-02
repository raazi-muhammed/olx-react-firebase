import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { getAds } from "@/services/fireStore";
import { addType } from "@/types/modalTypes";
import { useEffect, useState } from "react";

const HomePage = () => {
    const [ads, setAds] = useState<addType[]>([]);

    useEffect(() => {
        getAds().then((adds: any) => {
            setAds(adds as addType[]);
        });
    }, []);

    return (
        <div className="min-h-[70vh]">
            <main className="container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {ads.map((add, i) => (
                    <Card key={i}>
                        <CardHeader className="p-0 m-2">
                            <img
                                className="w-full aspect-video object-cover rounded-sm"
                                src={add.photos}
                                alt=""
                            />
                        </CardHeader>
                        <CardFooter className="m-0 pb-4 px-4">
                            <section>
                                <p className="font-bold text-xl">{add.price}</p>
                                <p className="text-muted-foreground">
                                    {add.title}
                                </p>
                                <div className="flex justify-between mb-0 p-0">
                                    <p className="text-xs opacity-30">
                                        {add.location}
                                    </p>
                                    <p className="text-xs opacity-30">
                                        6 days ago
                                    </p>
                                </div>
                            </section>
                        </CardFooter>
                    </Card>
                ))}
            </main>
        </div>
    );
};

export default HomePage;
