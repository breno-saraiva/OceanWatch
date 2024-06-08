import bg from "../../../../../assets/tartaruga.jpg";

const Recursos = () => {
  return (
    <div className="relative h-scren">
      <img
        src={bg}
        alt="Imagem do Oceano"
        className="w-full h-full object-cover"
      />
      <div className="h-full absolute inset-0 flex flex-wrap justify-center items-center bg-black bg-opacity-80 text-white">
        <div className="max-w-4xl px-8 text-center">
          <h1 className="text-6xl font-bold mb-8">Recursos Educativos</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-4">
                Documentários e Filmes:
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Filmes como "Nosso Planeta" e "Planeta Azul" oferecem visões
                fascinantes da vida marinha e dos desafios enfrentados pelos
                oceanos.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">
                Websites e Aplicativos:
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Sites como o Ocean Conservancy e o National Geographic fornecem
                recursos educativos e informações sobre a conservação dos
                oceanos.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">
                Centros de Educação Ambiental:
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Aquários e zoológicos oferecem programas educativos sobre vida
                marinha e conservação oceânica.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">
                Livros e Material Didático:
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Livros e materiais educativos sobre oceanografia, biologia
                marinha e conservação oceânica são recursos valiosos para salas
                de aula.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-4">
                Atividades Locais e Voluntariado:
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                Participar de atividades locais de limpeza de praias e costas e
                voluntariar-se em projetos de monitoramento de vida marinha são
                maneiras práticas de contribuir para a conservação dos oceanos.
              </p>
            </div>
          </div>
          <p className="text-lg leading-relaxed">
            Ao utilizar esses recursos educativos, podemos aumentar a
            conscientização sobre a importância dos oceanos e promover a
            conservação marinha em todo o mundo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recursos;
