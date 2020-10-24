import React, { Component } from 'react'
import Product from "./Product"
// import {storeProducts} from '../../src/data';
import {ProductConsumer} from '../context/ProductContext'
import Title from '../components/Title'

export default class ProductList extends Component {
    // state ={
    //     products: storeProducts
    // }
    render() {
        // console.log(this.state.products)
        return (
            
                // <Product />
            <React.Fragment>
                <div className ="py-5 container">
                <Title name="Our" title="Products"/>
                    <div className ="row">
                    <ProductConsumer>
                        {(data)=>{
                            return (data.products.map(product => {
                                return(<Product key={product.id} product={product}/>)
                            }))    
                        }}
                    </ProductConsumer>
                    </div>

                </div>
            </React.Fragment>

                )
    }
}
