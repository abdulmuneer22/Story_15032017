import React, { Component } from 'react';


const Style = {
         
    
}

import DisplayFilter from './DisplayFilter'
import PageSwitch from './PageSwitch'






class Pagination extends Component{

    render(){
        return(
            <div style={{
                display : 'flex',
                flexDirection : 'row',
                marginBottom : 12,
                zIndex : 1000
            }}>
                <div style={{
                    flex : 1
                }}>
                <DisplayFilter/>

                </div>


                <div
                style={{
                    flex : 1,
                    justifyContent : 'flex-end',
                    alignItems : 'center',
                    display : 'flex'
                    //alignSelf : 'flex-end'
                }}
                >
                <PageSwitch/>
                </div>
            </div>
        );
    }
}



export default Pagination