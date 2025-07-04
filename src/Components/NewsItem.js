import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageurl, newsUrl, author, publishedAt} = this.props;
    return (
      <div className='container my-3'>
        <div className="card" style={{width: "18rem"}}>
  <img src={imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <p className="card-text"><small className="text-muted">By {author} at {publishedAt}</small></p>
    <a href={newsUrl} rel="noreferrer" target='_blank' className="btn btn-primary bg-dark">Know More</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem
