import { Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Account from './pages/account';
import Blog from './pages/blog';
import Careers from './pages/careers';
import Contact from './pages/contact';
import Faq from './pages/faq';
import Gallery from './pages/gallery';
import Guide from './pages/guide';
import Locations from './pages/locations';
import Login from './pages/login';
import Quote from './pages/quote';
import Register from './pages/register';
import Services from './pages/services';
import Testimonials from './pages/testimonials';
import Track from './pages/track';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/account" element={<Account />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/login" element={<Login />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/register" element={<Register />} />
      <Route path="/services" element={<Services />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/track" element={<Track />} />
    </Routes>
  );
}

export default App;
