import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  X, 
  ChevronLeft, 
  ChevronRight,
  Play,
  Image as ImageIcon
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  // Gallery data organized by categories
  const galleryData = {
    machines: [
      '/machine1.png',
      '/machine2.png', 
      '/machine3.png',
      '/machine4.png',
      '/machine5.png',
      '/machine6.png'
    ],
    books: [
      '/books/1.jpg',
      '/books/2.jpg',
      '/books/3.jpg',
      '/books/4.jpg',
      '/books/5.jpg',
      '/books/6.jpg',
      '/books/7.jpg',
      '/books/8.jpg',
      '/books/9.jpg',
      '/books/10.jpg',
      '/books/11.jpg',
      '/books/12.jpg',
      '/books/13.jpg',
      '/books/14.jpg',
      '/books/15.jpg',
      '/books/16.jpg'
    ],
    workSamples: [
      '/images/IMG-20250712-WA0020.jpg',
      '/images/IMG-20250712-WA0021.jpg',
      '/images/IMG-20250712-WA0019.jpg',
      '/images/IMG-20250712-WA0018.jpg',
      '/images/IMG-20250712-WA0017.jpg',
      '/images/IMG-20250712-WA0016.jpg',
      '/images/IMG-20250712-WA0015.jpg',
      '/images/IMG-20250712-WA0014.jpg',
      '/images/IMG-20250712-WA0013.jpg',
      '/images/IMG-20250712-WA0012.jpg',
      '/images/IMG-20250712-WA0011.jpg',
      '/images/IMG-20250712-WA0010.jpg',
      '/images/IMG-20250712-WA0009.jpg',
      '/images/IMG-20250711-WA0045.jpg',
      '/images/IMG-20250711-WA0044.jpg',
      '/images/IMG-20250711-WA0043.jpg',
      '/images/IMG-20250711-WA0042.jpg',
      '/images/IMG-20250711-WA0041.jpg',
      '/images/IMG-20250711-WA0040.jpg',
      '/images/IMG-20250711-WA0039.jpg',
      '/images/IMG-20250711-WA0038.jpg',
      '/images/IMG-20250711-WA0037.jpg',
      '/images/IMG-20250711-WA0036.jpg',
      '/images/IMG-20250711-WA0035.jpg',
      '/images/IMG-20250711-WA0034.jpg',
      '/images/IMG-20250711-WA0033.jpg',
      '/images/IMG-20250711-WA0032.jpg',
      '/images/IMG-20250711-WA0031.jpg',
      '/images/IMG-20250711-WA0030.jpg',
      '/images/IMG-20250711-WA0029.jpg',
      '/images/IMG-20250711-WA0028.jpg',
      '/images/IMG-20250711-WA0027.jpg',
      '/images/IMG-20250711-WA0021.jpg',
      '/images/IMG-20250711-WA0020.jpg',
      '/images/IMG-20250711-WA0019.jpg',
      '/images/IMG-20250711-WA0018.jpg',
      '/images/IMG-20250711-WA0017.jpg',
      '/images/IMG-20250711-WA0016.jpg',
      '/images/IMG-20250711-WA0015.jpg'
    ],
    videos: [
      '/images/VID-20250712-WA0004.mp4',
      '/images/VID-20250712-WA0003.mp4',
      '/images/VID-20250712-WA0002.mp4',
      '/images/VID-20250712-WA0001.mp4',
      '/images/VID-20250711-WA0004.mp4',
      '/images/VID-20250711-WA0003.mp4',
      '/images/VID-20250711-WA0002.mp4'
    ]
  };

  const categories = [
    { id: 'all', name: 'All Work', count: galleryData.machines.length + galleryData.books.length + galleryData.workSamples.length + galleryData.videos.length },
    { id: 'machines', name: 'Our Machines', count: galleryData.machines.length },
    { id: 'books', name: 'Book Printing', count: galleryData.books.length },
    { id: 'workSamples', name: 'Work Samples', count: galleryData.workSamples.length },
    { id: 'videos', name: 'Videos', count: galleryData.videos.length }
  ];

  const getAllImages = () => {
    return [
      ...galleryData.machines,
      ...galleryData.books,
      ...galleryData.workSamples,
      ...galleryData.videos
    ];
  };

  const getFilteredImages = () => {
    if (activeCategory === 'all') return getAllImages();
    return galleryData[activeCategory as keyof typeof galleryData] || [];
  };

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const images = getFilteredImages();
    setSelectedIndex((prev) => (prev + 1) % images.length);
    setSelectedImage(images[(selectedIndex + 1) % images.length]);
  };

  const prevImage = () => {
    const images = getFilteredImages();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    setSelectedImage(images[(selectedIndex - 1 + images.length) % images.length]);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set('.gallery-item', { y: 60, opacity: 0 });
      
      gsap.to('.gallery-item', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  const isVideo = (url: string) => url.includes('.mp4');

  return (
    <section ref={sectionRef} className="pt-24 pb-16 bg-white">
      <div className="container">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-xl text-neutral-900 mb-6">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="body-lg text-neutral-600 max-w-3xl mx-auto">
            Explore our extensive collection of printing work, from machinery showcases 
            to finished products and behind-the-scenes videos.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getFilteredImages().map((item, index) => (
            <motion.div
              key={index}
              className="gallery-item group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(item, index)}
            >
              <div className="relative aspect-square bg-neutral-100 rounded-xl overflow-hidden shadow-lg">
                {isVideo(item) ? (
                  <>
                    <video
                      src={item}
                      className="w-full h-full object-cover"
                      muted
                      loop
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                  </>
                ) : (
                  <img
                    src={item}
                    alt={`Gallery item ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
                <div className="absolute top-3 right-3">
                  {isVideo(item) ? (
                    <div className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                      <Play className="w-3 h-3 inline mr-1" />
                      Video
                    </div>
                  ) : (
                    <div className="bg-black/50 text-white px-2 py-1 rounded text-xs">
                      <ImageIcon className="w-3 h-3 inline mr-1" />
                      Image
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div className="relative max-w-4xl max-h-full">
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                <div className="relative" onClick={(e) => e.stopPropagation()}>
                  {isVideo(selectedImage) ? (
                    <video
                      src={selectedImage}
                      className="max-w-full max-h-[80vh] object-contain"
                      controls
                      autoPlay
                    />
                  ) : (
                    <img
                      src={selectedImage}
                      alt="Selected gallery item"
                      className="max-w-full max-h-[80vh] object-contain"
                    />
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery; 