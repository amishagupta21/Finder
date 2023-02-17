import axios from "axios"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const API_KEY = "a596bf9299cd4a3eb69f25825e3a555a"
function Landing() {
    const [search, setSearch] = useState("");

    const searchHandler = (e) => {
       setSearch(e.target.value)
   }
    const navigate = useNavigate()
    const find = () => {
        axios({
            method: "GET",
            url: `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
        }).then((response) => {
            navigate("/searchResult", {
                state: {
                    articles: response.data.articles
                }
            })
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
        </div>
    )
}

export default Landing;
