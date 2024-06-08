import { useEffect, useState } from "react";
import { createPost } from "../../../../../api/createPost/createPost.service";
import { createPostProp } from "../../../../../shared/types/createPost";
import { FormDescription } from "../components/form";
import { Posts } from "../components/posts";
import { getCategorias } from "../../../../../api/getPost/getPost.service";

type comentariosProps = {
  nome_pessoa: string;
  comentario: string;
  coordenada: string;
  endereco: string;
  id: string;
};

function Home() {
  const [comentarios, setComentarios] = useState<comentariosProps[]>([]);

  async function handleSubmit(data: createPostProp) {
    await createPost(data);
  }

  async function getcomentarios() {
    const list = await getCategorias();
    setComentarios(list);
  }

  useEffect(() => {
    getcomentarios();
  }, []);
  console.log("renderizou");

  const marcadores: string[] = [];
  comentarios.map((item) => {
    marcadores.push(item.coordenada);
  });

  return (
    <div className="grid grid-cols-3  gap-5 p-8">
      <div className="col-span-2 rounded-lg flex justify-center items-center">
        <img
          src={`https://maps.googleapis.com/maps/api/staticmap?center=Santos,SP&zoom=7&size=700x450&markers=size:small%7Ccolor:red%7C${marcadores.join(
            "%7C"
          )}&key=AIzaSyDHTihUvCtc9auitAv5P8dD_7Z1evwRJZI`}
          alt="imgMaps"
        />
      </div>
      <div className="col-span-1 col-start-3">
        <FormDescription handleOnSubmit={handleSubmit} />
      </div>
      <div className="bg-[#8AB4F8] col-span-2 rounded-md">
        {comentarios.length > 0 &&
          comentarios.reverse().map((item) => (
            <div>
              <Posts
                Localização={item.endereco}
                name={item.nome_pessoa}
                description={item.comentario}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export { Home };
