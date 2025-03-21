import React, { useState } from 'react';

const testimonials = [
  {
    content: "GAAP has completely transformed how we manage AI compliance. What used to take weeks of manual work can now be done in hours with better accuracy.",
    author: "Sarah Mitchell",
    position: "Chief Compliance Officer",
    company: "TechNova Solutions",
    image: "/api/placeholder/64/64"
  },
  {
    content: "As a financial institution, we face strict regulatory requirements for our AI systems. GAAP's compliance automation tools have been a game-changer for our team.",
    author: "Michael Reynolds",
    position: "Head of AI Governance",
    company: "Global Financial Group",
    image: "/api/placeholder/64/64"
  },
  {
    content: "The real-time monitoring capabilities of GAAP give us confidence that our AI models are performing as expected and ethically. The early warning system has already prevented several potential issues.",
    author: "Jennifer Zhao",
    position: "AI Ethics Director",
    company: "HealthTech Innovations",
    image: "/api/placeholder/64/64"
  },
  {
    content: "Implementing GAAP has significantly reduced our risk exposure while accelerating our AI deployment pipeline. Our data science and compliance teams are now working in harmony.",
    author: "David Anderson",
    position: "CTO",
    company: "Retail Analytics Inc.",
    image: "/api/placeholder/64/64"
  },
  {
    content: "The explainability tools in GAAP have helped us build trust with our customers and regulators. We can now clearly demonstrate how our AI systems make decisions.",
    author: "Sophia Rodriguez",
    position: "VP of Data Science",
    company: "Insurance Partners",
    image: "/api/placeholder/64/64"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((activeIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-5xl">
            Trusted by Industry Leaders
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-300">
            See what our customers are saying about their experience with GAAP
          </p>
        </div>

        <div className="relative">
          {/* Large quote marks */}
          <div className="absolute top-0 left-0 transform -translate-x-6 -translate-y-8">
            <svg width="45" height="36" className="text-green-800" fill="currentColor">
              <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
            </svg>
          </div>

          <div className="bg-gray-900 border border-green-900/30 rounded-xl shadow-2xl p-10 relative">
            <div className="min-h-[200px]">
              <p className="text-xl text-gray-200 italic leading-relaxed mb-8">
                "{testimonials[activeIndex].content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author} 
                  className="h-12 w-12 rounded-full border-2 border-green-600"
                />
                <div className="ml-4">
                  <p className="text-white font-medium">{testimonials[activeIndex].author}</p>
                  <p className="text-green-500">{testimonials[activeIndex].position}</p>
                  <p className="text-gray-400 text-sm">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-12">
              <div className="flex space-x-1">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-3 h-3 rounded-full ${
                      idx === activeIndex ? 'bg-green-600' : 'bg-gray-700'
                    }`}
                  ></button>
                ))}
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full border border-gray-700 hover:border-green-600 text-gray-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border border-gray-700 hover:border-green-600 text-gray-400 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;