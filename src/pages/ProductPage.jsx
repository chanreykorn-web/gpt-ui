import React from 'react';
import { Navbar } from '../components/Navbar';
import { Banners } from './HomePage';
import card1 from '../assets/images/card/aircon-service-man.jpg'
import iterm1 from '../assets/images/card/4-Way Cassette Type.jpg'
import Carousel from 'react-multi-carousel';
import { Footer } from '../components/Footer';

export const ProductPage = () => {
    return (
        <div>
            <Navbar />
            <Banners backgroundImage={card1} />
            <div className='px-8 py-5 md:px-15'>
                <RelatedProducts products={'Related products'} />
            </div>
            <HeroSection />
            <div className='px-8 py-5 md:px-15'>
                <VRFMultiCarousel products={"products"} />
            </div>
            <Footer />
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

export const RelatedProducts = ({ products }) => {
    return (
        <div>
            <h1 className='text-[32px] mt-5 mb-5 font-medium'>{products}</h1>

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
                            <div className="mb-6 px-4 py-2 bg-opacity-70 rounded-full text-black text-xl">
                                {item.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const HeroSection = () => {
    return (
        <div
            className="w-full bg-cover bg-center bg-no-repeat min-h-[500px] flex items-center"
            style={{
                backgroundImage: `url(${card1})`,
            }}
        >
            <div className="px-6 md:px-24 max-w-3xl text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Welcome to <br /> BESPOKE AI
                </h1>
                <p className="text-lg leading-relaxed">
                    Do less. Live more. AI and connected solutions that give you more free
                    time and bigger energy savings.
                </p>
            </div>
        </div>
    );
};




const items = [
    {
        text: 'VRF SYSTEM',
        image: card1,
    },
    {
        text: 'ENERGY EFFICIENT',
        image: card1,
    },
    {
        text: 'ADVANCED COOLING',
        image: card1,
    },
    {
        text: 'SMART CONTROL',
        image: card1,
    },
    {
        text: 'LOW NOISE',
        image: card1,
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5,
        slidesToSlide: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};

export const VRFMultiCarousel = ({ products }) => {
    return (
        <div className="w-full px-0 py-10 bg-white">
            <h1 className='text-[32px] mt-5 mb-5 font-medium'>{products}</h1>

            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                arrows={false}
                showDots={false}
                className="pb-4"
            >
                {items.map((item, index) => (
                    <div key={index} className="relative mx-2">
                        <img
                            src={item.image}
                            alt={item.text}
                            className="rounded-lg object-cover w-full"
                        />
                        {/* Button at bottom of image */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                            <button className="text-white hover:text-blue-500 text-base font-medium px-6 py-5 transition-all duration-300">
                                {item.text}
                            </button>
                        </div>
                    </div>
                ))}
            </Carousel>
            <RelatedProducts />
        </div>
    );
};

