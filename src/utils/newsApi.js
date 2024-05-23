const newsApi = {
  getNews: async (searchTerm, page = 1) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_NEWSAPI_URL}?q=${searchTerm}&from=2024-04-30&to=2024-05-07&pageSize=${process.env.REACT_APP_NEWS_PAGE_SIZE}&page=${page}`,
        {
          method: "GET",
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );
      return response.ok && response.json();
    } catch (err) {
      console.log(err);
    }
  },
};

export default newsApi;
