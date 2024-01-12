import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Paper } from "@mui/material";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import EditCardDialog from "./EditCardDialog";

export default function CardItem({ card, deleteCard, editCard, moveCardUp }) {
  const [openDialog, setOpenDialog] = React.useState(false);

  const dialogHandler = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <>
      <EditCardDialog
        open={openDialog}
        dialogHandler={dialogHandler}
        card={card}
        editCard={editCard}
      />
      <Paper style={{ padding: "0.5em 0em" }}>
        <ListItem
          secondaryAction={
            <>
              <IconButton edge="end" aria-label="first" onClick={() => moveCardUp(card.id, card.text)}>
                <ArrowDropUpIcon />
              </IconButton>
              <IconButton edge="end" aria-label="move">
                <DriveFileMoveIcon />
              </IconButton>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteCard(card.id)}
              >
                <DeleteIcon />
              </IconButton>
            </>
          }
          disablePadding
        >
          <ListItemButton role={undefined} dense>
            <IconButton>
              <Checkbox edge="start" tabIndex={-1} disableRipple />
            </IconButton>
            <ListItemText
              primary={card.text}
              onClick={() => setOpenDialog(true)}
            />
          </ListItemButton>
        </ListItem>
      </Paper>
    </>
  );
}
