
import axios from "axios"
import { useState} from 'react';
const API_KEY = "a596bf9299cd4a3eb69f25825e3a555a"
function App() {
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("");
  const [loader,setLoader]=useState(false)
  const searchHandler = (e) => {
    setSearch(e.target.value)
  }
  const find = () => {
    setLoader(true)
    axios({
      method: "GET",
      url: `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    }).then((response) => {
    
      setResult(response.data.articles) 
      setLoader(false)

    }).catch((error) => {  
      console.log("error", error)
    })
  }
  return (
    <div className='container'>
      <div className="common" >
      <div className="finder">
       <h1>FINDER</h1>
      </div>
      <div className='search-field'>
        <input type="search" placeholder='Enter your Search here' value={search} onChange={searchHandler} />
        <button onClick={find}>Finder</button>
      </div>
      </div>
      {loader?(<div className="loading">
        <div className="circle"></div> Loading
        </div>
      ) : (
        <div className="search-results">
        {result.map((result, index) => {
          return (
            <div className="search-result" key={index}>
              <div className='descriptive'>
                <div>
                  <p>{result.url}</p>
                  <a target="_blank" rel="noreferrer" href={result.url}>
                    <h2>{result.title}</h2>
                  </a>
                  <p>{result.description}</p>
                </div>
                <img width="100px" height="100px" src={result.urlToImage} alt="news info" />
              </div>
            </div>
          )
        })}
        </div>)}
      </div>
  )
}

export default App;
