import Lit_O_pot from './assets/Lit_O_pot.jpg';
import medal1 from './assets/product/medal/medal1.jpg';
import medal2 from './assets/product/medal/medal2.jpg';
import winder1 from './assets/product/winder/winder1.png';
import winder2 from './assets/product/winder/winder2.png';
import lamp from './assets/product/lamp.jpg';
import Medal from './assets/product/Medal.png';
import gif1 from './assets/product/giv/handskakegif.gif';
import gif2 from './assets/product/giv/lampgif.gif';
import portrait1 from './assets/product/medal/medal3.jpg';
import portrait2 from './assets/product/cyclemirror.jpg';
import portrait3 from './assets/product/joker.jpg';
import portrait4 from './assets/product/joker.jpg';
import normal1 from './assets/product/winder/winder3.png';
import normal2 from './assets/product/spiderman.jpg';

const products = [
    { src: winder1, label: 'Charger Winder', colors: 'from-purple-600/80 to-blue-600/60' },
    { src: medal1, label: 'Medal Holder', colors: 'from-blue-600/80 to-purple-600/60' },
    { src: Lit_O_pot, label: 'Lamp', colors: 'from-green-600/80 to-blue-600/60' },
    { src: winder2, label: 'Charger Winder', colors: 'from-purple-600/80 to-blue-600/60' },
    { src: medal2, label: 'Medal Holder', colors: 'from-blue-600/80 to-purple-600/60' },
    { src: lamp, label: 'Lamp', colors: 'from-green-600/80 to-blue-600/60' },
];

const existingImages = [
    { src: gif1, label: '3D Printing', colors: 'from-purple-600/80 to-pink-600/60' },
    { src: portrait1, label: 'Medal Holder', colors: 'from-blue-600/80 to-purple-600/60' },
    { src: portrait2, label: 'Mirror', colors: 'from-pink-600/80 to-purple-600/60' },
    { src: gif2, label: 'Lamp', colors: 'from-green-600/80 to-blue-600/60' },
    { src: normal1, label: 'Charger Winder', colors: 'from-purple-600/80 to-blue-600/60' },
    { src: portrait4, label: 'Wall Holder', colors: 'from-red-600/80 to-pink-600/60' },
    { src: normal2, label: '3D Spiderman', colors: 'from-indigo-600/80 to-purple-600/60' },
    { src: Medal, label: 'Medal Holder', colors: 'from-indigo-600/80 to-purple-600/60' },
];

const allProducts = [...existingImages, ...products];

const Products = () => {
    return (
        <section id="products" className="w-full py-20 bg-black min-h-screen">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center mb-16 text-white bg-clip-text">
                     Product
                </h2>
                <div className="relative max-w-7xl mx-auto">
                    {/* Desktopp Grid */}
                    <div className="hidden lg:grid grid-cols-12 grid-rows-[repeat(12,80px)] gap-6 relative">
                        {allProducts.map((item, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:scale-105
                                    ${index === 0 ? 'col-span-5 row-span-3' :
                                        index === 1 ? 'col-span-3 row-span-4' :
                                            index === 2 ? 'col-span-4 row-span-3' :
                                                index === 3 ? 'col-span-3 row-span-2' :
                                                    index === 4 ? 'col-span-9 row-span-2' :
                                                        index === 5 ? 'col-span-3 row-span-3' :
                                                            index === 6 ? 'col-span-6 row-span-2' :
                                                                index === 7 ? 'col-span-6 row-span-2' :
                                                                    index >= 8 ? 'col-span-4 row-span-3' : 'col-span-6 row-span-2'}`}
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.colors} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                                    <span className="text-white font-bold text-xl uppercase tracking-wider drop-shadow-lg">{item.label}</span>
                                </div>
                            </div>
                        ))}
                        <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse"></div>
                        <div className="absolute -bottom-16 -right-8 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-10 animate-pulse" style={{ animationDelay: '700ms' }}></div>
                        <div className="absolute top-1/3 -right-6 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-15 animate-pulse" style={{ animationDelay: '1000ms' }}></div>
                    </div>

                   {/* tab and  grid */}
                    <div className="hidden md:grid lg:hidden grid-cols-6 gap-4">
                        {allProducts.map((item, index) => (
                            <div
                                key={index}
                                className={`group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105
                                    ${index === 0 ? 'col-span-6 h-48' :
                                        index === 1 || index === 2 ? 'col-span-3 h-64' :
                                            index === 3 ? 'col-span-6 h-40' :
                                                index === 4 ? 'col-span-6 h-48' :
                                                    index === 5 || index === 6 ? 'col-span-3 h-64' :
                                                        index === 7 ? 'col-span-6 h-48' :
                                                            index >= 8 ? 'col-span-3 h-64' : 'col-span-6 h-48'}`}
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.colors} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                                    <span className="text-white font-bold text-lg uppercase tracking-wider">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* mob grid */}
                    <div className="grid md:hidden grid-cols-1 gap-4">
                        {allProducts.map((item, index) => (
                            <div
                                key={index}
                                className="h-full group relative overflow-hidden rounded-2xl bg-slate-800 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:scale-105"
                            >
                                <img
                                    src={item.src}
                                    alt={item.label}
                                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                />
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