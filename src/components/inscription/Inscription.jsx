import { Link } from "react-router-dom";

export default function Inscription() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-2/5 bg-[#224957] flex items-center justify-center rounded-r-3xl">
        {/* Optionnel : Image ou logo ici */}
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-3/5 p-6 md:p-10">
        <h1 className="text-1xl md:text-4xl font-semibold text-[#224957] mb-3 text-center">
          Inscription
        </h1>

        <form className="flex flex-col space-y-6 w-full max-w-2xl">
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
            <div className="flex flex-col w-full">
              <label className="text-[#224957] mb-1">Nom</label>
              <input
                type="text"
                className="border border-[#224957] p-1 rounded-lg bg-transparent text-[#224957] focus:outline-none focus:ring-2 focus:ring-[#1b3a42] text-center"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-[#224957] mb-1">Prénom</label>
              <input
                type="text"
                className="border border-[#224957] p-1 rounded-lg bg-transparent text-[#224957] focus:outline-none focus:ring-2 focus:ring-[#1b3a42] text-center"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
            <div className="flex flex-col w-full">
              <label className="text-[#224957] mb-1">Date de naissance</label>
              <input
                type="date"
                className="border border-[#224957] p-1 rounded-lg bg-transparent text-[#224957] focus:outline-none focus:ring-2 focus:ring-[#1b3a42] ps-2"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-[#224957] mb-1">Profession</label>
              <input
                type="text"
                className="border border-[#224957] p-1 rounded-lg bg-transparent text-[#224957] focus:outline-none focus:ring-2 focus:ring-[#1b3a42] text-center"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
            <div className="flex flex-col w-full">
              <label className="text-[#224957] mb-1">Définir mot de passe</label>
              <input
                type="password"
                className="border border-[#224957] p-1 rounded-lg bg-transparent text-[#224957] focus:outline-none focus:ring-2 focus:ring-[#1b3a42] text-center"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-[#224957] mb-1">Confirmer mot de passe</label>
              <input
                type="password"
                className="border border-[#224957] p-1 rounded-lg bg-transparent text-[#224957] focus:outline-none focus:ring-2 focus:ring-[#1b3a42] text-center"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
            <div className="flex flex-col w-full">
              <label className="text-[#224957] mb-1">Email</label>
              <input
                type="email"
                className="border border-[#224957] p-1 rounded-lg bg-transparent text-[#224957] focus:outline-none focus:ring-2 focus:ring-[#1b3a42] text-center"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-[#224957] mb-1">Téléphone</label>
              <input
                type="tel"
                className="border border-[#224957] p-1 rounded-lg bg-transparent text-[#224957] focus:outline-none focus:ring-2 focus:ring-[#1b3a42] text-center"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-4">
            <div className="flex flex-col w-full">
              <label className="text-[#224957] mb-1">Adresse</label>
              <input
                type="text"
                className="border border-[#224957] p-1 rounded-lg bg-transparent text-[#224957] focus:outline-none focus:ring-2 focus:ring-[#1b3a42] text-center"
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-[#224957] mb-1">Organisation</label>
              <input
                type="text"
                className="border border-[#224957] p-1 rounded-lg bg-transparent text-[#224957] focus:outline-none focus:ring-2 focus:ring-[#1b3a42] text-center"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#20DF7F] text-[#224957] font-medium p-2 rounded-lg hover:bg-[#1b3a42] transition duration-300 w-5/12 mx-auto mt-4"
          >
            S'inscrire
          </button>
        </form>

        <p className="mt-4 text-center text-[#224957]">
          Vous avez déjà un compte ?{" "}
          <Link to="/">
            <span className="text-[#224957] cursor-pointer font-medium">Connectez-vous!</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
