"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface CarouselSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  videoSrc: string;
  cta: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
  badge?: string;
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "Your Strategic Partner for Corporate Legal Solutions",
    subtitle: "Leading Legal Excellence",
    description: "Top-Tier Legal Services in UAE & Fractional General Counsel Across the Middle East, Africa, and Asia. 25+ Years of Expertise in Corporate, Commercial, and Contract Law.",
    videoSrc: "/media/ocean-background.mp4",
    cta: {
      primary: { text: "Schedule Consultation", href: "/contact" },
      secondary: { text: "Our Expertise", href: "/about" },
    },
    badge: "Leading Legal Excellence Since 1999",
  },
  {
    id: 2,
    title: "Global Reach Across Middle East, Africa & Asia",
    subtitle: "International Excellence",
    description: "We deliver sophisticated legal support across diverse regions with deep understanding of local legal, commercial, and cultural landscapes. Guiding foreign investors and expanding Middle Eastern businesses globally.",
    videoSrc: "/media/dubaiwater.mp4",
    cta: {
      primary: { text: "Explore Our Reach", href: "/services" },
      secondary: { text: "Global Expertise", href: "/about" },
    },
    badge: "Multi-Jurisdictional Expertise",
  },
  {
    id: 3,
    title: "Technology-Enabled Legal Solutions",
    subtitle: "Modern Legal Innovation",
    description: "Combining traditional legal excellence with modern technology and AI-enabled tools to deliver greater efficiency, enhanced accuracy, and meaningful cost savings for clients across industries.",
    videoSrc: "/media/mountaincloud.mp4",
    cta: {
      primary: { text: "Discover Innovation", href: "/services" },
      secondary: { text: "Our Technology", href: "/about" },
    },
    badge: "Technology-Driven Solutions",
  },
  {
    id: 4,
    title: "Your Strategic Partnership Journey",
    subtitle: "Committed Partners in Success",
    description: "We go beyond providing legal advice—we act as committed partners in your success, working alongside you to build strong foundations, manage risk effectively, and drive sustainable growth with confidence.",
    videoSrc: "/media/windingroadvideo.mp4",
    cta: {
      primary: { text: "Start Your Journey", href: "/contact" },
      secondary: { text: "Partnership Approach", href: "/about" },
    },
    badge: "Strategic Partnership Excellence",
  },
  {
    id: 5,
    title: "Fractional General Counsel Services",
    subtitle: "Expert Legal Leadership",
    description: "Our Fractional General Counsel model gives your business expert legal leadership without the overhead of a large legal team. Strategic guidance that integrates seamlessly with your executive leadership.",
    videoSrc: "/media/fountain-background.mp4",
    cta: {
      primary: { text: "Learn More", href: "/services#fractional-gc" },
      secondary: { text: "View Services", href: "/services" },
    },
    badge: "Executive-Level Counsel",
  },
];

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [videosLoaded, setVideosLoaded] = useState<boolean[]>(new Array(slides.length).fill(false));
  const [, setUserInteracted] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const handleVideoLoad = (index: number) => {
    setVideosLoaded(prev => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const handleVideoClick = () => {
    const videos = document.querySelectorAll('video');
    videos.forEach(video => {
      video.play().catch(console.error);
    });
    setUserInteracted(true);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative w-full h-[70vh] max-h-[700px] min-h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div key={slide.id} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"}`}>
          
          {/* Video - always on top when loaded */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover z-10"
            style={{ display: 'block' }}
            onError={(e) => {
              console.error('Video failed to load:', slide.videoSrc, e);
              // Hide the video element completely when it fails to load
              const video = e.target as HTMLVideoElement;
              video.style.display = 'none';
              setVideosLoaded(prev => {
                const newState = [...prev];
                newState[index] = false;
                return newState;
              });
            }}
            onLoadedData={() => {
              console.log('Video loaded:', slide.videoSrc);
              handleVideoLoad(index);
            }}
            onCanPlay={(e) => {
              console.log('Video can play:', slide.videoSrc);
              const video = e.target as HTMLVideoElement;
              video.play().catch(() => {
                console.log('Video autoplay failed, will wait for user interaction');
              });
            }}
            onClick={handleVideoClick}
          >
            <source src={slide.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlays - on top of video */}
          <div className="absolute inset-0 bg-black/40 z-20"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent z-20"></div>
          
        </div>
      ))}

      <div className="relative z-40 h-full flex items-center">
        <div className="container-custom">
          <div className="max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center h-full">
              <div className="flex justify-center lg:justify-start py-8 lg:py-0">
                <Link href="/" className="group">
                  <Image
                    src="/media/TFF_Law_Logo_White_Version.png"
                    alt="TFF Legal"
                    width={800}
                    height={400}
                    className="h-auto w-auto object-contain logo-emerge logo-float group-hover:scale-105 transition-transform duration-300 drop-shadow-2xl scale-150 md:scale-[2] lg:scale-[2.5] xl:scale-[3]"
                    priority
                  />
                </Link>
              </div>
              
              <div>
                <div className="glass-container p-6 md:p-8 lg:p-10 max-w-2xl lg:max-w-none min-h-[400px] flex flex-col justify-center">
                  <div key={`badge-${currentSlide}`} className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-6 border border-white/20 animate-fade-in">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
                    {currentSlideData.badge}
                  </div>

                  <h1 key={`title-${currentSlide}`} className="text-white text-balance mb-6 leading-[1.15] animate-slide-up text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight">
                    {currentSlideData.title.includes("Strategic Partner") ? (
                      <>
                        Your Strategic Partner for
                        <span className="block text-teal-400 font-normal">Corporate Legal Solutions</span>
                      </>
                    ) : currentSlideData.title.includes("Global Reach") ? (
                      <>
                        <span className="text-teal-400 font-normal">Global Reach</span>
                        <span className="block">Across Middle East, Africa & Asia</span>
                      </>
                    ) : currentSlideData.title.includes("Technology-Enabled") ? (
                      <>
                        <span className="text-teal-400 font-normal">Technology-Enabled</span>
                        <span className="block">Legal Solutions</span>
                      </>
                    ) : currentSlideData.title.includes("Strategic Partnership") ? (
                      <>
                        Your <span className="text-teal-400 font-normal">Strategic Partnership</span>
                        <span className="block">Journey</span>
                      </>
                    ) : currentSlideData.title.includes("Fractional") ? (
                      <>
                        <span className="text-teal-400 font-normal">Fractional General Counsel</span>
                        <span className="block">Services</span>
                      </>
                    ) : (
                      currentSlideData.title
                    )}
                  </h1>

                  <p key={`desc-${currentSlide}`} className="text-white/90 mb-8 max-w-2xl animate-fade-in-delayed text-lg md:text-xl leading-relaxed font-light">
                    {currentSlideData.description}
                  </p>

                  <div key={`cta-${currentSlide}`} className="animate-slide-up-delayed">
                    <Link href={currentSlideData.cta.primary.href} className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 group">
                      {currentSlideData.cta.primary.text}
                      <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-8 z-50">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <button
        onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
        className="absolute left-8 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-8 top-1/2 transform -translate-y-1/2 z-50 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>


      {/* Subtle bottom gradient for continuity */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent z-30 pointer-events-none"></div>
    </section>
  );
}