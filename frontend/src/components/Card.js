import React from 'react';

import '../styles/layout/_card.scss';

const cards = [0.5, 1, 2, 3, 5, 8, 13, 21, 34, 55];

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCard: null
        }

        this.onClickChoice = this.onClickChoice.bind(this);
    }

    onClickChoice(i) {
        // todo send choice on backend
        this.setState({selectedCard: i})
    }

    render() {
        return (
            <div className="card__holder">
                {
                    cards.map((value, i) => {
                        let cardRef = "card-" + value;
                        let numberRef = "number-" + value;
                        let selected = this.state.selectedCard === i
                        let finalValue = (i === 0) ? String.fromCharCode("189") : value;
                        return <div className={selected ? "card vote-card" : "card"}
                                    key={cardRef}
                                    onClick={() => this.onClickChoice(i)}>
                            <p className={selected ? "card__number vote-card" : "card__number"}
                               key={numberRef}>{finalValue}</p>
                        </div>
                    })
                }
            </div>
        );
    }

}

export default Card;