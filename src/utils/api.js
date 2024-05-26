const api = {
  signup: async (email, password, username) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username,
        }),
      });
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  },
  signin: async (email, password) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  },
  getArticles: async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/articles`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  },
  deleteArticle: async (articleId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/articles/${articleId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  },
  saveArticle: async ({
    keyword,
    title,
    description,
    publishDate,
    source,
    url,
    photo,
  }) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/articles`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            keyword,
            title,
            description,
            publishDate,
            source,
            url,
            photo,
          }),
        }
      );
      return await response.json();
    } catch (err) {
      console.error(err);
    }
  },
  getUserInfo: async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (!response.ok) {
      throw new Error(`There was a problem with the request`);
    }
    return await response.json();
  },
};

module.exports = api;
