const APP_NEWS_PAGE_SIZE = process.env.REACT_APP_NEWS_PAGE_SIZE || 3;
const APP_NEWSAPI_URL =
  process.env.REACT_APP_NEWSAPI_URL || "https://newsapi.org/v2/everything";
const APP_API_KEY =
  process.env.REACT_APP_API_KEY || "336396cba04148f3a4f41d18bea81ac4";

const APP_NEWS_SEARCHTIME_IN_DAYS =
  process.env.REACT_APP_NEWS_SEARCHTIME_IN_DAYS || 30;

const getFromDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - APP_NEWS_SEARCHTIME_IN_DAYS);
  const fromDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  return fromDate;
};

const newsApi = {
  getNews: async (searchTerm, page = 1) => {
    try {
      const response = await fetch(
        `${APP_NEWSAPI_URL}?q=${searchTerm}&from=${getFromDate()}&pageSize=${APP_NEWS_PAGE_SIZE}&page=${page}`,
        {
          method: "GET",
          headers: {
            Authorization: APP_API_KEY,
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
