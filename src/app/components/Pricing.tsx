import { Check, Sparkles } from 'lucide-react';

export function Pricing() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      name: 'Básico',
      price: '250',
      duration: '3 horas',
      features: [
        '18.000+ músicas',
        'Sistema de pontuação',
        '2 microfones',
        'Caixa de som',
        'TV/Projetor',
        'DJ incluso',
      ],
      popular: false,
    },
    {
      name: 'Completo',
      price: '450',
      duration: '4 horas',
      features: [
        '18.000+ músicas',
        'Sistema de pontuação',
        '4 microfones',
        'Caixa de som profissional',
        'TV/Projetor de alta qualidade',
        'DJ incluso',
        'Mesa de som profissional',
        'Iluminação básica',
      ],
      popular: true,
    },
    {
      name: 'Premium',
      price: 'Sob consulta',
      duration: 'Personalizado',
      features: [
        'Tudo do plano Completo',
        'Duração personalizada',
        'Iluminação avançada',
        'Equipamento extra',
        'Telão profissional',
        'Suporte técnico dedicado',
      ],
      popular: false,
    },
  ];

  return (
    <section id="plans" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-4 font-semibold">
            💰 Planos e Preços
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            Escolha o plano ideal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Planos a partir de R$ 250 com tudo incluso
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? 'ring-4 ring-purple-500' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-center py-2 font-bold text-sm flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  MAIS POPULAR
                </div>
              )}

              <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    {plan.price !== 'Sob consulta' && (
                      <span className="text-gray-600">R$</span>
                    )}
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1">{plan.duration}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-4 px-6 rounded-full font-bold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-12 text-lg">
          * Preços podem variar conforme localização e disponibilidade
        </p>
      </div>
    </section>
  );
}
