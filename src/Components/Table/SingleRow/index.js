import React, { Component } from 'react';


const Style = {
    Column: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingRight: 10,
        paddingLeft: 10,
        //flex : 2,
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '18%',
        flexDirection: 'row',
        display: 'flex',
        textAlign: 'center',
        //marginTop : 10
    }

}

import * as actions from '../../../redux/actions'
import { connect } from 'react-redux'

class SingleRow extends Component {
    constructor() {
        super();
        this.state = {
            isChecked: false
        }

    }


    render() {
        const { url_name, downloadable, content, modified_on, modified_by , header } = this.props.Data
        return (
            <div style={{
                display: 'flex',

                zIndex: -1,
                flexDirection: 'row',
                backgroundColor: this.state.isChecked ? 'rgba(227, 230, 231,1)' : null,
                fontWeight: this.props.id === 0 ? "600" : "300",
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: 'rgb(218, 223, 227)',
                borderTopColor: 'rgb(218, 223, 227)',
                borderWidth: 1,
                borderTopStyle: 'solid',
                borderBottomStyle: 'solid'
            }}>

                <div style={{
                    marginTop: 'auto',
                    marginBottom: 'auto',
                    cursor: 'pointer'
                    //alignContent : 'center'
                }}
                    onClick={() => {
                        this.props.SelectRow(url_name, !this.state.isChecked)
                        this.setState({
                            isChecked: !this.state.isChecked
                        })
                    }}
                >

                    {
                        !this.state.isChecked ?
                            <i
                                className="material-icons"
                                style={{
                                    color: 'rgba(171, 177, 183,0.9)',
                                    fontSize: 18,
                                    marginRight: 10
                                }}
                            >check_box_outline_blank</i>
                            :
                            <i
                                className="material-icons"
                                style={{
                                    color: 'rgba(171, 177, 183,0.9)',
                                    fontSize: 18,
                                    marginRight: 10
                                }}
                            >check_box</i>
                    }




                </div>

                <div style={Style.Column}>{url_name}</div>

                <div style={Style.Column}>{downloadable}</div>

                <div style={Style.Column}>{content}</div>

                <div style={Style.Column}>

                    {modified_on}
                    {
                        header ?
                        <div style={{
                        marginLeft : 10
                        }}>
                        <i className="fa fa-long-arrow-up" aria-hidden="true" style={{
                            marginRight : 5,
                            cursor : 'pointer'
                        }}></i>
                        <i className="fa fa-long-arrow-down" aria-hidden="true"
                        style={{
                            marginLeft : 5,
                            cursor : 'pointer'
                        }}
                        ></i>
                        </div>
                        :
                        null
                    }
                    
                </div>


                <div style={Style.Column}>
                    {modified_by}
                    {
                        header ?
                        <div style={{
                        marginLeft : 10
                        }}>
                        <i className="fa fa-long-arrow-up" aria-hidden="true" style={{
                            marginRight : 5,
                            cursor : 'pointer'
                        }}></i>
                        <i className="fa fa-long-arrow-down" aria-hidden="true"
                        style={{
                            marginLeft : 5,
                            cursor : 'pointer'
                        }}
                        ></i>
                        </div>
                        :
                        null
                    }
                    </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

export default connect(mapStateToProps, actions)(SingleRow)

