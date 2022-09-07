import {Routes,Route}from "react-router-dom"
import NavBar from "./component/NavBar";
import Addpointer from "./page/Addpointer";
import Pointage from "./page/Pointage";
import ListPointage from "./page/ListPointage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
      <Route path="/" element={<Addpointer />}/>
      <Route path="/pointage" element={<Pointage />}/>
      <Route path="/listpointage" element={<ListPointage />}/>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
