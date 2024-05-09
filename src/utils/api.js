const newsApi = {};
newsApi.getNews = async (searchTerm, page = 1) => {
  return fetch(
    `${process.env.REACT_APP_API_URL}?q=${searchTerm}&from=2024-04-30&to=2024-05-07&pageSize=${process.env.REACT_APP_NEWS_PAGE_SIZE}&page=${page}`,
    {
      method: "GET",
      headers: {
        Authorization: process.env.REACT_APP_API_KEY,
      },
    }
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
};

export default newsApi;

//https://newsapi.org/v2/everything?q=bitcoin&from=2024-04-30&to=2024-05-07&pageSize=3&page=1
