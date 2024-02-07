import "./App.css";
import "./index.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import CreateAcc from "./pages/CreateAcc";
import Articles from "./pages/Articles";
import ArticleById from "./pages/ArticlesById";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAcc />} />
        <Route path="/api/articles" element={<Articles />} />
        <Route path="/api/articles/:article_id" element={<ArticleById />} />
        {/* <Route path="/post-comment" element={<NewComment />} /> */}
      </Routes>
    </>
  );
}

export default App;
