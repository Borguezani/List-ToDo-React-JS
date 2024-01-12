import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TextField } from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditCardDialog({
  open,
  dialogHandler,
  card,
  editCard,
}) {
  const [editedText, setEditedText] = React.useState(card.text);
  const editedTextHandler = () => {
    editCard(card.id, editedText);
    dialogHandler();
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogHandler}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Editar texto do campo?"}</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            defaultValue={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandler}>Cancel</Button>
          <Button onClick={editedTextHandler}>OK</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
