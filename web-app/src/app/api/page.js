"use client";

import { useState } from "react";
import { Cherry_Swash } from "next/font/google";

const font = Cherry_Swash({
    weight: "700",
    style: "normal",
    subsets: ["latin"],
});

export default function Page() {
    const [products, setProducts] = useState(null);

    const API_URL =
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

    async function fetchProducts() {
        try {
            const response = await fetch(API_URL);

            // If our promise returns an error
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error(`Could not get products: ${error}`);
        }
    }

    const ProductListContent = () => {
        if (products) {
            const productsList = [];

            products.forEach((product, index) => {
                productsList.push(<li key={index}>~{product.name}~</li>);
            });

            return <ul>{productsList}</ul>;
        }

        return <div className='text-6xl'>🌭🫛🍖🫘🥫</div>;
    };

    return (
        <div className='p-4 bg-yellow-300'>
            <header className='border-4 border-black p-4 mb-4 text-center'>
                <h1 className={`text-4xl mb-6 text-black ${font.className}`}>
                    Welcome to my product page
                </h1>
                <button
                    className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-yellow-300 bg-black px-6 font-medium text-yellow-300 transition-all duration-100 [box-shadow:5px_5px_rgb(82_82_82)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(82_82_82)]'
                    onClick={fetchProducts}
                >
                    Fetch stuff!
                </button>
            </header>
            <div className='border-4 border-black p-4 text-black text-4xl text-center'>
                <ProductListContent />
            </div>
        </div>
    );
}
