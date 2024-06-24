const APP_API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001";

const api = {
  signup: async (email, password, username) => {
    try {
      const response = await fetch(`${APP_API_URL}/signup`, {
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
      if (!response.ok) {
        const res = await response.json();
        let errorMessage = `Ocurrió un error durante el registro, por favor intenta denuevo`;
        if (res.errorCode === "ALREADY_EXIST_ERROR") {
          errorMessage = `Este correo electrónico no está disponible`;
        }
        return Promise.reject(new Error(errorMessage));
      }
      return await response.json();
    } catch (err) {
      return Promise.reject(
        new Error("Disculpanos, el registro no se encuentra disponible")
      );
    }
  },
  signin: async (email, password) => {
    try {
      const response = await fetch(`${APP_API_URL}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!response.ok) {
        return Promise.reject(
          new Error(
            `No pudimos iniciar tu sesión, por favor revisa tus credenciales`
          )
        );
      }
      return await response.json();
    } catch (err) {
      return Promise.reject(
        new Error("Disculpanos, el inicio de sesión no se encuentra disponible")
      );
    }
  },
  getArticles: async () => {
    try {
      const response = await fetch(`${APP_API_URL}/articles`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return await response.json();
    } catch (err) {
      return Promise.reject(
        new Error(
          "Disculpanos, no podemos obtener tus noticias en este momento"
        )
      );
    }
  },
  deleteArticle: async (articleId) => {
    try {
      const response = await fetch(`${APP_API_URL}/articles/${articleId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return await response.json();
    } catch (err) {
      return Promise.reject(
        new Error(
          "Disculpanos, no podemos eliminar la noticia en estos momentos"
        )
      );
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
      const response = await fetch(`${APP_API_URL}/articles`, {
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
      });
      if (!response.ok) {
        return Promise.reject(new Error(`No fue posible guardar la noticia`));
      }
      return await response.json();
    } catch (err) {
      return Promise.reject(
        new Error("Disculpanos, no podemos guardar noticias en estos momentos")
      );
    }
  },
  getUserInfo: async () => {
    try {
      const response = await fetch(`${APP_API_URL}/users/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Ocurrió un error y no pudimos obtener tu información`);
      }
      return await response.json();
    } catch (err) {
      return Promise.reject(
        new Error(
          "Disculpanos, en estos momentos no podemos obtener tu información"
        )
      );
    }
  },
};

module.exports = api;
