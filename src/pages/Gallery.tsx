import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { galleryImages } from '../data/gallery';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Hair', 'Makeup', 'Nails', 'Bridal', 'Salon'];

  const filteredImages = galleryImages.filter(img => 
    filter === 'All' || img.category === filter
  );

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredImages.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="w-full pt-24 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <SectionHeading 
          title="Our Portfolio"
          subtitle="Explore the artistry of our talented team."
          className="mb-12"
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-sm font-sans rounded-full transition-all duration-300 ${
                filter === cat 
                  ? 'bg-espresso text-ivory' 
                  : 'bg-white border border-champagne text-espresso hover:border-rose hover:text-rose'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((img, index) => (
            <div 
              key={img.id} 
              className="relative group overflow-hidden cursor-pointer break-inside-avoid"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif tracking-widest uppercase text-sm border-b border-rose pb-1">
                  {img.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div 
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white z-50"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>
            
            <button 
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
              onClick={prevImage}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            
            <img 
              src={filteredImages[lightboxIndex].src} 
              alt={filteredImages[lightboxIndex].alt} 
              className="max-h-[85vh] max-w-[90vw] object-contain"
              onClick={e => e.stopPropagation()}
            />
            
            <button 
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2"
              onClick={nextImage}
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 font-sans text-sm">
              {lightboxIndex + 1} / {filteredImages.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
