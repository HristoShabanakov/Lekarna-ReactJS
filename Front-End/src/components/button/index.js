import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
//import DeleteIcon from '@material-ui/icons/Delete';
//import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconButton({text, type, handleClick}) {
  const classes = useStyles();
//   const getIcon = () => {
//       if(type==='primary'){
//           return(<Icon>send</Icon>)
//       }else{
//           return(<DeleteIcon />)
//       }
//   } //send secondary for delete button.
  return (
    <div>
      <Button
        onClick={handleClick}
        variant="contained"
        color={type}
        className={classes.button}
        //endIcon={getIcon()}
      >
       {text}
      </Button>
    </div>
  );
}
