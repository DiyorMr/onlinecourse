import zapier from '/public/img/brands/img1.svg';
import spotify from '/public/img/brands/img2.svg';
import zoom from '/public/img/brands/img3.svg';
import amazon from '/public/img/brands/img4.svg';
import adobe from '/public/img/brands/img5.svg';
import notion from '/public/img/brands/img6.svg';
import netflix from '/public/img/brands/img7.svg';

const brandImages = [
    { src: zapier, alt: 'Zapier' },
    { src: spotify, alt: 'Spotify' },
    { src: zoom, alt: 'Zoom' },
    { src: amazon, alt: 'Amazon' },
    { src: adobe, alt: 'Adobe' },
    { src: notion, alt: 'Notion' },
    { src: netflix, alt: 'Netflix' },
];

export default function Partners() {
    return (
        <div className="bg-white py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-6 items-center justify-items-center">
                {brandImages.map((brand, index) => (
                    <img
                        key={index}
                        src={brand.src}
                        alt={brand.alt}
                        className="h-10 object-contain grayscale opacity-70 hover:opacity-100 transition duration-300 ease-in-out"
                    />
                ))}
            </div>
        </div>

    );
}
