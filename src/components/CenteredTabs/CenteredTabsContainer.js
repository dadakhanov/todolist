import React from 'react'
import CenteredTabs from './CenteredTabs'
import {connect} from "react-redux";
import {navigate} from "../../actions/navigatorActions";
import {navigationTabs} from "../../actions/navigationTabs";

function CenteredTabsLink({navigator, navigate}) {
    const tabs = [
        {id: 0, label: 'active', navigationTab: navigationTabs.ACTIVE},
        {id: 1, label: 'completed', navigationTab: navigationTabs.COMPLETED},
        {id: 2, label: 'all', navigationTab: navigationTabs.ALL}
    ]

    const handleChangeTab = tab => {
        navigate(tab.navigationTab, 0)
        console.log("change tab to " + tab.navigationTab)
    }

    return <CenteredTabs onTabChange={handleChangeTab}
                      tabs={tabs}
                      defaultTabIndex={0}
        />
}

const mapStateToProps = state => {
    return {
        navigator: state.navigator
    }
}

export default connect(mapStateToProps,{navigate})(CenteredTabsLink)