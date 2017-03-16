import React, { Component } from 'react';

import SingleRow from './SingleRow'

var Data = require('./TableData')

import Pagination from './Pagination'

class Table extends Component {
    render() {
        // console.log(Data)
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
                        return (
                            <SingleRow key={i} Data={item} id={i} />
                        )
                    })
                }
            </div>
        );
    }
}

export default Table