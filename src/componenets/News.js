import React, { Component } from 'react'
import NewsItem from './NewsItem'
import image from './media/1.jpg'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 18,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number
    }


    constructor() {
        super();
        this.state = {
            page: 1,
            articles: [],
            loading: false,
            count: 0,
            totalResults: 0,
        }
    }
    async updateNews() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb6ff936f0054d97bf8e07695885a841&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            loading: false
        });
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bb6ff936f0054d97bf8e07695885a841&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }

    handleNext = () => {
        this.setState({page: this.state.page + 1});
        this.updateNews();
    };
    handlePrev =() => {
        this.setState({page: this.state.page - 1})
        this.updateNews()
    }




    render() {
        return (
            <>
                <div className='container'>
                    <h1 className='my-5'>Top headlines</h1>
                    {this.state.loading && <Spinner />}
                    {!this.state.loading && <div className="row my-5">
                        {this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : image} newsUrl={element.url} author={element.author?element.author:"Unknown" } date={element.publishedAt} />
                            </div>
                        })}
                    </div>}
                </div>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-6 text-end">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrev}><i className="fa-solid fa-arrow-left"></i></button>
                        </div>
                        <div className="col-6 ">
                            <button type="button"
                                disabled={this.state.page >= Math.ceil(this.state.totalResults / 18)}
                                className="btn btn-primary"
                                onClick={this.handleNext}>
                                <i className="fa-solid fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default News