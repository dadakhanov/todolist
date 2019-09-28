import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {PropTypes} from 'prop-types'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        marginBottom: 5
    },
});

export default function TabBar({onTabChange, tabs, tabIndex}) {
    const classes = useStyles();

    const handleChange = (event, newValue) => {
        onTabChange(tabs[newValue])
    }; 

    return (
        <Paper className={classes.root}>
            <Tabs
                value={tabIndex}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            > {tabs.map(t => (
                    <Tab key={t.id} label={t.label}/>
                )
            )}
            </Tabs>
        </Paper>
    );
}

TabBar.propTypes = {
    onTabChange: PropTypes.func.isRequired,
    tabIndex: PropTypes.number.isRequired,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired
    })).isRequired
}