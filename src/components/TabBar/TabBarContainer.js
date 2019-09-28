import React from 'react'
import TabBar from './TabBar'
import {connect} from "react-redux";
import {navigate} from "../../actions/navigatorActions";
import {navigationTabs} from "../../actions/navigationTabs";

function TabBarContainer({navigator, navigate}) {
    const tabs = [
        {id: 0, label: 'active', navigationTab: navigationTabs.ACTIVE},
        {id: 1, label: 'completed', navigationTab: navigationTabs.COMPLETED},
        {id: 2, label: 'all', navigationTab: navigationTabs.ALL}
    ]

    const handleChangeTab = tab => {
        navigate(tab.navigationTab, 0)
        sessionStorage.setItem("lastTab", tab.navigationTab)
    }

    const tabIndex = tabs.filter( tab => tab.navigationTab === navigator.tab)[0].id

    return <TabBar onTabChange={handleChangeTab}
                   tabs={tabs}
                   tabIndex={tabIndex}
        />
}

const mapStateToProps = state => {
    return {
        navigator: state.navigator
    }
}

export default connect(mapStateToProps,{navigate})(TabBarContainer)