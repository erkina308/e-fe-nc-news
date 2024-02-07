import "./App.css";
import "./index.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import CreateAcc from "./pages/CreateAcc";
import Articles from "./pages/Articles";
import ArticleById from "./pages/ArticlesById";
import CommentsById from "./pages/CommentsById";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/create-account" element={<CreateAcc />} />
        <Route path="/api/articles" element={<Articles />} />
        <Route path="/api/articles/:article_id" element={<ArticleById />} />
        <Route
          path="/api/articles/:article_id/comments"
          element={<CommentsById />}
        />
      </Routes>
    </>
  );
}

export default App;
