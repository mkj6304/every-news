import React, { Component } from 'react'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import Spinner from './Spinner';


export class News extends Component {
  static defaultProps={
      pageSize: 5,
      country: 'in',
      category: 'general'
  }

  static propTypes = {
      pageSize: PropTypes.number,
      country: PropTypes.string,
      category: PropTypes.string
  }


    
  constructor(props){
        super(props);
        console.log("Hello I am a constructor");
        this.state={
            articles: this.articles,
            loading: false,
            page: 1
        }
        document.title = this.capitalizeFirstLetter(this.props.category);
    }

   capitalizeFirstLetter = (val) => {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

  async update(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }  

  async componentDidMount(){
    this.update();
  }

  handlenextclick = async () => {
    this.setState({page :this.state.page +1});
    this.update();
  }

  handleprevclick = async () => {
    this.setState({page :this.state.page -1});
    this.update();
  }

    render() {
    
    return (
       <div>
   
    <div className='container my-3'>
<h1 className="text-center">Every-News - Top Headlines for {document.title}</h1>
      {this.state.loading && <Spinner/>}
    <div className="row">
    {!this.state.loading && Array.isArray(this.state.articles) && this.state.articles.map((element)=>{
        return  <div className="col md-4" key={element.url}>
        <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
      </div>
        
   
    })}
    
      </div>
     
     <div className="container d-flex justify-content-between">
      <button type="button" disabled={this.state.page<=1} onClick={this.handleprevclick} className="btn btn-dark">Previous</button>
     <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totaResults/8)} onClick={this.handlenextclick} className="btn btn-dark">Next</button>
     </div>
    </div>
    </div>
    )
  }
}

export default News
