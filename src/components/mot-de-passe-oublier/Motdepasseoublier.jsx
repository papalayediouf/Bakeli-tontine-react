import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate

export default function Motdepasseoublier() {
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi d'email ici
    console.log("Email envoyé à:", email);
    setShowModal(true); // Affiche le modal
  };

  const handleModalClose = () => {
    setShowModal(false);
    navigate("/"); // Redirige vers la page de connexion
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:w-2/5 bg-[#224957] flex items-center justify-center rounded-r-3xl">
        {/* Optionnel : Image ou logo ici */}
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-3/5 p-10 shadow-lg">
        <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md">
          <h1 className="font-semibold text-[#224957] mb-4">
            Mot de passe oublié
          </h1>
          <p className="mb-6 text-[#224957]">
            Pour réinitialiser votre mot de passe, entrez votre e-mail ou votre numéro de téléphone.
          </p>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Adresse e-mail"
              className="border border-gray-300 p-2 rounded-lg bg-[#224957] text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#1b3a42]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#20DF7F] text-[#224957] p-2 rounded-lg hover:bg-[#1b3a42] transition duration-300"
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>

      {showModal && ( // Modal affiché si showModal est vrai
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold text-[#224957]">Email envoyé!</h2>
            <p className="mt-2 text-[#224957]">Vérifiez votre boîte de réception.</p>
            <button
              onClick={handleModalClose}
              className="mt-4 bg-[#20DF7F] text-[#224957] p-2 rounded-lg hover:bg-[#1b3a42] transition duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
