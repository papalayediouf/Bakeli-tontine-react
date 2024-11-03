import Sidebar from "../sidebar/Sidebar";

const SinglePage = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 p-10">
        {/* Contenu principal ici */}
      </div>
    </div>
  );
};

export default SinglePage;
