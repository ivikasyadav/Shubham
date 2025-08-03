import Lit_O_pot from './assets/Lit_O_pot.jpg';
import medal1 from './assets/product/medal/medal1.jpg';
import medal2 from './assets/product/medal/medal2.jpg';
import winder1 from './assets/product/winder/winder1.png';
import winder2 from './assets/product/winder/winder2.png';
import lamp from './assets/product/lamp.jpg';

import gif1 from './assets/product/giv/handskakegif.gif';
import gif2 from './assets/product/giv/lampgif.gif';
import portrait1 from './assets/product/medal/medal3.jpg';
import portrait2 from './assets/product/cyclemirror.jpg';
import portrait3 from './assets/product/joker.jpg';
import portrait4 from './assets/product/joker.jpg';
import normal1 from './assets/product/winder/winder3.png';
import normal2 from './assets/product/spiderman.jpg';
import { useEffect, useState } from 'react';

const products = [
    { image: winder1, title: 'Charger Winder' },
    { image: medal1, title: 'Medal Holder' },
    { image: Lit_O_pot, title: 'Lamp' },
    { image: winder2, title: 'Charger Winder' },
    { image: medal2, title: 'Medal Holder' },
    { image: lamp, title: 'Lamp' },
];

const Products = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const randomDelay = Math.random() * (3000 - 1500) + 1500;
        const timeout = setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % products.length);
        }, randomDelay);

        return () => clearTimeout(timeout);
    }, [currentIndex]);

    const currentProduct = products[currentIndex];

    return (
      
        <section id="products" className="w-full py-20 bg-black min-h-screen">
            <div className="container mx-auto ">
                <h2 className="text-5xl font-bold text-center mb-16 text-white bg-clip-text text-transparent">
                    My Product
                </h2>

                <div className="w-full  mx-auto mb-20">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-2xl shadow-purple-500/20 transition-all duration-500 hover:shadow-purple-500/30 hover:shadow-3xl border border-purple-500/20">
                        <div className="relative overflow-hidden rounded-2xl bg-white">
                            <img
                                src={currentProduct.image}
                                alt={currentProduct.title}
                                className="w-full h-[500px] object-contain transition-all duration-700 ease-in-out"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <h3 className="text-2xl font-bold mt-6 text-center text-purple-300">
                            {currentProduct.title}
                        </h3>
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto">
              
                    <div className="hidden lg:grid grid-cols-12 grid-rows-[repeat(8,80px)] gap-6 relative">
                
                        <div className="col-span-5 row-span-3 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg shadow-purple-500/20 transition-all duration-500 hover:shadow-purple-500/40 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
                            <img
                                src={gif1}
                                alt="Featured Animation"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-xl uppercase tracking-wider drop-shadow-lg">3D PRINTING</span>
                            </div>
                        </div>

                        <div className="col-span-3 row-span-4 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg shadow-blue-500/20 transition-all duration-500 hover:shadow-blue-500/40 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
                            <img
                                src={portrait1}
                                alt="Portrait 1"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-xl uppercase tracking-wider drop-shadow-lg">Medal Holder</span>
                            </div>
                        </div>

                        <div className="col-span-4 row-span-3 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg shadow-pink-500/20 transition-all duration-500 hover:shadow-pink-500/40 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
                            <img
                                src={portrait2}
                                alt="Portrait 2"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/80 to-purple-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-xl uppercase tracking-wider drop-shadow-lg">MIRROR</span>
                            </div>
                        </div>

                        <div className="col-span-3 row-span-2 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg shadow-green-500/20 transition-all duration-500 hover:shadow-green-500/40 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
                            <img
                                src={gif2}
                                alt="Secondary Animation"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-blue-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-xl uppercase tracking-wider drop-shadow-lg">LAMP</span>
                            </div>
                        </div>

                        <div className="col-span-9 row-span-2 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg shadow-purple-500/20 transition-all duration-500 hover:shadow-purple-500/40 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
                            <img
                                src={normal1}
                                alt="Landscape 1"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-blue-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-xl uppercase tracking-wider drop-shadow-lg">CHARGER WINDER</span>
                            </div>
                        </div>

                        <div className="col-span-3 row-span-3 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg shadow-yellow-500/20 transition-all duration-500 hover:shadow-yellow-500/40 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
                            <img
                                src={portrait3}
                                alt="Portrait 3"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/80 to-orange-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-xl uppercase tracking-wider drop-shadow-lg">3D PRINTING</span>
                            </div>
                        </div>

                        <div className="col-span-3 row-span-3 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg shadow-red-500/20 transition-all duration-500 hover:shadow-red-500/40 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
                            <img
                                src={portrait4}
                                alt="Portrait 4"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 to-pink-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-xl uppercase tracking-wider drop-shadow-lg">WALL HOLDER</span>
                            </div>
                        </div>

                        <div className="col-span-6 row-span-2 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg shadow-indigo-500/20 transition-all duration-500 hover:shadow-indigo-500/40 hover:shadow-xl hover:-translate-y-2 hover:scale-105">
                            <img
                                src={normal2}
                                alt="Landscape 2"
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-xl uppercase tracking-wider drop-shadow-lg">3D SPIDERMAN</span>
                            </div>
                        </div>

                        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-16 -right-8 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '700ms' }}></div>
                        <div className="absolute top-1/3 -right-6 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1000ms' }}></div>
                    </div>

                    <div className="hidden md:grid lg:hidden grid-cols-6 gap-4">
                        <div className="col-span-6 h-48 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                            <img src={gif1} alt="Featured" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-pink-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg uppercase tracking-wider">Featured</span>
                            </div>
                        </div>

                        <div className="col-span-3 h-64 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                            <img src={portrait1} alt="Portrait 1" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 to-purple-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg uppercase tracking-wider">Portrait</span>
                            </div>
                        </div>

                        <div className="col-span-3 h-64 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                            <img src={portrait2} alt="Portrait 2" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/80 to-purple-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg uppercase tracking-wider">Design</span>
                            </div>
                        </div>

                        <div className="col-span-6 h-40 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                            <img src={gif2} alt="Motion" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-br from-green-600/80 to-blue-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg uppercase tracking-wider">Motion</span>
                            </div>
                        </div>

                        <div className="col-span-6 h-48 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                            <img src={normal1} alt="Creation" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/80 to-blue-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg uppercase tracking-wider">Creation</span>
                            </div>
                        </div>

                        <div className="col-span-3 h-64 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                            <img src={portrait3} alt="Art" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/80 to-orange-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg uppercase tracking-wider">Art</span>
                            </div>
                        </div>

                        <div className="col-span-3 h-64 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                            <img src={portrait4} alt="Craft" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-br from-red-600/80 to-pink-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg uppercase tracking-wider">JOKER</span>
                            </div>
                        </div>

                        <div className="col-span-6 h-48 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                            <img src={normal2} alt="Innovation" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-purple-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-bold text-lg uppercase tracking-wider">3D PRINTING</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:hidden grid-cols-1 gap-4">
                        {[
                            { src: gif1, label: "Featured", colors: "from-purple-600/80 to-pink-600/60" },
                            { src: portrait1, label: "Portrait", colors: "from-blue-600/80 to-purple-600/60" },
                            { src: portrait2, label: "Design", colors: "from-pink-600/80 to-purple-600/60" },
                            { src: gif2, label: "Motion", colors: "from-green-600/80 to-blue-600/60" },
                            { src: normal1, label: "Creation", colors: "from-purple-600/80 to-blue-600/60" },
                            { src: portrait3, label: "Art", colors: "from-yellow-600/80 to-orange-600/60" },
                            { src: portrait4, label: "Craft", colors: "from-red-600/80 to-pink-600/60" },
                            { src: normal2, label: "Innovation", colors: "from-indigo-600/80 to-purple-600/60" }
                        ].map((item, index) => (
                            <div key={index} className="h-64 group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                                <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110" />
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.colors} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                                    <span className="text-white font-bold text-lg uppercase tracking-wider">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products;