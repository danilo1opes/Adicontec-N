import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export function Spices() {
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
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <main className="bg-gray-50 py-20 js-scroll">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <p className="text-gray-600 text-lg mb-4">Autenticidade, aroma e sabor.</p>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-8">ESPECIARIAS</h1>
              <p className="text-gray-700 mb-8">
                Nossas especiarias são meticulosamente selecionadas para oferecer autenticidade, 
                aroma e sabor inigualáveis. Cada ingrediente é escolhido para garantir a máxima 
                qualidade e frescor, proporcionando um toque especial e distinto aos seus produtos.
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d"
                alt="Especiarias variadas"
                className="rounded-lg shadow-xl"
                width={600}
                height={588}
              />
            </div>
          </div>
        </div>
      </main>

      <section className="bg-gray-900 py-20 js-scroll">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1604329760661-e71dc83f8f26"
                alt="Corantes naturais"
                className="rounded-lg shadow-xl"
                width={600}
                height={400}
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif font-bold text-white mb-6">Corantes</h2>
              <p className="text-gray-300 mb-8">
                Nossa linha de corantes naturais oferece soluções que vão desde a intensificação 
                de cores até a manutenção da aparência e apelo visual dos produtos. Desenvolvidos 
                a partir de fontes naturais, nossos corantes são seguros e de alta qualidade.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-200">Principais Produtos</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-600" />
                    Corante de Urucum
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-600" />
                    Corante de Caramelo
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-600" />
                    Corantes Artificial alimentício
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}