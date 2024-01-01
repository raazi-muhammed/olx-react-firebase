import NewProductForm from "@/components/custom/NewProductForm";

const SellerProduct = () => {
    return (
        <div>
            <p className="font-bold text-xl mx-auto text-center mt-8 mb-4">
                POST YOUR ADD
            </p>
            <section className="max-w-3xl mx-auto border p-8 rounded">
                <NewProductForm />
            </section>
        </div>
    );
};

export default SellerProduct;
