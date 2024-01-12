import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form({ addCard, cards }) {
  const [text, setText] = useState("");
  const [id, setId] = useState(0);

  const checkDuplicity = (cards, text) => {
    if (cards.some((card) => card.text.includes(text))) {
      return false;
    }
    return true;
  };

  const cardCreate = (text, cards) => {
    if (text === "" || !checkDuplicity(cards, text)) {
    } else {
      const cardObj = { text: text, id: id };
      setId(id + 1);
      addCard(cardObj);
      setText("");
    }
  };

  return (
    <Paper className="paper">
      <div className="form">
        <TextField
          value={text}
          id="outlined-basic"
          label="Tarefa"
          variant="outlined"
          fullWidth
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="text" onClick={() => cardCreate(text, cards)}>
          Add+
        </Button>
      </div>
    </Paper>
  );
}
