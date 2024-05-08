const REACT_APP_API_URL = "https://newsapi.org/v2/everything";
const REACT_APP_API_KEY = "***REMOVED***";
const REACT_APP_NEWS_PAGE_SIZE = 3;

const newsApi = {};
newsApi.getNews = async (searchTerm = "ia") => {
  return fetch(
    `${REACT_APP_API_URL}?q=${searchTerm}&from=2024-04-30&to=2024-05-07&pageSize=${REACT_APP_NEWS_PAGE_SIZE}&page=1`,
    {
      method: "GET",
      headers: {
        Authorization: REACT_APP_API_KEY,
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
