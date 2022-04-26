import { Route, Routes } from "react-router-dom";
import Layout from '../src/components/Layout/Layout';
import Form from '../src/components/Form/Form';
import ViewPage from './components/ViewPage/ViewPage';
import ManagingPage from './components/ManagingPage/ManagingPage';
import './App.css';



function App() {


  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route path="/" element={<Form />} />
          <Route path="/ViewPage" element={<ViewPage />} />
          <Route path="/ManagingPage" element={<ManagingPage />} />

        </Route>
      </Routes>


    </div>
  );
}

export default App;
