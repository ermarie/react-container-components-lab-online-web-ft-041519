import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'WZvxiC7s8xWD2ZVH7QxnW2gdVlAs7KBA';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {

    state = {
        reviews: [],
        searchTerm: ''
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

    componentDidMount() {
        fetch(URL)
          .then(response => response.json())
          .then(data => {
            // console.log(data.results[0])
            let count = 0
            let reviews = []
            for (const review in data.results[0]) {
                while (count < 3) {
                    reviews.push(review.headline)
                }
            }
            this.setState({
              reviews: reviews
            })
            console.log(this.state.reviews)
          })
      }

}

export default SearchableMovieReviewsContainer