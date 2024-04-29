import React, { Component } from 'react'
// import Badge from './Badge';

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date } = this.props;
        return (
            <div>
                <div className="card" >
                    <img src={imageUrl}  className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="row">
                            <div className="col-4">
                                <a href={newsUrl} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-primary">Read more</a>
                            </div>
                            <div className='text-end col-8'>
                                <p><b>{author}</b> on {new Date(date).toDateString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
