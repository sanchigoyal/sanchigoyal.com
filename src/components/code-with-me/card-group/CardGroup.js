import React from 'react';
import Card from "../card/Card";
import './CardGroup.css';

const cardGroup = (props) => {
    const cards = props.cards.map((card, index) => {
        return (
            <Card
            key={index}
            heading={card.heading}
            repository={card.repository}
            repositoryLink={card.repositoryLink}
            readmeLink={card.readmeLink}
            topics={card.topics}
            courseContent={"/code-with-me/" + card.id}
          >
            {card.description}
          </Card> 
        )
    })
    return(
        <div className="_code-card-group">
            {cards}
        </div>
    )
}

export default cardGroup;