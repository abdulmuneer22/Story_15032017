import React, { Component } from 'react';

import SingleRow from './SingleRow'

var Data = require('./TableData')

import Pagination from './Pagination'

import { connect } from 'react-redux'

class Table extends Component {

    constructor() {
        super();
        this.state = {
            itemsPerPage: 10
        }
    }

    renderSingleRow(){

    }

    componentWillReceiveProps(next) {
        if(next.ItemsPerPage.value !== this.props.ItemsPerPage.value){
            var limit = next.ItemsPerPage.value
            limit = parseInt(limit)
            this.setState({
            ItemsPerPage : 15
        })
        this.forceUpdate((err)=>{
            if(err){
                alert(err)
            }
        })
        }
        
        
        // console.log(typeof next.ItemsPerPage.value)
    }

    render() {
        console.log(this.state.itemsPerPage)
        return (
            <div style={{
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 30
            }}>

                <Pagination />

                {
                    Data.TableData.map((item, i) => {
                        if (i < this.state.itemsPerPage){
                            return (
                                <SingleRow key={i} Data={item} id={i} />
                            )
                        }
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        ItemsPerPage: state.PaginationCount
    }
}

export default connect(mapStateToProps, null)(Table)
