import { praias } from "../../../../../../shared/mock/selectPraias";
import { Input } from "../../../../../../shared/ui/input";
import { Select } from "../../../../../../shared/ui/select";
import { TextArea } from "../../../../../../shared/ui/textArea";

const FormDescription = () => {
  return (
    <div className="bg-sky-500 p-6 rounded-lg border-none border-4">
      <form action="">
        <div>
          <Input name="nome" title="Nome" type="text" />
        </div>
        <div>
          <Select title="Selecione a praia" options={praias} />
        </div>
        <div>
          <TextArea title="Descreva o ocorrido" rows={4} cols={50} />
        </div>
      </form>
    </div>
  );
};

export { FormDescription };
