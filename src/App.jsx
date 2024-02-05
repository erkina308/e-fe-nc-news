import "./App.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import CreateAcc from "./pages/CreateAcc";
import Articles from "./pages/Articles";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAcc />} />
        <Route path="/api/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
