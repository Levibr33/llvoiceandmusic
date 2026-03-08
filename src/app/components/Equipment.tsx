import { Speaker, Sliders, Monitor } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Equipment() {
  const equipment = [
    {
      icon: Speaker,
      title: 'Caixa de Som',
      description: 'Sistema de áudio profissional de alta potência para garantir qualidade sonora em qualquer ambiente',
    },
    {
      icon: Sliders,
      title: 'Mesa de Som',
      description: 'Equipamento profissional para controle e equalização perfeita do áudio',
    },
    {
      icon: Monitor,
      title: 'TV ou Projetor',
      description: 'Tela de alta definição para exibição das letras das músicas com total clareza',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Equipamentos Inclusos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todo o equipamento profissional necessário para seu evento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {equipment.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex gap-6 p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              );
            })}

            <div className="p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl border-2 border-orange-200">
              <p className="text-lg text-gray-800">
                <span className="font-bold">✨ Tudo pronto para uso:</span> Levamos, 
                instalamos e configuramos todos os equipamentos no local do seu evento.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-pink-200 rounded-3xl blur-3xl opacity-50"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1769509068789-f242b5a6fc47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdWRpbyUyMGVxdWlwbWVudCUyMG1pY3JvcGhvbmV8ZW58MXx8fHwxNzcyOTg4OTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Equipamentos profissionais de áudio"
              className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
