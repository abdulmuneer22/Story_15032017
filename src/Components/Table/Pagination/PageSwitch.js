import React, { Component } from 'react';
const PaginationItems = [
    "<<",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ">>"
]

import OnePage from './OnePage'
import DisplayFilter from './DisplayFilter'

class PageSwitch extends Component{

    render(){
        return(
            <div style={{
                flexDirection : 'row',
                display : 'flex',
                //padding : 10
            }}>
                {
                    PaginationItems.map((item)=>{
                        return(
                            <OnePage pagenumber={item}/>
                        )
                    })
                }
            </div>
        );
    }
}



export default PageSwitch