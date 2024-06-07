import { useState } from "react";
import { praias } from "../../../../../../shared/mock/selectPraias";
import { createPostProp } from "../../../../../../shared/types/createPost";
import { Input } from "../../../../../../shared/ui/input";
import { Select } from "../../../../../../shared/ui/select";
import { TextArea } from "../../../../../../shared/ui/textArea";

type ProjectFormProps = {
  postData?: createPostProp;
  handleOnSubmit: (e: createPostProp) => void;
};

const FormDescription = ({ postData, handleOnSubmit }: ProjectFormProps) => {
  const [post, setPost] = useState(postData || {});

  function submit(e: React.FormEvent) {
    e.preventDefault();
    handleOnSubmit(post as createPostProp);
    console.log("data", post);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist();
    setPost({ ...post, nome_pessoa: e.target.value });
  }

  function handleSelect(e: React.ChangeEvent<HTMLSelectElement>) {
    e.persist();
    setPost({ ...post, location: e.target.value });
  }

  function handleTextArea(e: React.ChangeEvent<HTMLTextAreaElement>) {
    e.persist();
    setPost({ ...post, comentario: e.target.value });
  }

  return (
    <div className="bg-[#3586FF] p-6 rounded-lg border-none border-4">
      <form onSubmit={submit}>
        <div>
          <Input OnChange={handleInput} name="nome" title="Nome" type="text"/>
        </div>
        <div>
          <Select
            Onchange={handleSelect}
            title="Selecione a praia"
            options={praias}
          />
        </div>
        <div>
          <TextArea
            name="comentario"
            OnChange={handleTextArea}
            title="Descreva o ocorrido"
            rows={4}
            cols={50}
          />
        </div>
        <div>
        <button type="submit"className="border border-white rounded-md px-4 py-2 transition duration-300 ease-in-out bg-white text-black hover:text-white hover:bg-[#3586FF]">
        Criar Post
        </button>
        </div>
      </form>
    </div>
  );
};

export { FormDescription };
