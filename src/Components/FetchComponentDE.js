import React, { Component } from 'react';
import NewsItem from './NewsItem';
import './fetch.css'

class FetchComponentDE extends Component {
    state = {
        isLoaded: false,
        news: []
    }
    componentDidMount() {
        fetch("https://newsapi.org/v2/top-headlines?country=de&apiKey=c0f42c0fca144ac2b95c9391451520bc")
            .then(res => res.json())
            .then(
                (result) => {
                    // console.log(result.articles)
                    this.setState({
                        isLoaded: true,
                        news: result.articles
                    }, () => console.log(this.state.news));
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        return (
            <div className="germany">
                {this.state.news.map((data, i) => <NewsItem key={i} data={data} />)}
            </div>
        );
    }
}

export default FetchComponentDE;


// http://newsapi.org/v2/top-headlines?country=de&apiKey=c0f42c0fca144ac2b95c9391451520bc