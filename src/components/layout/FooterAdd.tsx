import { useTranslation } from "react-i18next";

const FooterAdd = () => {
    const { t } = useTranslation();

    return (
        <section className="h-44 bg-slate-50">
            <section className="container mx-auto flex gap-4 justify-around">
                <picture className="h-full flex-shrink-0">
                    <img
                        className="h-44"
                        src="https://statics.olx.in/external/base/img/phone-app.png"
                        alt=""
                    />
                </picture>
                <section className="my-auto">
                    <p className="font-bold text-xl">
                        {t("footerAddContent.heading")}
                    </p>
                    <p>{t("footerAddContent.para")}</p>
                </section>
                <section className="my-auto">
                    <p className="font-bold">{t("footerAddContent.cta")}</p>
                    <div className="flex gap-2">
                        <img
                            className="w-auto h-8"
                            src="https://statics.olx.in/external/base/img/appstore_2x.webp"
                            alt=""
                        />
                        <img
                            className="w-auto h-8"
                            src="https://statics.olx.in/external/base/img/playstore_2x.png"
                            alt=""
                        />
                    </div>
                </section>
            </section>
        </section>
    );
};

export default FooterAdd;
