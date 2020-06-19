import React from 'react';

import '../styles/layout/_stat.scss';
import '../styles/layout/_result.scss';

class Stat extends React.Component {
    render() {
        return (
            <div className="stat">
                <h2 className="stat__title">Statistics</h2>
                <div className="stat__data">
                    <div className="stat__data-info">
                        <div className="result">
                            <h4 className="result__title">Average result:</h4>
                            <p className="result__text">13 points</p>
                        </div>
                        <div className="result">
                            <h4 className="result__title">Time:</h4>
                            <p className="result__text">02:54</p>
                        </div>
                        <div className="result">
                            <h4 className="result__title">Votes:</h4>
                            <p className="result__text">11</p>
                        </div>

                    </div>
                    <div className="stat__data-details">
                        <div className="result">
                            <h4 className="result__title">3</h4>
                            <p className="result__text">John Doe</p>
                        </div>
                        <div className="result">
                            <h4 className="result__title">5</h4>
                            <p className="result__text">Sally Young, Kira Fischer, Ryker Chambers</p>
                        </div>
                        <div className="result">
                            <h4 className="result__title">13</h4>
                            <p className="result__text">Alfred Pitt, Sally Young, Darnell Winters, Ronan Goodman, Lol Kek</p>
                        </div>
                        <div className="result">
                            <h4 className="result__title">21</h4>
                            <p className="result__text">Kira Fischer</p>
                        </div>
                        <div className="result">
                            <h4 className="result__title">55</h4>
                            <p className="result__text">Ryker Chambers</p>
                        </div>
                    </div>
                </div>

                <button className="stat__button">Play again</button>


            </div>
        );
    }
}

export default Stat;