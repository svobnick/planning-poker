import React from 'react';

import '../styles/layout/_card.scss';

const cards = [0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55];
let selectedCard = null;

class Card extends React.Component {
    render() {
        let click = this.onClickChoice();
        return (
            <div className="card__holder">
                {
                    cards.map(function (value, index) {
                        let cardId = "card-" + index;
                        let numberId = "number-" + value;
                        let finalValue = (index === 0) ? String.fromCharCode("189") : value;
                        return <div className="card" id={cardId} key={cardId}
                                    onClick={click.bind(this, cardId, numberId, index)}>
                            <p className="card__number" id={numberId} key={numberId}>{finalValue}</p>
                        </div>
                    })
                }
            </div>
        );
    }

    onClickChoice() {
        return function (cardId, numberId, index) {
            if (selectedCard == null) {
                let card = document.getElementById(cardId);
                card.classList.add('vote-card');
                let number = document.getElementById(numberId);
                number.classList.add('vote-number');
                selectedCard = index
            } else {
                let oldCard = document.getElementById("card-" + selectedCard);
                oldCard.classList.remove('vote-card');
                let oldNumber = document.getElementById("number-" + selectedCard);
                oldNumber.classList.remove('vote-number');

                let card = document.getElementById(cardId);
                card.classList.add('vote-card');
                let number = document.getElementById(numberId);
                number.classList.add('vote-number');
                selectedCard = index
            }
        }
    }
}

export default Card;