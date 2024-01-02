const Footer = () => {
    const footerLinks = [
        {
            heading: "POPULAR LOCATIONS",
            links: [
                { title: "Kolkata", link: "#" },
                { title: "Mumbai", link: "#" },
                { title: "Chennai", link: "#" },
                { title: "Pune", link: "#" },
            ],
        },
        {
            heading: "TRENDING LOCATIONS",
            links: [
                { title: "Bhubaneshwar", link: "#" },
                { title: "Hyderbad", link: "#" },
                { title: "Chandigrah", link: "#" },
                { title: "Nashik", link: "#" },
            ],
        },
        {
            heading: "ABOUT US",
            links: [{ title: "Contact us", link: "#" }],
        },
        {
            heading: "OLX",
            links: [
                { title: "Help", link: "#" },
                { title: "Sitemap", link: "#" },
                { title: "Legal & Privay information", link: "#" },
                { title: "Vulnerability discolour programe", link: "#" },
            ],
        },
    ];
    return (
        <footer className="bg-slate-100 mb-0 p-4 pt-8">
            <section className="container mx-auto flex justify-between align-top">
                {footerLinks.map((sec) => (
                    <div className="flex flex-col align-top">
                        <p className="font-bold mb-3">{sec.heading}</p>
                        {sec.links.map((link) => (
                            <a
                                className="text-slate-500 text-xs mb-2 hover:text-slate-700"
                                href={link.link}
                            >
                                {link.title}
                            </a>
                        ))}
                    </div>
                ))}
            </section>
        </footer>
    );
};

export default Footer;
