import React, { Component } from 'react';

class FetchComponentDE extends Component {
    state = {
        isLoaded: false,
        news: []
    }
    componentDidMount() {
        fetch("http://newsapi.org/v2/top-headlines?country=de&apiKey=c0f42c0fca144ac2b95c9391451520bc")
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

            </div>
        );
    }
}

export default FetchComponentDE;


// http://newsapi.org/v2/top-headlines?country=de&apiKey=c0f42c0fca144ac2b95c9391451520bc