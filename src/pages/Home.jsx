import { Container, List } from "@mui/material";
import React, { useState } from "react";
import Form from "../components/Form";
import CardItem from "../components/CardItem";

export default function Home() {
  const [cards, setCards] = useState([]);

  const addCard = (card) => {
    setCards([...cards, card]);
  };
  const deleteCard = (id) => {
    var filtered = cards.filter((card) => card.id !== id);
    setCards(filtered);
  };

  const editCard = (id, editedText) => {
    var copyCards = JSON.parse(JSON.stringify(cards));
    copyCards.splice(id, 1, { text: editedText, id: id });
    setCards(copyCards);
  };
  const moveCardUp = (id) => {
    const index = cards.findIndex((card) => card.id === id);
    console.log(index)
    if (index > 0) {
      var copyCards = JSON.parse(JSON.stringify(cards));
      var removedCard = copyCards.splice(index, 1)[0];
      copyCards.unshift(removedCard);
      setCards(copyCards);
    }
  };

  return (
    <div>
      <Container maxWidth="xs" className="container">
        <Form addCard={addCard} cards={cards} />
        <List className="list">
          {cards.map((card) => (
            <div key={card.id} className="cards">
              <CardItem
                card={card}
                deleteCard={deleteCard}
                editCard={editCard}
                moveCardUp={moveCardUp}
              />
            </div>
          ))}
        </List>
      </Container>
    </div>
  );
}
