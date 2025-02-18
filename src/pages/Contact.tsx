import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <>
      <main className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold mb-6">
              Onde nos encontrar
            </h1>
            <p className="text-gray-600 text-lg">
              Com uma única loja em Aparecida, a Adicontec tem o orgulho de
              oferecer a você uma seleção diversificada de produtos ao seu
              alcance.
            </p>
          </div>
        </div>
      </main>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-3xl font-serif font-bold mb-6">Goiás</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-orange-600 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Endereço:</p>
                    <p className="text-gray-600">
                      Alameda Geraldino Franco
                      <br />
                      Setor Planice
                      <br />
                      Aparecida de Goiânia, GO
                      <br />
                      CEP: 74988-827
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-semibold">Horário:</p>
                    <p className="text-gray-600">8:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-semibold">Telefone:</p>
                    <p className="text-gray-600">(62) 99685-8455</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p className="text-gray-600">
                      adicontec.ingredientes@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.9761234567891!2d-49.2345678!3d-16.7890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ3JzIwLjQiUyA0OcKwMTQnMDQuNCJX!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
