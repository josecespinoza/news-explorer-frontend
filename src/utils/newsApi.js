const getFromDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - process.env.REACT_APP_NEWS_SEARCHTIME_IN_DAYS);
  const fromDate = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()}`;
  return fromDate;
};

const newsApi = {
  getNews: async (searchTerm, page = 1) => {
    try {
      const response = await fetch(
        `${
          process.env.REACT_APP_NEWSAPI_URL
        }?q=${searchTerm}&from=${getFromDate()}&pageSize=${
          process.env.REACT_APP_NEWS_PAGE_SIZE
        }&page=${page}`,
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
