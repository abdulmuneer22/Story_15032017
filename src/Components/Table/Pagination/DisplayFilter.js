import React, { Component } from 'react';

const Style = {


}

class DisplayFilter extends Component {

    render() {
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row'
            }}>
                <div>
                    Display
                </div>

                <div style={{
                    borderWidth : 1,
                    borderStyle : 'solid',
                    paddingLeft : 20,
                    paddingRight : 20,
                    borderRadius : 6,
                    marginRight : 10,
                    marginLeft : 10,
                    justifyContent : 'center',
                    display: 'flex',
                    paddingTop : 5
                }}> 
                    <div>25</div>
                    <i className="material-icons" style={{paddingTop : '0 !impotant'}}>arrow_drop_down</i>
                </div>
                
                <div>items per page</div>

            </div>
        );
    }
}



export default DisplayFilter