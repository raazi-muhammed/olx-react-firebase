import { Card, CardContent, CardFooter } from "@/components/ui/card";

const HomePage = () => {
    const data = [1, 2, 3, 4, 5];
    return (
        <div>
            {data.map(() => (
                <Card>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                    <CardFooter>
                        <section>
                            <p>23232</p>
                            <p>Card Footer</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. molestias? Quos quidem eius
                            </p>
                            <p>molestias? Quos quidem eius voluptatem?</p>
                        </section>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default HomePage;
