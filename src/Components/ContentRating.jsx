
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
    constructor() {
        super();
        this.state = {
            likes: 0,
            dislikes: 0
        }
    }
    render() {
        return (
            <>
                <div className='content-rating'>
                    <p>
                    Life is often seen as a complex journey, one that is impossible
                    to understand, and this is the way I used to look at it for a long time.
                    But, since I directed my efforts to reach inner peace—a state of mind
                    where our mood is stable all of the time, a state of calmness
                    that doesn’t change when we are going through difficult times,
                    a state where what we crave is aligned with what our minds see
                    as beneficial and meaningful—I noticed that seeing life as complex
                    isn’t going to lead me to it.
                    </p>
                    <div className='rating-buttons'>
                        <button className='like-button'>
                            Like ({this.state.likes})
                        </button>
                        <button className='dislike-button'>
                            Dislike ({this.state.dislikes})
                        </button>
                    </div>
                </div>
            </>
        );
    }
}

export default ContentRating;
