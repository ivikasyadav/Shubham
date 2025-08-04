    import React from 'react';
    
    import img1 from './assets/cycling/cy1.jpg'
    import img2 from './assets/cycling/cy2.jpg'
    import img3 from './assets/cycling/cy3.jpg'
    import img4 from './assets/cycling/cy4.jpg'
    import img5 from './assets/cycling/cy5.jpg'
    import img6 from './assets/cycling/cy6.jpg'
    import img7 from './assets/cycling/cy7.jpg'
    import img8 from './assets/cycling/cy8.jpg'
    import img9 from './assets/cycling/cy9.jpg'
    import img10 from './assets/cycling/cy11.jpg'
    import img11 from './assets/cycling/cy11.jpg'
    import img12 from './assets/cycling/cy12.jpg'
    import img13 from './assets/cycling/cy13.jpg'
    import img14 from './assets/cycling/cy14.jpg'

    const portraitImages = [
        img7,
        img12,
        img14
    ];

    const landscapeImages = [
        img1 ,
img2 ,
img3 ,
img4 ,
img5 ,
img6 ,

img8 ,
img9 ,
img10,
img11,

img13,

    ];
    const Cycling = () => {
        
        const allImages = [...landscapeImages, ...portraitImages].sort(() => Math.random() - 0.5);

        return (
            <section id="cycling" className="w-full min-h-screen px-4 sm:px-6 lg:px-8 py-16">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white tracking-tight">
                    Cycling
                </h2>
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-3 gap-4 max-w-7xl mx-auto">
                    {allImages.map((src, index) => (
                        <div
                            key={`image-${index}`}
                            className="break-inside-avoid mb-4 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group relative"
                        >
                            <img
                                src={src}
                                alt={`Cycling image ${index + 1}`}
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-102"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-end">
                                <p className="w-full text-center text-white text-sm font-medium  bg-opacity-50 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {/* Cycling Moment {index + 1} */}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        );
    };

    export default Cycling;
