import React, { Component } from 'react';

import * as actions from '../../../redux/actions'
import {connect}  from 'react-redux'

class DisplayFilter extends Component {

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems : 'center'
            }}>
                <div>
                    Display
                </div>

                <div>
                    <select onChange={(event)=>{
                        this.props.DisplayCountFilter(event.target.value)
                        console.log(event.target.value)

                        }}>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>

                <div>items per page</div>

                

            </div>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}
export default connect(mapStateToProps, actions)(DisplayFilter)

