import { Link } from "react-router-dom";
import imgconnexion from '../../assets/img-connexion.png';

export default function Connexion() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-2/5 bg-[#224957] hidden md:flex items-center justify-center rounded-r-3xl">
        <img src={imgconnexion} alt="Connexion" className="object-cover" />
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-3/5 p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#224957] mb-4 text-center">
          Bienvenue sur Bakéli-tontine
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-[#224957] mb-4 text-center">
          Connectez-vous
        </h2>
        <p className="mb-6 text-center text-[#224957]">
          Connectez-vous et gérez vos cotisations
        </p>
        <form className="flex flex-col space-y-6 w-full max-w-xs">
          <input
            type="email"
            placeholder="N° Téléphone"
            className="border border-gray-300 p-2 rounded-lg bg-[#224957] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#1b3a42]"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="border border-gray-300 p-2 rounded-lg bg-[#224957] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#1b3a42]"
          />
          <Link to="/motdepasseoublier" className="mt-4 text-[#224957] text-right">
            Mot de passe oublié?
          </Link>
          <button
            type="submit"
            className="bg-[#20DF7F] text-white p-2 rounded-lg hover:bg-[#1b3a42] transition duration-300"
          >
            Connexion
          </button>
        </form>

        <p className="mt-4 text-center text-[#224957]">
          Vous n'avez pas de compte ?{" "}
          <Link to="/inscription">
            <span className="text-[#224957] cursor-pointer font-medium">Inscrivez-vous!</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
