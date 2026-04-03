import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Facilities from "./pages/Facelities";
import Faculty from "./pages/Faculty";
import Students from "./pages/Students";
import IQAC from "./pages/IQAC";
import ExamCell from "./pages/Examcell";
import Downloads from "./pages/Downloads";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScroolToTop";
import AdministratorDesk from "./pages/AdministratorDesk";
import OrganizationChart from "./pages/OrganizationChart";
import DeansDesk from "./pages/DeansDesk";
import VariousCells from "./pages/VariousCells";
import GovernanceBody from "./pages/GovernanceBody";
import Library from "./pages/Library"

// Department Pages
import CSEDepartment from "./departments/CSEDepartment";
import MEDepartment from "./departments/MEDepartment";
import ETDepartment from "./departments/ETDepartment";
import CEDepartment from "./departments/CEDepartment";
import EEDepartment from "./departments/EEDepartment";
import AIDSCDepartment from "./departments/AIDSCDepartment";
import SHDepartment from "./departments/SHDepartment"; // Note: Consider renaming file to SHDepartment.jsx for consistency
import Settings from "./pages/Settings";
// New About Pages
import AboutACET from "./pages/AboutACET";
import AboutTrust from "./pages/AboutTrust";
import VisionMission from "./pages/VisionMission";

// New Placement Pages
import PlacementStatistics from "./pages/PlacementStatistics";

// New Research Pages
import ResearchAreas from "./pages/ResearchAreas";

// New Facilities Pages
import Laboratories from "./pages/Laboratories";
import CoreValues from "./pages/CoreValues";
import PrincipalMessage from "./pages/PrincipalMessage";
import Management from "./pages/Management";
import Profile from "./pages/profile";
import { NotificationProvider } from './context/NotificationContext';
function App() {
  return (
     <NotificationProvider>
    <Router>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/students" element={<Students />} />
          <Route path="/iqac" element={<IQAC />} />
          <Route path="/examcell" element={<ExamCell />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about/administrator" element={<AdministratorDesk />} />
          <Route path="/about/organization" element={<OrganizationChart />} />
          <Route path="/about/deans-desk" element={<DeansDesk />} />
          <Route path="/about/various-cells" element={<VariousCells />} />
          <Route path="/about/governance" element={<GovernanceBody />} />
          <Route path="/facilities/library" element={<Library />} />
          <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          {/* Department Pages */}
          <Route path="/department/computer-science" element={<CSEDepartment />} />
          <Route path="/department/mechanical" element={<MEDepartment />} />
          <Route path="/department/electronics-telecommunication" element={<ETDepartment />} />
          <Route path="/department/civil" element={<CEDepartment />} />
          <Route path="/department/electrical" element={<EEDepartment />} />
          <Route path="/department/ai-data-science" element={<AIDSCDepartment />} />
          <Route path="/department/science-humanities" element={<SHDepartment />} /> {/* Updated path */}
           
          {/* About Sub-pages */}
          <Route path="/about/core-values" element={<CoreValues />} />
          <Route path="/about/principal-message" element={<PrincipalMessage />} />
          <Route path="/about/management" element={<Management />} />
          <Route path="/about/acet" element={<AboutACET />} />
          <Route path="/about/trust" element={<AboutTrust />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />

          {/* Placement Sub-pages */}
          <Route path="/placements/statistics" element={<PlacementStatistics />} />

          {/* Research Sub-pages */}
          <Route path="/research/areas" element={<ResearchAreas />} />

          {/* Facilities Sub-pages */}
          <Route path="/facilities/laboratories" element={<Laboratories />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </Router>
    </NotificationProvider>
  );
}

export default App;