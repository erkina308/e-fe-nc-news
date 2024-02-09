import axios from "axios";

const particleApi = axios.create({
  baseURL: "https://particle.onrender.com/api",
});

export const fetchArticles = (topic) => {
  return particleApi
    .get("/articles", {
      params: {
        topic: topic,
      },
    })
    .then((res) => {
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

export const postCommentByArticleId = (article_id, input) => {
  return particleApi
    .post(`/articles/${article_id}/comments`, {
      username: input.username,
      body: input.body,
    })
    .then((res) => {
      return res.data;
    });
};

export const deleteCommentById = (comment_id) => {
  return particleApi.delete(`/comments/${comment_id}`);
};

export const fetchUsers = () => {
  return particleApi.get("/users").then((res) => {
    return res.data.users;
  });
};
