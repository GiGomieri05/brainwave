import Button from "./Button";
import Section from "./Section";

const CTAFinal = () => {
  return (
    <Section crosses>
      <div className="container relative z-2">
        <div className="max-w-[50rem] mx-auto text-center">
          <div className="p-10 md:p-16 bg-n-7 border border-n-6 rounded-3xl">
            <h2 className="h2 mb-4">
              Dê o primeiro passo para uma vida financeira mais organizada.
            </h2>

            <p className="body-1 text-n-3 mb-8 max-w-[35rem] mx-auto">
              Vamos colocar sua vida financeira em ordem e encontrar
              oportunidades reais. Sem complicação, sem promessas vazias.
            </p>

            <Button href="#hero" white>
              Quero melhorar minha renda
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTAFinal;
