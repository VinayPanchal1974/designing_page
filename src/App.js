import './App.css';
import CreateCampaign from './Components/Campagins/CreateCampaign';
import DragAndDrop from './Components/DragAndDrop/DragAndDrop';
import MainForm from './Components/Form/MainForm';
import QrCodeForm from './Components/Form/QrCodeForm';
import SelectQrCode from './Components/Form/SelectQrCode';
import UpperForm from './Components/Form/UpperForm';
import NavMain from './Components/Layout/NavMain';
import NavSecond from './Components/Layout/NavSecond';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <NavMain />
      <NavSecond />
      <MainForm />
    </>
  );
}

export default App;
