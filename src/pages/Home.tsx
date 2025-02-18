import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.js-scroll');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        if (isVisible) {
          element.classList.add('animate-fadeIn');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="bg-gray-50 py-20 js-scroll">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <p className="text-gray-600 mb-4">Aditivos e condimentos para produtos Carneos</p>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-8">
                Especiarias & Temperos Requintados
              </h1>
              <div className="flex gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                >
                  Saiba mais <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/spices"
                  className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-lg border border-orange-600 hover:bg-orange-50 transition-colors"
                >
                  Especiarias
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1532336414038-cf19250c5757"
                alt="Temperos variados"
                className="rounded-lg shadow-xl"
                width={700}
                height={588}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional sections would go here */}
    </>
  );
}