import Section from "./Section";

const Problema = () => {
  return (
    <Section id="problema" crosses>
      <div className="container relative z-2">
        <div className="max-w-[50rem] mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-color-1/10 border border-color-1/20 rounded-full">
            <span className="text-sm font-semibold text-color-1 uppercase tracking-wider">
              O problema
            </span>
          </div>

          <h2 className="h2 mb-6">
            Seu dinheiro acaba antes do mês?
          </h2>

          <p className="body-1 text-n-3 mb-10 max-w-[40rem] mx-auto">
            Você trabalha, se esforça, mas no final do mês parece que nunca
            sobra nada. Contas chegam, imprevistos acontecem e o dinheiro
            simplesmente desaparece.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "😰",
                title: "Sem controle",
                text: "Você não sabe exatamente para onde vai cada real do seu salário.",
              },
              {
                icon: "🔄",
                title: "Ciclo sem fim",
                text: "Todo mês é a mesma coisa: pagar contas, apertar o cinto e torcer para dar certo.",
              },
              {
                icon: "❓",
                title: "Sem direção",
                text: "Quer melhorar, mas não sabe por onde começar nem o que fazer de diferente.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-n-7 border border-n-6 rounded-2xl text-center"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h5 className="h5 mb-3">{item.title}</h5>
                <p className="body-2 text-n-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Problema;
