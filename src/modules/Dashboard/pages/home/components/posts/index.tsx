type PostsProp = {
  Localização: string;
  name: string;
  description: string;
};

const Posts = ({ Localização, name, description }: PostsProp) => {
  return (
    <div className="flex flex-col gap-3 p-5 border-b-2 border-indigo-500">
      <div>
        <h1 className="font-bold text-indigo-950">{Localização}</h1>
        <h3 className="font-serif text-indigo-800">{name}</h3>
      </div>
      <p className="font-normal w-full text-indigo-950 px-2">{description}</p>
    </div>
  );
};

export { Posts };
