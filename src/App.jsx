import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slider3 from './Components/3d_slider'; // Correct casing
// import './styles.css';

// Define your Layout component here or import it
// import Layout from './Components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"  element={<Slider3 />}>
          <Route index element={<Slider3 />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
