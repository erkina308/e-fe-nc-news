import "./App.css";
import "./index.css";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import Articles from "./pages/Articles";
import ArticleById from "./pages/ArticlesById";
import CommentsById from "./pages/CommentsById";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import Navigation from "./components/Navigation";

function App() {
  const [user, setUser] = useState({
    username: "tickle122",
  });
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/api/articles" element={<Articles />} />
          <Route path="/api/articles/:article_id" element={<ArticleById />} />
          <Route
            path="/api/articles/:article_id/comments"
            element={<CommentsById />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
