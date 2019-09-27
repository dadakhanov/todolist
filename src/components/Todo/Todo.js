import React from 'react'
import './Todo.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    card: {
      minWidth: 275,
      marginBottom: 10
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

function Todo({ text, completed, toggleTodo, deleteTodo }) {
    const classes = useStyles();
   
   /*     
    return (
        <div className={"todo" + (completed ? " completed" : "")} onClick={toggleTodo}>
            {text}
        </div>
    )
    */
   return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Header
        </Typography>        
        <Typography className={classes.pos} color="textSecondary">
          {text}
        </Typography>
       
      </CardContent>
      <CardActions>
          <IconButton onClick={toggleTodo} disabled={completed}>
              <DoneIcon/>
          </IconButton>
          <IconButton onClick={deleteTodo}>
              <DeleteIcon/>
          </IconButton>
      </CardActions>
    </Card>
  );
}

export default Todo