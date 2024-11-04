import Sidebar from "../sidebar/Sidebar";
import Nav from "../nav/Nav";
import { useState, useEffect } from "react";
import db from "../../data/db.json"; // Assurez-vous que ce chemin est correct
import { FaEye, FaArchive, FaBan } from "react-icons/fa"; // Import des icônes

export default function Utilisateur() {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Nombre d'éléments par page
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setMembers(db); // Chargez vos membres à partir de db.json
    };

    fetchData();
  }, []);

  // Calcul des membres pour la page actuelle
  const indexOfLastMember = currentPage * itemsPerPage;
  const indexOfFirstMember = indexOfLastMember - itemsPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(members.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 ">
          <div className="flex items-center justify-between shadow-lg p-2 mb-4">
            <h1 className="font-semibold text-2xl">Utilisateur</h1>
            <Nav />
          </div>

          {/* Section des cartes */}
          <div className="flex flex-col items-center md:flex-row md:space-x-4 justify-center mt-4">
            <div className="bg-[#20DF7F] shadow-md rounded-lg p-5 flex-1 md:max-w-[22%]">
              <h2 className="text-xs text-white">Membres actif</h2>
              <p className="text-white font-semibold text-lg">94 Membres</p>
            </div>
            <div className="shadow-md rounded-lg p-5 flex-1 md:max-w-[22%]">
              <h2 className="text-sm">Membres bloqués</h2>
              <p className="font-semibold text-lg">6 Membres</p>
            </div>
            <div className="shadow-md rounded-lg p-5 flex-1 md:max-w-[22%]">
              <h2 className="text-sm">Total effectif</h2>
              <p className="font-semibold text-lg">100 Membres</p>
            </div>
          </div>

          <button 
            onClick={handleOpenModal} 
            className="bg-[#224957] font-semibold text-white p-2 my-4 rounded-md"
          >
            Ajouter
          </button>

          {/* Tableau des membres */}
          <div className="mt-6 md:mx-5">
            <table className="table-auto w-full shadow-md bg-[#20DF7F] rounded-lg mx-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">Nom</th>
                  <th className="px-4 py-2">Date de Début</th>
                  <th className="px-4 py-2">Montant</th>
                  <th className="px-4 py-2">Progression</th>
                  <th className="px-4 py-2">Statut</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
  {currentMembers.map((member, index) => (
    <tr key={index} className="border-t">
      <td className="px-4 py-2">{member.Nom}</td>
      <td className="px-4 py-2">{member.Date}</td>
      <td className="px-4 py-2">{member.montant} FCFA</td>
      <td className="px-4 py-2">{member.Progression}</td>
      <td className="px-4 py-2">{member.statut}</td>
      <td className="px-4 py-2 flex space-x-2 justify-center">
        <button className="text-blue-500 hover:underline">
          <FaEye />
        </button>
        <button className="text-green-500 hover:underline">
          <FaArchive />
        </button>
        <button className="text-red-500 hover:underline">
          <FaBan />
        </button>
      </td>
    </tr>
  ))}
</tbody>

            </table>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="mx-2 px-3 py-1 rounded bg-gray-300 disabled:opacity-50"
            >
              Précédent
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`mx-1 px-3 py-1 rounded ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="mx-2 px-3 py-1 rounded bg-gray-300 disabled:opacity-50"
            >
              Suivant
            </button>
          </div>

          {/* Modal pour Ajouter un Membre */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
              <div className="bg-white p-5 rounded shadow-lg w-1/3">
                <h2 className="text-lg font-semibold mb-4">Ajouter un Membre</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-3">
                      <label className="block text-sm font-medium">Nom</label>
                      <input 
                        type="text" 
                        className="border rounded w-full p-2" 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium">Prénom</label>
                      <input 
                        type="text" 
                        className="border rounded w-full p-2" 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium">Date de Naissance</label>
                      <input 
                        type="date" 
                        className="border rounded w-full p-2" 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium">Profession</label>
                      <input 
                        type="text" 
                        className="border rounded w-full p-2" 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium">Email</label>
                      <input 
                        type="email" 
                        className="border rounded w-full p-2" 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium">Téléphone</label>
                      <input 
                        type="tel" 
                        className="border rounded w-full p-2" 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium">Adresse</label>
                      <input 
                        type="text" 
                        className="border rounded w-full p-2" 
                        required 
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium">Organisation</label>
                      <input 
                        type="text" 
                        className="border rounded w-full p-2" 
                        required 
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <button 
                      type="submit" 
                      className="bg-green-500 text-white p-2 rounded-md"
                    >
                      Ajouter
                    </button>
                    <button 
                      type="button" 
                      onClick={handleCloseModal} 
                      className="bg-red-500 text-white p-2 rounded-md ml-2"
                    >
                      Annuler
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
