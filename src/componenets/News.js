import React, { Component } from 'react'
import NewsItem from './NewsItem'
import image from './images/1.jpg'

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false
    }
  }


  async componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=tesla&from=2024-03-28&sortBy=publishedAt&apiKey=bb6ff936f0054d97bf8e07695885a841";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
    })
  }

  render() {
    return (
      <div>
        <div className='container'>
          <h1 className='my-5'>Top headlines</h1>
          <div className="row my-5">
            {this.state.articles.map((element) => {
              return<div className="col-md-4" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage?element.urlToImage: image} newsUrl={element.url} />
              </div>
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default News


