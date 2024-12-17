import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Slider3 from './Components/3d_slider'; // Correct casing
import Modal from './Components/Modal';
import DragDrop from './Components/DragDrop';
// import './styles.css';

// Define your Layout component here or import it
// import Layout from './Components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Slider3 />} />
          <Route path="3dslider" element={<Slider3 />} />
          <Route path="modal" element={<Modal />} />
          <Route path="dragdrop" element={<DragDrop />} />
        </Route>
        <Route path="/modals" >
          <Route index element={<Modal />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
