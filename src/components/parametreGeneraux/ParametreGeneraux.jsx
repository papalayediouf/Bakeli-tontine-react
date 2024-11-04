// import admin from '../../../public/image/Ellipse 9.png';
import Nav from "../nav/Nav";
import Sidebar from "../sidebar/Sidebar";
export default function Parametre_generaux() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <div className="flex items-center justify-between shadow-lg p-2 mb-4">
          <h1 className="font-semibold text-2xl">Dashboard</h1>
          <Nav />
        </div>
        <div className="bg-gray-100 p-6">
          <h2 className="text-lg font-semibold mb-6">Paramètres Généraux</h2>

          <div className="flex flex-col md:flex-row bg-white">
            {/* Première div: Profil */}
            <div className="bg-white p-4 flex flex-col items-center justify-center w-full md:w-1/4 mb-4 md:mb-0">
              <h5 className="text-xl font-semibold mb-2">Profil</h5>
              <img
                // src={admin}
                alt="Image de profil"
                className="rounded-full mb-2 w-24 h-24"
              />

              <h1 className="text-[#093545] mb-2">Ndiaga Sall</h1>
              <h1 className="text-[#093545] mb-4">Admin</h1>

              <button className="bg-[#093545] text-white px-4 py-2 rounded mb-4">
                Éditer Profil
              </button>
            </div>

            {/* Bordure verticale */}
            <div className="hidden md:flex border-2 border-gray-200 h-auto my-3 "></div>

            {/* Deuxième div: Informations générales et Statistiques */}
            <div className="bg-white p-8 w-full md:w-2/3">
              <h1 className="text-xl font-semibold mb-4 bg-[#20DF7F] text-white p-2">
                Informations Générales
              </h1>
              <table className="min-w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Prénom</td>
                    <td className="py-2 text-right">Niaga</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Nom</td>
                    <td className="py-2 text-right">Sall</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Email</td>
                    <td className="py-2 text-right">niaga@example.com</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">Téléphone</td>
                    <td className="py-2 text-right">+33 1 23 45 67 89</td>
                  </tr>
                </tbody>
              </table>

              <h1 className="text-xl font-semibold mb-4 bg-[#20DF7F] text-white p-2">
                Statistiques
              </h1>
              <table className="min-w-full">
                <tbody>
                  <tr className="border-b">
                    <td className="py-2 font-medium">
                      Nombre de Membre Ajouté
                    </td>
                    <td className="py-2 text-right">25</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">
                      Nombre de Membre Archivé
                    </td>
                    <td className="py-2 text-right">10</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2 font-medium">
                      Nombre de Membre Bloqué
                    </td>
                    <td className="py-2 text-right">4</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
