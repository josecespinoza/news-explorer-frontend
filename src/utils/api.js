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
      return response;
    } catch (err) {
      console.error(err);
    }
  },
};

module.exports = api;
