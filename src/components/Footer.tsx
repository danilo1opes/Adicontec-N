import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="text-2xl font-serif text-white">
              A<span className="text-orange-600">dicontec</span>
            </Link>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contato</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+5562996859455" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  +55 (62) 9 9685-9455
                </a>
              </li>
              <li>
                <a 
                  href="mailto:adicontec.ingredientes@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  adicontec.ingredientes@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                Envie-nos uma mensagem
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Informações</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/products" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Produtos
                </Link>
              </li>
              <li>
                <Link 
                  to="/spices" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Especiarias
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-gray-400 text-center">
            ADICONTEC © Alguns Direitos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}