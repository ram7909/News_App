import React, { useEffect, useState } from 'react'
const News = () => {

    const [news, setNews] = useState([])
    const fetchData = async (category) => {
        const apiKey = 'e519bc933e8641c0b7ef243d14da2fb5'
        const data = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2024-06-08&sortBy=publishedAt&apiKey=e519bc933e8641c0b7ef243d14da2fb5`)
        // const data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`)
        const result = await data.json();
        setNews(result.articles)
        console.log(result.articles);
    }

    useEffect(() => {
        fetchData('general')
    }, [])


    return (
        <>
            <div className="head text-center my-3" >
                <button type="button" onClick={() => fetchData('general')} className="btn btn-primary mx-3 my-2">General</button>
                <button type="button" onClick={() => fetchData('health')} className="btn btn-primary mx-3 my-2">Health</button>
                <button type="button" onClick={() => fetchData('science')} className="btn btn-primary mx-3 my-2">Science</button>
                <button type="button" onClick={() => fetchData('technology')} className="btn btn-primary mx-3 my-2">Technology</button>
                <button type="button" onClick={() => fetchData('entertainment')} className="btn btn-primary mx-3 my-2">Entertainment</button>
                <button type="button" onClick={() => fetchData('sports')} className="btn btn-primary mx-3 my-2">Sports</button>
                <button type="button" onClick={() => fetchData('business')} className="btn btn-primary mx-3 my-2">Business</button>
            </div>
            <div className="main-s mx-5 d-flex justify-content-center">
                <div className="container my-3 d-flex justify-content-center">
                    <div className="row">
                        {news?.map((element) => <div className='col-lg-4 col-md-6 col-sm-12 my-3 text-center' key={Math.random()}>
                            <div className="card bg-dark text-light" style={{ width: '18rem', border: '2px solid yellow' }}>
                                <div className="img" style={{ padding: '10px' }}>
                                    <img src={element.urlToImage} className="card-img-top" alt="img" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{element.author}</h5>
                                    <p className="card-text">{element.description}.</p>
                                    <a href={element.url} target='_blank' className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default News