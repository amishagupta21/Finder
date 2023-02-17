import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SearchResults = () => {

    const { state } = useLocation();
    return (
        <div className="search-results">
            {state.articles.map((result, index) => {
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
            })
            }
        </div>
    )
}

export default SearchResults
