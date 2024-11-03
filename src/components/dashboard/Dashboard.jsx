import Sidebar from "../sidebar/Sidebar";
import Nav from "../nav/Nav";


export default function Dashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-2">
          <div className="flex items-center justify-between shadow-lg p-2 mb-4">
            <h1 className="font-semibold text-2xl">Dashboard</h1>
            <Nav />
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 justify-between md:px-5">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-4 flex-1 md:max-w-[25%]">
              <h2 className="font-bold text-lg">Titre de la Card 1</h2>
              <p>Contenu de la card 1. Voici des informations pertinentes.</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-4 flex-1 md:max-w-[25%]">
              <h2 className="font-bold text-lg">Titre de la Card 2</h2>
              <p>Contenu de la card 2. Voici d'autres informations.</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-md rounded-lg p-4 flex-1 md:max-w-[42%]">
              <h2 className="font-bold text-lg">Titre de la Card 3</h2>
              <p>Contenu de la card 3. Plus de détails ici.</p>
            </div>
          </div>
          {/* Section pour les cartes supplémentaires */}
          <div className="flex flex-col md:flex-row md:space-x-4 justify-between md:px-5 mt-4">
            {/* Card 4 */}
            <div className="bg-white shadow-md rounded-lg p-4 flex-1 md:max-w-[54%]">
              <h2 className="font-bold text-lg">Titre de la Card 4</h2>
              <p>Contenu de la card 4. Informations supplémentaires ici.</p>
            </div>
            {/* Card 5 */}
            <div className="bg-white shadow-md rounded-lg p-4 flex-1 md:max-w-[42%]">
              <h2 className="font-bold text-lg">Titre de la Card 5</h2>
              <p>Contenu de la card 5. D'autres détails ici.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 justify-between md:px-5 mt-4">
            {/* Card 6 */}
            <div className="bg-white shadow-md rounded-lg p-4 flex-1 md:max-w-[54%]">
              <h2 className="font-bold text-lg">JUIn</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th>Membres </th>
                    <th>Montant </th>
                    <th>Date</th>
                    <th>Statut</th>
                  </tr>
                </thead>
                <tbody>
                 
                </tbody>
              </table>
            </div>
            {/* Card 7 */}
            <div className="bg-white shadow-md rounded-lg p-4 flex-1 md:max-w-[42%]">
              <h2 className="font-bold text-lg">Top Progression</h2>
              <table className="table-auto">
                <thead>
                  <tr>
                    <th>Membre </th>
                    <th>Date debut</th>
                    <th>Progression</th>
                  </tr>
                </thead>
                <tbody>
                 
               
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
