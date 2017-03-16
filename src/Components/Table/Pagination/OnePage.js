import React, { Component } from 'react';



class OnePage extends Component{

    constructor(){
        super();
        this.state = {
            isActive : false
        }
    }

    render(){
        return(
            <div style={{
                paddingLeft : 15,
                paddingRight : 15,
                color : this.state.isActive ? "white" : 'rgba(5, 125, 214,1)',
                paddingTop : 5,
                height : 25,
                borderWidth : 1,
                backgroundColor : this.state.isActive ? 'rgba(5, 125, 214,1)' : "white",
                borderStyle : 'solid',
                borderColor : 'rgba(198, 202, 205,0.7)',
                borderTopLeftRadius : this.props.pagenumber === "<<" ? 10 :  null,
                borderBottomLeftRadius : this.props.pagenumber === "<<" ? 10 : null,
                borderTopRightRadius : this.props.pagenumber === ">>" ? 10 : null,
                borderBottomRightRadius : this.props.pagenumber === ">>" ? 10 : null,
                cursor : 'pointer'
            }}
            onClick={()=>{this.setState({isActive : !this.state.isActive})}}
            >
                {this.props.pagenumber}
            </div>
        );
    }
}



export default OnePage