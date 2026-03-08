import { Music, Trophy, Smartphone, Users, Mic, Music2 } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Music,
      title: '18.000+ Músicas',
      description: 'Vasto repertório nacional e internacional para todos os gostos',
    },
    {
      icon: Trophy,
      title: 'Sistema de Pontuação',
      description: 'Pontuação real para tornar a competição ainda mais divertida',
    },
    {
      icon: Smartphone,
      title: 'Controle pelo Celular',
      description: 'Lista de músicas e pontuação acessível pelo smartphone',
    },
    {
      icon: Users,
      title: 'DJ Incluso',
      description: 'Profissional para apoio técnico durante todo o evento',
    },
    {
      icon: Mic,
      title: 'Até 4 Microfones',
      description: 'Múltiplos microfones para duetos e performances em grupo',
    },
    {
      icon: Music2,
      title: 'Som Profissional',
      description: 'Equipamentos de áudio de alta qualidade',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Por que escolher nosso karaokê?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma experiência completa com equipamentos profissionais e suporte especializado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
