import Sidebar from "../sidebar/Sidebar";
import Nav from "../nav/Nav";
import { useState, useEffect } from "react";
import db from "../../data/db.json"; // Assurez-vous que ce chemin est correct
import { FaEye } from "react-icons/fa"; // Icône pour Voir

export default function Cotisation() {
  const [cotisations, setCotisations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [modalPage, setModalPage] = useState(1); // Page actuelle du modal
  const itemsPerPage = 5; 
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour gérer le modal

  useEffect(() => {
    const fetchData = async () => {
      setCotisations(db);
    };

    fetchData();
  }, []);

  // Pagination principale
  const indexOfLastCotisation = currentPage * itemsPerPage;
  const indexOfFirstCotisation = indexOfLastCotisation - itemsPerPage;
  const currentCotisations = cotisations.slice(indexOfFirstCotisation, indexOfLastCotisation);
  const totalPages = Math.ceil(cotisations.length / itemsPerPage);

  // Pagination pour le modal
  const indexOfLastModalCotisation = modalPage * itemsPerPage;
  const indexOfFirstModalCotisation = indexOfLastModalCotisation - itemsPerPage;
  const currentModalCotisations = cotisations.slice(indexOfFirstModalCotisation, indexOfLastModalCotisation);
  const totalModalPages = Math.ceil(cotisations.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleModalPageChange = (pageNumber) => {
    setModalPage(pageNumber);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    if (isModalOpen) setModalPage(1); // Réinitialiser la page lors de la fermeture
  };

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-2">
          <div className="flex items-center justify-between shadow-lg p-2 mb-4">
            <h1 className="font-semibold text-2xl">Cotisation</h1>
            <Nav />
          </div>

          <div>
            <button 
              onClick={toggleModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Ouvrir Modal
            </button>
          </div>

          {/* Section des cartes */}
          <div className="flex flex-col items-center md:flex-row md:space-x-4 justify-center mt-4">
            {/* Card 1 */}
            <div className="shadow-md rounded-lg p-5 flex-1 md:max-w-[22%]">
              <h2 className="text-xs ">Juin</h2>
              <p className="font-semibold text-lg">1.000 FCFA</p>
            </div>
            {/* Card 2 */}
            <div className="shadow-md rounded-lg p-5 flex-1 md:max-w-[22%]">
              <h2 className="text-xs ">Mai</h2>
              <p className="font-semibold text-lg">300.000 FCFA</p>
            </div>
            {/* Card 3 */}
            <div className="shadow-md rounded-lg p-5 flex-1 md:max-w-[22%]">
              <h2 className="text-xs ">Total caisse </h2>
              <p className="font-semibold text-lg">700.000 FCFA</p>
            </div>
          </div>

          {/* Tableau des cotisations */}
          <div className="mt-6 md:mx-5">
            <table className="table-auto w-full shadow-md bg-white rounded-lg">
              <thead className="bg-[#20DF7F] text-white">
                <tr>
                  <th className="px-4 py-2">Membre</th>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Montant</th>
                  <th className="px-4 py-2">Montant Restant</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentCotisations.map((cotisation, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{cotisation.Nom}</td>
                    <td className="px-4 py-2">{cotisation.Date}</td>
                    <td className="px-4 py-2">{cotisation.montant} FCFA</td>
                    <td className="px-4 py-2">{cotisation.montant_restant} FCFA</td>
                    <td className="px-4 py-2 flex space-x-2 justify-center">
                      <button className="text-blue-500 hover:underline">
                        <FaEye /> {/* Icône pour Voir */}
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

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-4 w-11/12 md:w-3/4">
                <h2 className="font-bold text-lg mb-4">Liste des Cotisations (Modal)</h2>
                <table className="table-auto w-full shadow-md bg-white rounded-lg">
                  <thead className="bg-[#20DF7F] text-white">
                    <tr>
                      <th className="px-4 py-2">Membre</th>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Montant</th>
                      <th className="px-4 py-2">Montant Restant</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentModalCotisations.map((cotisation, index) => (
                      <tr key={index} className="border-t">
                        <td className="px-4 py-2">{cotisation.Nom}</td>
                        <td className="px-4 py-2">{cotisation.Date}</td>
                        <td className="px-4 py-2">{cotisation.montant} FCFA</td>
                        <td className="px-4 py-2">{cotisation.montant_restant} FCFA</td>
                        <td className="px-4 py-2 flex space-x-2 justify-center">
                          <button className="text-blue-500 hover:underline">
                            <FaEye /> {/* Icône pour Voir */}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                {/* Pagination dans le modal */}
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={() => handleModalPageChange(modalPage - 1)}
                    disabled={modalPage === 1}
                    className="mx-2 px-3 py-1 rounded bg-gray-300 disabled:opacity-50"
                  >
                    Précédent
                  </button>
                  {Array.from({ length: totalModalPages }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => handleModalPageChange(index + 1)}
                      className={`mx-1 px-3 py-1 rounded ${
                        modalPage === index + 1
                          ? "bg-blue-500 text-white"
                          : "bg-gray-300"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => handleModalPageChange(modalPage + 1)}
                    disabled={modalPage === totalModalPages}
                    className="mx-2 px-3 py-1 rounded bg-gray-300 disabled:opacity-50"
                  >
                    Suivant
                  </button>
                </div>

                <button 
                  onClick={toggleModal}
                  className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
