import React from 'react'
import CenteredTabs from './CenteredTabs'
import {connect} from "react-redux";
import {setVisibilityFilter} from "../../actions/visibilityFilterActions";
import {visibilityFilters} from "../../visibilitiFilters";

function CenteredTabsLink({visibilityFilter, setVisibilityFilter}) {
    const tabs = [
        {id: 0, label: 'active', visibilityFilter: visibilityFilters.SHOW_ACTIVE},
        {id: 1, label: 'completed', visibilityFilter: visibilityFilters.SHOW_COMPLETED},
        {id: 2, label: 'all', visibilityFilter: visibilityFilters.SHOW_ALL}
    ]

    const handleChangeTab = tab => {
        setVisibilityFilter(tab.visibilityFilter)
        console.log("change tab to " + tab.visibilityFilter)
    }

    return <CenteredTabs onTabChange={handleChangeTab}
                      tabs={tabs}
                      defaultTabIndex={0}
        />
}

const mapStateToProps = state => {
    return {
        visibilityFilter: state.visibilityFilter
    }
}

export default connect(mapStateToProps,{setVisibilityFilter})(CenteredTabsLink)