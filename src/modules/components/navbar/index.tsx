import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-[#222] p-4 text-white">
      <div>
        <Link to="/home">{/* <img src={logo} /> */}</Link>
      </div>
      <div>
        <ul className="flex ">
          <li className="mr-4 hover:text-[#FFBB33]">
            <Link to="/home">Home</Link>
          </li>
          <li className="mr-4 hover:text-[#FFBB33]">
            <Link to="/contato">contato</Link>
          </li>
          <li className="mr-4 hover:text-[#FFBB33]">
            <Link to="/empresas">empresas</Link>
          </li>
          <li className="mr-4 hover:text-[#FFBB33]">
            <Link to="/project">Project</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { NavBar };
