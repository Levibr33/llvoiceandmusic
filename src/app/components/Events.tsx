import { Cake, Building2, PartyPopper, Calendar } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Events() {
  const eventTypes = [
    {
      icon: Cake,
      title: 'Aniversários',
      description: 'Torne a festa inesquecível',
    },
    {
      icon: Building2,
      title: 'Eventos Corporativos',
      description: 'Confraternizações e team building',
    },
    {
      icon: PartyPopper,
      title: 'Festas em Geral',
      description: 'Casamentos, formaturas e mais',
    },
    {
      icon: Calendar,
      title: 'Eventos Especiais',
      description: 'Qualquer ocasião de celebração',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Ideal para Todo Tipo de Evento
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Levamos diversão e entretenimento para qualquer ocasião
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {eventTypes.map((event, index) => {
            const Icon = event.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-purple-100">{event.description}</p>
              </div>
            );
          })}
        </div>

        <div className="relative rounded-3xl overflow-hidden max-w-5xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1765871403869-834ec1d50c9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBhcnR5JTIwbGlnaHRzJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcyOTg4OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Festa com luzes coloridas"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center space-y-4">
              <p className="text-3xl lg:text-4xl font-bold drop-shadow-lg">
                Transforme seu evento em uma experiência única!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
