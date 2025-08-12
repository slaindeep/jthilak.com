"use client";

import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Khalid AlAseeri, J.D., MBA",
    title: "Chief Legal Officer",
    company: "Riyadh Airports",
    content: "It was a privilege working with Jitheesh. In addition to being an expert in his areas of expertise, Jitheesh was also a mentor to other team members and was very generous in his time and knowledge. Jitheesh was also unequivocal about doing the right thing and I could count on him to give an honest opinion that is in the best interest of the organization. It was a pleasure working with him and I look forward to the chance of working with him again in the future."
  },
  {
    id: 2,
    name: "Jennifer Elena (Constantinou)",
    title: "Associate General Counsel - Litigation",
    company: "Verizon",
    content: "Jitheesh was a true partner overseas in our legal department. He was a vital part of our work together in the world of international law and transactions, and was a deeply collaborative friend and colleague to counterparts in the US. Jitheesh has the requisite knowledge and background to serve as a solid asset to any legal team, and his experience would no doubt lead to compelling growth and development for any organization."
  },
  {
    id: 3,
    name: "Jonathan Tarpey",
    title: "Senior Corporate Counsel, Marketing and Commercial EMEAA",
    company: "IHG Hotels & Resorts",
    content: "Jitheesh is a highly organised, methodical and commercially astute in-house Legal Counsel and possess a keen eye for detail. Jitheesh has an extensive knowledge of the hospitality industry in the Middle East, Eurasia and Africa regions, particularly in relation to the negotiations of hotel management agreements and hotel operational issues."
  },
  {
    id: 4,
    name: "Panos Loupasis",
    title: "Managing Director - Türkiye, Middle East & Africa",
    company: "Wyndham Hotels & Resorts",
    content: "I have worked with Jitheesh since 2016. Throughout all these years Jitheesh has been a great support to me, handling successfully a wide variety of legal tasks and numerous franchise and management contract negotiations."
  },
  {
    id: 5,
    name: "Jeremy Barker",
    title: "Legal Director",
    company: "Moët Hennessy Europe",
    content: "Jitheesh is a great team player, very easy to work with and popular with his colleagues and internal clients."
  },
  {
    id: 6,
    name: "Jean-Baptiste Recher",
    title: "CDO Luxury Brands Middle East, Africa and Türkiye",
    company: "Accor",
    content: "I had the pleasure to work with Jitheesh. He is highly knowledgeable, business driven, detail oriented and a great team player."
  },
  {
    id: 7,
    name: "Wael Elprince",
    title: "Chief Technical Officer",
    company: "Bravo Hospitality Solutions",
    content: "Jitheesh is one of the most disciplined and punctual person I've ever known. His ability to work efficiently under stressful conditions and nerve-wracking deadlines speaks about his hard work. During the Contracts negotiation, he worked as the project leader and demonstrated excellent leadership, team player and negotiation skills. He is extremely dedicated, reliable, result oriented and willing to go the extra mile."
  },
  {
    id: 8,
    name: "Jerome Briet",
    title: "Chief Development Officer, Europe, Middle East & Africa",
    company: "Marriott International",
    content: "Jitheesh is one of the most thorough and professional counsels I have worked with. His ability to find solutions around existing issues and professional and courteous attitude are attributes that make of Jitheesh an undeniable asset."
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Change every 6 seconds
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000); // Resume auto-play after 15 seconds
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container-custom max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations across the Middle East, Africa, and Asia
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 text-primary/20">
              <svg
                className="w-16 h-16"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                &ldquo;{currentTestimonial.content}&rdquo;
              </blockquote>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {currentTestimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-primary font-semibold">
                    {currentTestimonial.title}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-32 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-150 ease-linear"
            style={{ 
              width: `${((currentIndex + 1) / testimonials.length) * 100}%` 
            }}
          />
        </div>
      </div>
    </section>
  );
}