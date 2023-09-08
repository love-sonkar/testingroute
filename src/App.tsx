import { Route, Routes } from "react-router-dom";
import AddName from "./AddName";
import DataShow from "./DataShow";
import Header from "./Header";
import "./styles/app.scss";

function App() {
  return (
    <main className="app">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<AddName />} />
          <Route path="/:param" element={<DataShow />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
