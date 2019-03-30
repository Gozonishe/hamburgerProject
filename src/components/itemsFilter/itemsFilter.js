import React, { Component } from 'react';
import './itemsFilter.css';

class ItemsFilter extends Component {

    filterUpdate() {
        const val = this.myValue.value
        this.props.filterUpdate(val)
    }

    render() {
        return (
            <div id='itemsFilter'>
                <input 
                    type='text'
                    ref={ (value) => this.myValue = value}
                    placeholder='Filter snowboards by Name or Brand'
                    onChange={this.filterUpdate.bind(this)}
                    />
            </div>
        )
    }
}

export default ItemsFilter;