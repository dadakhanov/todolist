import React from 'react'
import styles from './AddTodo.module.css'
import {makeStyles} from '@material-ui/core/styles';
//import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import {Container} from '@material-ui/core';
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        margin: theme.spacing(1),
    },
}));

export default function AddTodo({addTodo, textAddTodo, setAddTodoText}) {
    const classes = useStyles();

    const handleChange = e => {
        setAddTodoText(e.currentTarget.value)

    }

    return (
        <div className={styles.AddTodo}>
            <Paper className={classes.root}>
                <Container>
                    <Input
                        placeholder="new task..."
                        className={classes.input}
                        inputProps={{
                            'aria-label': 'description',
                        }}

                        value={textAddTodo}
                        onChange={(e) => {
                            handleChange(e)
                        }}

                        fullWidth

                        endAdornment={(
                            <IconButton onClick={() => { addTodo(textAddTodo) }}>
                                <AddIcon/>
                            </IconButton>

                        )}

                    />
                </Container>


            </Paper>
        </div>


    )
}


/*
  <Button variant="outlined" size="medium" color="primary" className={classes.margin}
                                onClick={() => { addTodo() }}
                            >
                                add
                            </Button>
                            */