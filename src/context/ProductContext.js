import React, { Component } from 'react'
import Product from '../components/Product'
import {detailProduct, storeProducts} from '../../src/data';

const  ProductContext = React.createContext()

// Provider -is set on top the of our application,provides data 
// Consumer - grabs data

// Product Provider
class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct:detailProduct
    }
    componentDidMount = () => {
        this.setProducts();
    }
    setProducts = () =>{
        let temmProducts =[]
        storeProducts.forEach(item => {
        const singleItem ={...item};
        temmProducts = [...temmProducts,singleItem]
        })
        this.setState (() =>{
            return { products : temmProducts};
        })
    }
    findProductId = (id) =>{
        const product = this.state.products.find( item => item.id === id);
        return product
    }
    handeleDetail = (id) =>{
        const product =this.findProductId(id);
        this.setState(()=>{
            return {detailProduct : product}
        })
    }
    addToCart= (id) =>{
        let tempProduct
    }
    render() {
        return (
            // return provider
            <ProductContext.Provider value={
                { 
                ...this.state,
                handeleDetail:this.handeleDetail,
                addToCart:this.addToCart
                }
            }>
                {/* return all the children that is going to be in our application  */}
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

// Product Consumer
const ProductConsumer = ProductContext.Consumer

export {ProductProvider,ProductConsumer};