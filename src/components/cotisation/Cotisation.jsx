import Sidebar from "../sidebar/Sidebar";
export default function Cotisation() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-10">{/* Contenu principal ici */}</div>
      </div>
      <h1>Cotisation</h1>
    </>
  );
}
