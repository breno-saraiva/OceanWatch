import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="py-4 px-[10%] flex justify-between items-center bg-[#3586FF] shadow-md z-10">
      <div className="logo">
        <h1 className="text-[1.6rem] bg-clip-text text-transparent bg-gradient-to-r from-[#05cbf3fd] to-[#fefefffb]">
          <b>OceanWatch.</b>
        </h1>
      </div>
      <p className="navTxt text-white hidden md:block justify-between items-center">
        Preserve o Azul! Cuide das Praias e Oceanos com o <b>OceanWatch.</b>
      </p>
      <ul className="flex list-none">
        <li className="ml-[1.5rem]">
          <Link
            to="/home"
            className="text-white text-[95%] font-normal px-2 py-1 rounded transition duration-[400ms] hover:bg-[rgba(7,45,106,0.738)]"
          >
            Home
          </Link>
        </li>
        <li className="ml-[1.5rem]">
          <Link
            to="/recursos"
            className="text-white text-[95%] font-normal px-2 py-1 rounded transition duration-[400ms] hover:bg-[rgba(7,45,106,0.738)]"
          >
            Recursos Educativos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export { NavBar };
