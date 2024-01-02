import { useTranslation } from "react-i18next";
import { FooterLinks } from "../constants/content";

const Footer = () => {
    const { t } = useTranslation();
    const FooterData = JSON.parse(
        JSON.stringify(t("footerLinks"))
    ) as typeof FooterLinks.en;

    return (
        <footer className="bg-slate-100 mb-0 p-4 pt-8">
            <section className="container mx-auto flex justify-between align-top">
                {FooterData.map((sec) => (
                    <div key={sec.heading} className="flex flex-col align-top">
                        <p className="font-bold mb-3">{sec.heading}</p>
                        {sec.links.map((link) => (
                            <a
                                key={link.title}
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
