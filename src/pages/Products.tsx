import { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export function Products() {
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
              <p className="text-gray-600 text-lg mb-4">
                Qualidade, sabor e consistência.
              </p>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-8">
                CONDIMENTOS
              </h1>
              <p className="text-gray-700 mb-8">
                Indispensáveis para proporcionar uma experiência sensorial
                inesquecível e marcante, nossos condimentos são cuidadosamente
                elaborados a partir de uma combinação de ingredientes
                selecionados, incluindo especiarias e óleos essenciais.
              </p>
              <div className="space-y-4">
                <h2 className="text-xl font-bold text-gray-900">
                  Dividida em categorias específicas
                </h2>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-600" />
                    Bases culinárias
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-600" />
                    Condimentos para embutidos
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-600" />
                    Condimentos para cortes
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-600" />
                    Condimentos gourmet
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1532336414038-cf19250c5757"
                alt="Condimentos variados"
                className="rounded-lg shadow-xl"
                width={900}
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
                src="https://images.unsplash.com/photo-1606914469725-e398d2f1d7ee"
                alt="Aditivos e temperos"
                className="rounded-lg shadow-xl"
                width={600}
                height={400}
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif font-bold text-white mb-6">
                Aditivos
              </h2>
              <p className="text-gray-300 mb-8">
                Nossa linha de aditivos oferece funcionalidades que variam desde
                o aumento da vida útil dos produtos até a manutenção da
                experiência sensorial. Resultado de estudos detalhados aplicados
                a diversas fontes de proteína animal e seu comportamento durante
                o processamento cárneo, nossos aditivos priorizam a qualidade e
                segurança dos alimentos.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-200">
                  Categorias específicas
                </h3>
                <ul className="grid grid-cols-2 gap-4 text-gray-300">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-600" />
                    Sais de cura
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-600" />
                    Realçadores de sabor
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-600" />
                    Fixadores de cor
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-600" />
                    Antioxidantes naturais
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-600" />
                    Emulsificantes
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-600" />
                    Redutores de sódio
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
