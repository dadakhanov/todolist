import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {PropTypes} from 'prop-types'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
});

export default function CenteredTabs({onTabChange, tabs, defaultTabIndex}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(defaultTabIndex);

    const handleChange = (event, newValue) => {
        onTabChange(tabs[newValue])
        setValue(newValue);
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={value}
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

CenteredTabs.propTypes = {
    onTabChange: PropTypes.func.isRequired,
    defaultTabIndex: PropTypes.number,
    tabs: PropTypes.array.isRequired
}