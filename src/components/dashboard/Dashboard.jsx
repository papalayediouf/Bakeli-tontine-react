import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Nav from "../nav/Nav";
import db from "../../data/db.json";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Enregistrer les composants de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ArcElement
);

export default function Dashboard() {
  const [members, setMembers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      setMembers(db);
    };

    fetchData();
  }, []);

  // Calculer l'index de la première et de la dernière entrée de la page actuelle
  const indexOfLastMember = currentPage * itemsPerPage;
  const indexOfFirstMember = indexOfLastMember - itemsPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  // Calculer le nombre total de pages
  const totalPages = Math.ceil(members.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Data for Line Chart
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"], // Exemple de mois
    datasets: [
      {
        label: "Cotisations",
        data: [65, 59, 80, 81, 56, 55], // Exemple de données
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  // Data for Doughnut Chart
  const doughnutData = {
    labels: ["Validé", "En Attente", "Refusé"],
    datasets: [
      {
        data: [300, 50, 100], // Exemple de données
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    plugins: {
      legend: {
        display: true,
        position: "bottom", // Position de la légende
      },
    },
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="flex items-center justify-between shadow-lg p-2 mb-4">
          <h1 className="font-semibold text-2xl">Dashboard</h1>
          <Nav />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 justify-between md:px-5">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex-1 md:max-w-[25%]">
            <h2 className="text-sm">Juin</h2>
            <p className="font-semibold">225.000 FCA</p>
            <h1 className="text-gray-400 text-sm">Nombre de cotisation: 27</h1>
          </div>
          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex-1 md:max-w-[25%]">
            <h2 className="text-sm">Mai</h2>
            <p className="font-semibold">225.000 FCA</p>
            <h1 className="text-gray-400 text-sm">Nombre de cotisation: 27</h1>
          </div>
          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex-1 md:max-w-[42%]">
            <div>
              <h2 className="text-sm">Caisse</h2>
              <p>
                <span className="text-gray-400 font-semibold text-sm">
                  300.000 FCA
                </span>
                / <span className="font-semibold text-sm">500.000 FCA</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4 justify-between md:px-5 mt-4">
          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex-1 md:max-w-[54%]">
            <h2 className="font-semibold text-lg">
              Évaluation en fonction du temps
            </h2>
            <Line data={lineData} />
          </div>
          {/* Card 5 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex-1 md:max-w-[42%]">
            <h2 className="font-semibold text-lg">Statistique</h2>
            <Doughnut data={doughnutData} options={doughnutOptions} />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 justify-between md:px-5 mt-4">
          {/* Card 6 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex-1 md:max-w-[54%]">
            <h2 className="font-bold text-lg">Juin</h2>
            <table className="table-auto w-full border border-gray-300">
              <thead className="bg-gray-200 ">
                <tr className="bg-[#20DF7F]">
                  <th className=" text font-medium text-xs  p-2">Nom</th>
                  <th className=" text font-medium text-xs  p-2">Montant </th>
                  <th className=" text font-medium text-xs  p-2">Statut</th>
                  <th className=" text font-medium text-xs  p-2 ">Date</th>
                </tr>
              </thead>
              <tbody>
                {currentMembers.map((member, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className=" text-xs  p-2 ">{member.Nom}</td>
                    <td className=" text-xs  p-2 ">
                      {member.montant_cotise.toFixed(2)} Fcfa{" "}
                    </td>
                    <td className=" text-xs  p-2 ">{member.statut}</td>
                    <td className=" text-xs  p-2 ">{member.Date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Card 7 */}
          <div className="bg-white shadow-md rounded-lg p-4 flex-1 md:max-w-[42%]">
            <h2 className="font-bold text-lg">Top Progression</h2>
            <table className="table-auto w-full  rounde">
              <thead className="bg-gray-200 ">
                <tr className="bg-[#20DF7F]  ">
                  <th className=" text-xs  p-2">Nom</th>

                  <th className=" text-xs  p-2">Date de Fin</th>
                  <th className=" text-xs  p-2">Progression</th>
                </tr>
              </thead>
              <tbody>
                {currentMembers.map((member, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className=" text-xs  p-2">{member.Nom}</td>

                    <td className=" text-xs  p-2">{member.date_de_fin}</td>
                    <td className=" text-xs  p-2">{member.Progression}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
      </div>
    </div>
  );
}
