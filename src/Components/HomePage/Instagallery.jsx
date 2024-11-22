import React from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramGallery = () => {
  // Actual image data with URLs to jewelry images
  const galleryImages = [
    { id: 1, aspect: 'aspect-[3/4]', imgSrc: 'https://www.dazzlesjewellery.in/cdn/shop/files/IMG_9798_0af72cbf-a031-4900-8c47-96cfa781b91d.jpg?v=1720172694' },
    { id: 2, aspect: 'aspect-square', imgSrc: 'https://www.dazzlesjewellery.in/cdn/shop/files/IMG_9798_0af72cbf-a031-4900-8c47-96cfa781b91d.jpg?v=1720172694' },
    { id: 3, aspect: 'aspect-[3/4]', imgSrc: 'https://www.dazzlesjewellery.in/cdn/shop/files/IMG_9798_0af72cbf-a031-4900-8c47-96cfa781b91d.jpg?v=1720172694' },
    { id: 4, aspect: 'aspect-[3/4]', imgSrc: 'p1.png' },
    { id: 5, aspect: 'aspect-square', imgSrc: 'p2.png' },
    { id: 6, aspect: 'aspect-[3/4]', imgSrc: 'p3.png' },
    { id: 7, aspect: 'aspect-[3/4]', imgSrc: 'p1.png' },
    { id: 8, aspect: 'aspect-square', imgSrc: 'https://www.dazzlesjewellery.in/cdn/shop/files/IMG_9798_0af72cbf-a031-4900-8c47-96cfa781b91d.jpg?v=1720172694' },
    { id: 9, aspect: 'aspect-[3/4]', imgSrc: 'https://www.dazzlesjewellery.in/cdn/shop/files/IMG_9798_0af72cbf-a031-4900-8c47-96cfa781b91d.jpg?v=1720172694' },
    { id: 10, aspect: 'aspect-[3/4]', imgSrc: 'https://www.dazzlesjewellery.in/cdn/shop/files/IMG_9798_0af72cbf-a031-4900-8c47-96cfa781b91d.jpg?v=1720172694' },
    { id: 11, aspect: 'aspect-square', imgSrc: 'https://www.dazzlesjewellery.in/cdn/shop/files/IMG_9798_0af72cbf-a031-4900-8c47-96cfa781b91d.jpg?v=1720172694' },
    { id: 12, aspect: 'aspect-[3/4]', imgSrc: 'https://www.dazzlesjewellery.in/cdn/shop/files/IMG_9798_0af72cbf-a031-4900-8c47-96cfa781b91d.jpg?v=1720172694' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="flex items-center justify-center gap-8 mb-4">
          <div className="h-px bg-gray-300 w-24"></div>
          <div className="text-orange-500">
            <FaInstagram size={24} />
          </div>
          <div className="h-px bg-gray-300 w-24"></div>
        </div>
        <h2 className="text-2xl md:text-3xl text-orange-500 font-serif">
          Follow Us On Instagram
        </h2>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className={`${image.aspect} group relative overflow-hidden`}
            
          >
            {/* Image */}
            <img
              src={image.imgSrc}
              alt={`Jewelry image ${image.id}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <FaInstagram size={32} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Instagram Button */}
      <div className="text-center mt-12">
        <a
          href="#"
          className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors duration-300"
        >
          <FaInstagram size={20} />
          <span>Follow on Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default InstagramGallery;
