type PostsProp = {
  Localização: string;
  name: string;
  description: string;
};

const Posts = ({ Localização, name, description }: PostsProp) => {
  return (
    <div className="flex flex-col gap-3 p-5">
      <div>
        <h1 className="font-bold">{Localização}</h1>
        <h3 className="text-gray-500 font-serif">{name}</h3>
      </div>
      <p className="font-sans w-full">{description}</p>
    </div>
  );
};

export { Posts };
