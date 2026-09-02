import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HomeTwo from './pages/HomeTwo';
import About from './pages/About';
import Career from './pages/Career';
import ClientSuccess from "./pages/ClientSuccess";
import Testimonials from "./pages/Testimonials";
import Services from "./pages/Services"; 
import Credentialing from './pages/Credentialing';
import InsuranceVerification from './pages/InsuranceVerification';
import BillingServices from './pages/BillingServices';
import ConsultingAndAudit from './pages/ConsultingAndAudit';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home-two" element={<HomeTwo />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} /> 
          <Route path="/services/credentialing" element={<Credentialing />} />
          <Route path="/services/verification" element={<InsuranceVerification />} />
          <Route path="/services/billing" element={<BillingServices />} />
          <Route path="/services/consultingandaudit" element={<ConsultingAndAudit />} />
          <Route path="/career" element={<Career />} />
          <Route path="/client-success" element={<ClientSuccess />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;