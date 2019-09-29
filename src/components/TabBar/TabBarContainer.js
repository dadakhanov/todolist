import React from 'react'
import TabBar from './TabBar'
import {connect} from "react-redux"
import {filters} from "../../actions/filters"
import {setFilterThunk} from "../../actions/filterActions"

function TabBarContainer({filter, setFilterThunk}) {
    const tabs = [
        {id: 0, label: 'active', filter: filters.ACTIVE},
        {id: 1, label: 'completed', filter: filters.COMPLETED},
        {id: 2, label: 'all', filter: filters.ALL}
    ]

    const handleChangeTab = tab => {
        setFilterThunk(tab.filter)
    }

    const tabIndex = tabs.filter(tab => tab.filter === filter)[0].id

    return <TabBar onTabChange={handleChangeTab}
                   tabs={tabs}
                   tabIndex={tabIndex}
        />
}

const mapStateToProps = state => {
    return {
        filter: state.filter
    }
}

export default connect(mapStateToProps, {setFilterThunk})(TabBarContainer)