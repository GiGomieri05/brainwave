import { useRef } from "react";
import Typewriter from "typewriter-effect";

import Button from "./Button";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import Section from "./Section";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div ref={parallaxRef} className="container relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Organize sua vida financeira e descubra novas formas de{" "}
            <span className="inline-block relative">
              <span className="text-color-1">
                <Typewriter
                  options={{
                    strings: [
                      "fazer sua renda render",
                      "controlar seus gastos",
                      "planejar seu futuro",
                      "alcançar suas metas",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </span>
          </h1>

          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-3 lg:mb-8">
            Uma solução simples para quem quer sair do aperto, entender melhor
            o próprio dinheiro e tomar decisões financeiras com mais segurança.
          </p>

          <Button href="#como-funciona" white>
            Quero melhorar minha renda
          </Button>
        </div>

        <div className="relative max-w-[50rem] mx-auto xl:mb-24">
          <div className="relative z-1 grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
            {[
              { icon: "📊", label: "Diagnóstico financeiro" },
              { icon: "💰", label: "Controle de gastos" },
              { icon: "🎯", label: "Metas claras" },
              { icon: "📈", label: "Evolução mensal" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-n-7 border border-n-6 rounded-2xl hover:border-color-1 transition-colors"
              >
                <span className="text-4xl mb-3">{item.icon}</span>
                <span className="text-sm font-semibold text-center text-n-2">
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <BackgroundCircles />
        </div>
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
