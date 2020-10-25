import React, { Component } from 'react'
import {ProductConsumer} from '../context/ProductContext'
import {Button} from "../components/Button"
import {Link} from 'react-router-dom'

export default class Details extends Component {
    render() {
        

        return (
            <div>
                <ProductConsumer>
                    {(value) => {
                        const {id,title,img,price,inCart,company,info} = value.detailProduct;
                        return(
                            <div className ="container py-5">
                            <div className = 'row'>
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* product info */}
                            <div className= "row">
                            <div className = "col-10 mx-auto col-md-6 my-3">
                            <img src ={img} className="img-fluid"/>
                            </div>
                            <div className = "col-10 mx-auto col-md-6 my-3 text-capitalize">
                            <h1>model: {title}</h1>
                            <h4 className="text-title text-uppercase text-muted"> 
                            made by: <span className="text-uppercase">{company}</span></h4>
                            <h4 className="text-blue "> 
                               <strong> price : <span>$</span>{price} </strong>
                            </h4>
                            <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                Some info about the product:
                            </p>
                            <p className="text-muted lead">
                                {info}
                            </p>
                            <div>
                            <Link to="/">
                                <Button> Back To Products</Button>
                                </Link>

                                <Button cartProp disabled = {inCart ? true: false} onClick = {()=>{
                                    // console.log(id);
                                  {value.addToCart(id)}  
                                }}>
                                {inCart ? "in Cart" : "Add To Cart" }
                                </Button>

                            </div>
                            </div>
                                
                            </div>
                            </div>
                        )
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
