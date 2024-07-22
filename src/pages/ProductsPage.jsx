import { useState } from "react";
import MainLayout from "../layout/MainLayout";
import ProductList from "../components/ProductList";

const ProductsPage = () => {
    const [products, setProducts] = useState([]);

    return (
        <MainLayout>
            <h1 className="text-2xl font-bold mb-4">Lista de productos</h1>
            <ProductList products={products} />
        </MainLayout>
    );
};

export default ProductsPage;