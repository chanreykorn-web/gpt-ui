import React from 'react';
import { Navbar } from '../components/Navbar';
import { Banners } from './HomePage';
import card1 from '../assets/images/card/aircon-service-man.jpg'
import iterm1 from '../assets/images/card/4-Way Cassette Type.jpg'

export const ProductPage = () => {
    return (
        <div>
            <Navbar />
            <Banners backgroundImage={card1} />
            <div className='px-8 py-5 md:px-15'>
                <RelatedProducts />
            </div>
        </div>
    );
}

const productData = [
    {
        title: 'Related product 1',
        image: iterm1,
    },
    {
        title: 'Related product 2',
        image: iterm1,
    },
    {
        title: 'Related product 3',
        image: iterm1,
    },
    {
        title: 'Related product 4',
        image: iterm1,
    },
];

export const RelatedProducts = () => {
    return (
        <div>
            <h1 className='text-[32px] mt-5 mb-5 font-medium'>Related products </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
                {productData.map((item, index) => (
                    <div
                        key={index}
                        className="relative w-full h-64 shadow-2xl bg-red-100 rounded-2xl overflow-hidden group"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                            <div className="mb-6 px-4 py-2 bg-opacity-70 rounded-full text-black text-lg font-semibold">
                                {item.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
