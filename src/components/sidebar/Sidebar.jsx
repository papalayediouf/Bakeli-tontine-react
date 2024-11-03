import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaDollarSign, FaCog } from "react-icons/fa"; 

export default function Sidebar() {
  return (
    <div className="md:w-1/5 bg-[#224957] text-white  p-4 lg:h-screen md:h-full flex flex-col md:static  fixed bottom-0 left-0 right-0 md:flex-col">
      <h2 className="text-lg font-bold mb-4 hidden md:block">Bakeli Tontine</h2>
      <div className="flex md:flex-col justify-around md:space-y-2 gap-y-3 h-full md:h-auto space-x-4 md:space-x-0">
        <Link to="/dashboard" className="flex gap-2  items-center hover:text-[#20DF7F]">
          <FaHome size={30} />
          <span className=" hidden md:block">Dashboard</span>
        </Link>
        <Link to="/utilisateur" className="flex gap-2 items-center hover:text-[#20DF7F]">
          <FaUsers size={30} />
          <span className=" hidden md:block">Utilisateur</span>
        </Link>
        <Link to="/cotisation" className="flex gap-2 items-center hover:text-[#20DF7F]">
          <FaDollarSign size={30} />
          <span className=" hidden md:block">Cotisation</span>
        </Link>
        <div className="relative flex items-center">
          <button className="flex items-center gap-2 hover:text-[#20DF7F]">
            <FaCog size={30} />
            <span className=" hidden md:block">Paramètres</span>
          </button>
          {/* Paramètres peuvent être un dropdown si besoin */}
          <ul className="absolute left-0 mt-2 bg-white text-black shadow-md hidden">
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link to="/parametres/profil">Profil</Link>
            </li>
            <li className="px-4 py-2 hover:bg-gray-200">
              <Link to="/parametres/motdepasse">Modifier Mot de Passe</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
