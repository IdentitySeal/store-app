import React, { useEffect,useState } from 'react'
import {detailedProduct, storeProducts} from '../../src/data';

const  ProductContext = React.createContext()

// Provider -is set on top the of our application,provides data 
// Consumer - grabs data

// Product Provider

const ProductProvider = ({children}) => {
    const [products,setProducts] = useState ([])
    const [detailProduct, setDetailProduct] = useState(detailedProduct)
    const [cartItems, setCartItems] = useState([])
    const [total, setTotal] = useState()
    const [tax, setTax] = useState()
    const [subtotal, setSubTotal] = useState()
    const [color,setColor] = useState()

    
    const [favorite,setFavorite] = useState([])
    
    useEffect(() => {
        setProduct()
    }, [])
        
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
        let tempProducts = [...products];
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

        totalCostOfCartItems()

    };



    const addToFavorite = (id) => {
        let tempCartItems = [...cartItems]
        const index = tempCartItems.indexOf(findCartItemId(id))
        console.log(index)
        // selecting the product gon gon 
        const product = tempCartItems[index]

        if (product.favorite === false) {
            product.favorite = true
            favorite[favorite.length] = product
            console.log(favorite)
            setColor("text-danger")
        }
        else {
            product.favorite = false

            const removeFavorite = favorite.filter(item => item.id !== id)
            
            console.log(removeFavorite)
            setFavorite(removeFavorite)
            setColor("text-muted")
            
        }

    }

    const findCartItemId = (id) => {
        const cartItem = cartItems.find(item => item.id === id);
        return cartItem
    }


    const cartIncrement = (id) => {
        let tempCartItems = [...cartItems]
        // const selectedItem = tempCartItems.find(item => item.id === id)
        const index = tempCartItems.indexOf(findCartItemId(id))
        // selecting the product gon gon 
        const product = tempCartItems[index]
        product.count = product.count + 1;
        product.total = product.price * product.count;

        setCartItems(tempCartItems)
        totalCostOfCartItems()

    }
    const cartDecrement = (id) => {
        let tempCartItems = [...cartItems]
        // const selectedItem = tempCartItems.find(item => item.id === id)
        const index = tempCartItems.indexOf(findCartItemId(id))
        // selecting the product gon gon
        const product = tempCartItems[index]
        product.count = product.count - 1;

        if (product.count === 0) {
            removeCartItem(id)
        }
        else {
            product.total = product.price * product.count
            setCartItems(tempCartItems)
        }
        totalCostOfCartItems()

    }

    const removeCartItem = (id) => {
        let tempProducts = [...products];

        let tempCartItems = [...cartItems]

        const index = tempProducts.indexOf(findProductId(id))
        console.log(index)
        // selecting the product gon gon 
        let productToBeRemoved = tempProducts[index]
        productToBeRemoved.inCart = false;
        productToBeRemoved.count = 0;
        productToBeRemoved.total = productToBeRemoved.price * productToBeRemoved.count;

        tempCartItems = tempCartItems.filter(item => {
            return item.id !== id;
        });

        setCartItems([...tempCartItems])
        // console.log(cartItems)
        setProduct([...tempProducts])

    }

    const totalCostOfCartItems = () => {
        let arr = []

        const cart = cartItems.map(cartItem => {
            // let totalForCart
            return (cartItem.total)
        })

        arr.push(cart)

       const  subtotal = arr[0].reduce((acc, curr) => {
            acc = acc + curr;
            return acc

       })
        
        console.log(subtotal)



        const tax = parseFloat((0.1 * subtotal).toFixed(2))
        // console.log(tax.toFixed(2) + "tax")



        const total = subtotal + tax

        setTotal(total)

        setSubTotal(subtotal)
        setTax(tax)

        console.log(subtotal , tax)




    }





    
        return (
            // return provider
            <ProductContext.Provider value={{
                products,
                handeleDetail,
                addToCart,
                detailProduct,
                cartItems,
                cartIncrement,
                cartDecrement,
                removeCartItem,
                addToFavorite,
                total,
                tax,
                subtotal
                ,color
            }}>
                {/* return all the children that is going to be in our application  */}
                {children}
            </ProductContext.Provider>
        )
}

// Product Consumer
export { ProductProvider, ProductContext };


    
    















    
