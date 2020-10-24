import React, { Component } from 'react';
import styled from 'styled-components';
import {Link } from "react-router-dom";
// import { ProductConsumer } from '../context/ProductContext';
import PropTypes from 'prop-types'

 
export default class Product extends Component {
    render() {
        const {id,title,img,price,inCart} = this.props.product
        return (
            <ProductContainer className= "col-9 mx-auto col-md-6  col-lg-3">
               <div className = "card mb-5">
                   <div className = "img-container p-5" onClick= {()=>{console.log('image clicked')}}>
                        <Link to ="/details">
                            <img src={img} alt="Product" className ="card-img-top"/>
                        </Link>
                        <button className="cart-btn" disabled = {inCart ? true : false} onClick = {()=>{console.log('added to cart')}}>
                        {inCart ? <p className = "text-capitalize mb-0 "> inCart </p> :
                        <i className ="fa fa-cart-plus" ></i>}
                        </button>
                    </div>
                   {/* card-footer */}
                    <div className="card-footer d-flex justify-content-between">
                        <p className = "align-self-center mb-0">
                            {title}
                        </p>
                        <h5 className ="text-blue font-intalic mb-0">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
               </div>
            </ProductContainer>
        
        )
    }
}
Product.propTypes = {
    product:PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
    }).isRequired
}
const ProductContainer = styled.div`
.card{
    border-color:transparent;
    transition:all 1s linear;
}
.card-footer{
    background-color:transparent;
    border-top: transparent;
    transition:all 1s linear;
}
&:hover{
    .card{
        border: .04 rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247)
    }
}
.img-container{
    position:relative;
    overflow:hidden;
}
.card-img-top{
    transition:all 1s linear;
}
&:hover .card-img-top{
    transform:scale(1.2)
}
.cart-btn{
    position:absolute;
    bottom: 0;
    right:0;
    padding:.4 rem,.3rem;
    background-color : var(--lightBlue);
    border:none;
    color: var(--mainWhite);
    font-size:1.4rem;
    border-radius:.2rem 0 0 0;
    outline:none;
    transform:translate(100%,100%);
    transition:all 1s linear;

}
.img-container:hover .cart-btn{
    transform:translate(0,0);
}
.cart-btn:hover{
    color:var(--mainWhite);
    background-color:var(--mainBlue);
    cursor:pointer;
}
`
