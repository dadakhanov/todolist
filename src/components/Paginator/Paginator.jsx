import React from 'react'
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from "@material-ui/core/IconButton";

export default function Paginator({moveLeft, moveRight, pageCount, currentPage}){
    return (
        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
            <IconButton  onClick={moveLeft} disabled={currentPage <= 1}><ChevronLeftIcon/></IconButton>
            <IconButton  onClick={moveRight} disabled={pageCount === currentPage || pageCount <= 1}><ChevronRightIcon/></IconButton>
        </Grid>
    )
}

Paginator.propTypes = {
    moveLeft: PropTypes.func.isRequired,
    moveRight: PropTypes.func.isRequired,
    pageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
}