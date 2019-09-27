import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    card: {
        minWidth: 275,
        marginBottom: 10
    },
    title: {
        fontSize: 14,
    },
    content: {
        fontSize: 16,
        whiteSpace: 'pre-line'
    },
    pos: {
        marginBottom: 12,
    },
});

function Todo({text, completed, date, completeDate, toggleTodo, deleteTodo}) {
    const classes = useStyles();


    const createDateText = date.substr(0, 16).replace("T", " ");
    let completeDateText = "";
    if (completeDate !== null) {
        completeDateText = " - " + completeDate.substr(0, 16).replace("T", " ");
    }

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {createDateText} {completeDateText}
                </Typography>
                <Typography className={classes.content}>
                    {text}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton onClick={deleteTodo}>
                    <DeleteIcon/>
                </IconButton>
                <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                    <IconButton onClick={toggleTodo} disabled={completed}>
                        <DoneIcon/>
                    </IconButton>
                </Grid>
            </CardActions>
        </Card>
    );
}

export default Todo