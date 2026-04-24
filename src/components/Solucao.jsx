import { check } from "../assets";
import Button from "./Button";
import Section from "./Section";

const Solucao = () => {
  return (
    <Section id="solucao">
      <div className="container relative z-2">
        <div className="max-w-[70rem] mx-auto lg:flex lg:items-center lg:gap-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-color-3/10 border border-color-3/20 rounded-full">
              <span className="text-sm font-semibold text-color-3 uppercase tracking-wider">
                A solução
              </span>
            </div>

            <h2 className="h2 mb-6">
              O Renda Fácil te ajuda a entender para onde seu dinheiro vai e o
              que fazer para melhorar sua renda.
            </h2>

            <p className="body-1 text-n-3 mb-8">
              Uma plataforma simples, prática e confiável que coloca você no
              controle da sua vida financeira. Sem promessas milagrosas, apenas
              ferramentas reais para decisões melhores.
            </p>

            <Button href="#como-funciona">Começar agora</Button>
          </div>

          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Diagnóstico financeiro personalizado",
                "Orientações práticas e diretas",
                "Organização de gastos simplificada",
                "Metas financeiras realistas",
                "Acompanhamento mensal visual",
                "Segurança total dos seus dados",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-n-7 border border-n-6 rounded-xl"
                >
                  <img
                    src={check}
                    width={24}
                    height={24}
                    alt="Check"
                    className="pointer-events-none select-none mt-0.5"
                  />
                  <p className="body-2 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Solucao;
