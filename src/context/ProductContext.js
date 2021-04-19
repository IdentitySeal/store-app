import React, { useEffect,useState } from 'react'
import {detailedProduct, storeProducts} from '../../src/data';

const  ProductContext = React.createContext()

// Provider -is set on top the of our application,provides data 
// Consumer - grabs data

// Product Provider

const ProductProvider = ({children}) => {
    const [products,setProducts] = useState ([])
    const [detailProduct, setDetailProduct] = useState(detailedProduct)
    const[cartItems,setCartItems] =useState([])
    
    useEffect(() => {
        setProduct()
    },[]) 
        
    const setProduct = () => {
        let temmProducts = []
        storeProducts.forEach(item => {
            const singleItem = { ...item };
            temmProducts = [...temmProducts, singleItem]
        })
        setProducts(temmProducts)

        
    }
    const findProductId = (id) => {
        const product = products.find(item => item.id === id);
        return product
    }
    const handeleDetail = (id) => {
        const product = findProductId(id);
            return setDetailProduct(product)
       
    }
    const addToCart = id => {
        let tempProducts = products;
        const index = tempProducts.indexOf(findProductId(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;

        setProducts(tempProducts)


        // cartItems.push(product)

        cartItems[cartItems.length] = product
        // this works

        setDetailProduct(product)
        console.log(cartItems)


    };
    
        return (
            // return provider
            <ProductContext.Provider value={{
                products,
                handeleDetail,
                addToCart,
                detailProduct,
                cartItems
            }}>
                {/* return all the children that is going to be in our application  */}
                {children}
            </ProductContext.Provider>
        )
}

// Product Consumer
export { ProductProvider, ProductContext };


    
    















    
