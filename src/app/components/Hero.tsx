import { Mic2, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from "react";

import img1 from "../../assets/karaoke1.png";
import img2 from "../../assets/karaoke2.jpg";
import img3 from "../../assets/karaoke3.jpg";
import img4 from "../../assets/karaoke4.jpg";
import img5 from "../../assets/karaoke5.jpg";

const images = [img1, img2, img3, img4, img5];

export function Hero() {

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // troca a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium">Diversão garantida</span>
            </div>
            <div className="text-3xl lg:text-5xl font-bold">
              <span className="block">L&L Voice and Music</span>
              <p className="text-xl lg:text-1xl text-purple-100">
                Aqui o artista é você!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
         
                <h1 className="text-4xl lg:text-6xl font-bold whitespace-nowrap flex-shrink-0">
                  <span>Aluguel de Karaokê</span>
                </h1>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <p className="text-xl lg:text-2xl text-purple-100">
                  Festas | Eventos | Casamentos | Aniversários
                </p>
                <p className="text-xl lg:text-2xl text-purple-100 font-bold">
                  📍Jundiaí e Região.
                </p>
              </div>
            </div>


            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto lg:mx-0">
              Leve mais diversão para seu evento com nosso sistema completo de karaokê.
              Mais de 18.000 músicas e equipamentos profissionais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg"
              >
                Solicitar Orçamento
              </button>
              <a
                href="#plans"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Ver Planos
              </a>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm lg:text-base">
              <div className="text-center">
                <p className="text-3xl font-bold">18.000+</p>
                <p className="text-purple-100">Músicas</p>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <p className="text-3xl font-bold">4</p>
                <p className="text-purple-100">Microfones</p>
              </div>
              <div className="w-px h-12 bg-white/30"></div>
              <div className="text-center">
                <p className="text-3xl font-bold">DJ</p>
                <p className="text-purple-100">Incluso</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block w-full h-[500px]">

            <div className="relative w-full h-[500px] overflow-hidden rounded-3xl shadow-2xl">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                    }`}
                />
              ))}
            </div>

            {/* Botão anterior */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-lg"
            >
              ‹
            </button>

            {/* Botão próximo */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-lg"
            >
              ›
            </button>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-50 to-transparent"></div>
    </section>
  );
}
