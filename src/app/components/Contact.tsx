import { Phone, Mail, MessageCircle, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solicite um orçamento personalizado e consulte disponibilidade de datas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Fale Conosco
              </h3>

              <div className="space-y-6">
                <a
                  href="tel:+5511993890639"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Telefone / WhatsApp</p>
                    <p className="text-lg font-semibold text-gray-900">(11) 99389-0639</p>
                  </div>
                </a>

                <a
                  href="mailto:llvoiceandmusic@gmail.com"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">E-mail</p>
                    <p className="text-lg font-semibold text-gray-900">llvoiceandmusic@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Horário de Atendimento</p>
                    <p className="text-lg font-semibold text-gray-900">Seg - Dom: 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-white rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Atendimento</p>
                    <p className="text-lg font-semibold text-gray-900">Jundiaí e região</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl border-2 border-green-200">
              <div className="flex items-start gap-4">
                <MessageCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Resposta Rápida no WhatsApp
                  </h4>
                  <p className="text-gray-700 mb-4">
                    Tire suas dúvidas e receba um orçamento personalizado em minutos!
                  </p>
                  <a
                    href="https://wa.me/5511993890639"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Solicite um Orçamento
            </h3>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault(); // previne o envio tradicional

                // Captura os valores do formulário
                const name = (document.getElementById("name") as HTMLInputElement).value;
                const phone = (document.getElementById("phone") as HTMLInputElement).value;
                const email = (document.getElementById("email") as HTMLInputElement).value;
                const eventDate = (document.getElementById("event-date") as HTMLInputElement).value;
                const eventType = (document.getElementById("event-type") as HTMLSelectElement).value;
                const message = (document.getElementById("message") as HTMLTextAreaElement).value;

                // Monta a mensagem
                const text = `Olá, gostaria de solicitar um orçamento para meu evento:
                - Nome: ${name}
                - WhatsApp: ${phone}
                - E-mail: ${email}
                - Data do Evento: ${eventDate}
                - Tipo de Evento: ${eventType}
                - Mensagem: ${message}`;

                // Codifica para URL
                const encodedText = encodeURIComponent(text);

                // Número do seu WhatsApp (com DDI, ex: 55 para Brasil)
                const whatsappNumber = "5511993890639"; // substitua pelo seu número

                // Abre o WhatsApp com a mensagem
                window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  WhatsApp / Telefone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="event-date" className="block text-sm font-semibold text-gray-700 mb-2">
                  Data do Evento *
                </label>
                <input
                  type="date"
                  id="event-date"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </div>

              <div>
                <label htmlFor="event-type" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de Evento *
                </label>
                <select
                  id="event-type"
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                >
                  <option value="">Selecione...</option>
                  <option value="aniversario">Aniversário</option>
                  <option value="corporativo">Evento Corporativo</option>
                  <option value="casamento">Casamento</option>
                  <option value="formatura">Formatura</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
                  placeholder="Conte-nos mais sobre seu evento..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 px-6 rounded-xl font-bold hover:shadow-xl transition-all hover:scale-105"
              >
                Enviar Solicitação
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
