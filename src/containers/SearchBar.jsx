import React from 'react'
import { connect } from 'react-redux'
import { searchAction } from './../actions/search-actions'

const SearchBar = ({textToSearch,search}) => {
    console.log("SearchBar render")
    let input;
    return <div>    
        <input ref = {ref=> input = ref}
        onChange={()=>search(input.value)}
        value={textToSearch} 
        placeholder={"search"}

        />
    </div>
}

const mapStateToProps = state => {
    return {
        textToSearch: state.searchBar.textToSearch
    }
}

const mapDespatchToProps = dispatch => {
    return {
        search: text => dispatch(searchAction(text))
    }
}

export default connect(mapStateToProps, mapDespatchToProps)(SearchBar)