import { comoFuncionaSteps } from "../constants";
import Heading from "./Heading";
import Section from "./Section";

const ComoFunciona = () => {
  return (
    <Section id="como-funciona" crosses>
      <div className="container relative z-2">
        <Heading
          tag="Passo a passo"
          title="Como o Renda Fácil funciona"
          text="Em poucos passos, você já começa a ter mais clareza sobre sua vida financeira."
        />

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {comoFuncionaSteps.map((step) => (
            <div
              key={step.id}
              className="relative p-8 bg-n-7 border border-n-6 rounded-2xl hover:border-color-1 transition-colors group"
            >
              <div className="flex items-center justify-center w-14 h-14 mb-6 bg-color-1/10 border border-color-1/20 rounded-xl group-hover:bg-color-1/20 transition-colors">
                <span className="text-2xl">{step.icon}</span>
              </div>

              <span className="block text-sm font-bold text-color-1 mb-2 uppercase tracking-wider">
                Passo {step.number}
              </span>

              <h4 className="h6 mb-3">{step.title}</h4>

              <p className="body-2 text-n-3">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ComoFunciona;
