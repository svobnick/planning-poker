import React from 'react';

import '../styles/layout/_card.scss';

const cards = [0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55];

class Card extends React.Component {
    render() {
        return (
            <div className="card__holder">
                {
                    cards.map(function (value) {
                        return <div className="card card__vote">
                            <p className="card__number">{value}</p>
                        </div>
                    })
                }
            </div>
        );
    }


}

export default Card;