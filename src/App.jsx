import Connexion from "./components/connexion/Connexion";
import Inscription from "./components/inscription/Inscription";
import Motdepasseoublier from "./components/mot-de-passe-oublier/Motdepasseoublier";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./components/singlePage/SinglePage";
import Dashboard from "./components/dashboard/Dashboard";
import Cotisation from "./components/cotisation/Cotisation";
import Utilisateur from "./components/utilisateur/Utilisateur";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/Motdepasseoublier" element={<Motdepasseoublier />} />
        <Route path="/singlepage" element={<SinglePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/utilisateur" element={<Utilisateur />} />
        <Route path="/cotisation" element={<Cotisation />} />
      </Routes>
    </BrowserRouter>
  );
}
