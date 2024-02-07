import axios from "axios";

const particleApi = axios.create({
  baseURL: "https://particle.onrender.com/api",
});

export const fetchArticles = () => {
  return particleApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};

export const fetchArticleById = (article_id) => {
  return particleApi.get(`/articles/${article_id}`).then((res) => {
    return res.data.article;
  });
};

export const fetchCommentsByArticleId = (article_id) => {
  return particleApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data.comment;
  });
};

export const patchArticleVotes = (article_id, num) => {
  return particleApi
    .patch(`/articles/${article_id}`, { inc_votes: num })
    .then((res) => {
      return res.data.votes;
    });
};

export const postCommentByArticleId = (article_id, username, body) => {
  return particleApi
    .post(`/articles/${article_id}/comments`, {
      username: username,
      body: body,
    })
    .then((res) => {
      return res.data;
    });
};
