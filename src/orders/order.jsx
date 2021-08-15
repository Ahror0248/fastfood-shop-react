import React, { Component } from 'react'
import './order.css'
import {data} from '../mock'

export default class order extends Component {
    constructor(props){
        super(props)
        this.state = {
            lists: data,
        }
    }
    render() {
        return (
            <div className='order-con'>
                <h1>Selected orders list</h1>
                
                    <div className='selected-list'>
                        {this.props?.selected?.map((value)=>(
                        <div >  
                            <h1>{value.title}</h1>
                            <h3>{value.price}</h3>
                            <button onClick={()=>this.props.onDelete(value.id)}>delete</button>
                        </div>  
                        ))}
                    </div>
                <div className='total'>
                    
                    <h1>Total: {this.props.total} sum</h1>
                    
                </div>
            </div>
        )
    }
}
