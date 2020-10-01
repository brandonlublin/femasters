import { navigate } from '@reach/router';
import React, { Component } from 'react';
import SearchBox from './SearchBox';

class SearchParams extends Component {
    handleSearchSubmit() {
        //reach router programmatically redirects with the navigate import
        navigate('/');
    }
    render() {
        return (
            <div className='search-route'>
                <SearchBox search={this.handleSearchSubmit()}/>
            </div>
        )
    }
}

export default SearchParams;