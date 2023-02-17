import { useEffect, useState } from "react";
import axios from "axios";
import SearchNews from "../components/SearchResult";

const API_KEY = "a596bf9299cd4a3eb69f25825e3a555a";

const generateId = () => Math.ceil(Math.random() * 1000000).toString();
const countries = [
  {
    id: generateId(),
    name: "India",
    code: "in",
  },
  {
    id: generateId(),
    name: "United States",
    code: "us",
  },
  {
    id: generateId(),
    name: "Ukraine",
    code: "ua",
  },
  {
    id: generateId(),
    name: "Canada",
    code: "ca",
  },
];

export default function Select() {
  const [topNews, setTopNews] = useState([]);

  function fetchTopNews(country = "in") {
    axios({
      method: "GET",
      url: `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${API_KEY}`,
    })
      .then((response) => {
        setTopNews(response.data.articles);
      })
      .catch((error) => {
        console.log("Error: ", error); 
      });
  }

 
  useEffect(() => {
    fetchTopNews();
  }, []);

  return (
    <div className="container">
      <SearchNews />
      <div className="topHeadlines">
        <h1>Top Headlines</h1>
        <select onChange={(e)=>fetchTopNews(e.target.value)}>
          {countries.map((country) => {
            return (
              <option key={country.id} value={country.code}>
                {country.name}
              </option>
            );
          })}
        </select>
      </div>

      {topNews.map((news) => {
        return (
          <div className="topNews">
            <h1>{news.title}</h1>
            <img width={100} height={100} src={news.urlToImage} alt="news"/>
          </div>
        );
      })}
    </div>
  );
}