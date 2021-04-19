import React, { useContext }from 'react'
import { ProductContext } from '../context/ProductContext';


const Cart = () => {
    const { cartItems } = useContext(ProductContext)


    console.log(cartItems)

    
        return (
            <div>
                <h3>Hello from Cart</h3>

                {
                    cartItems.map((cart) => {
                        const { title, img, price} = cart
                        return (
                            <ul key={cart.id}>
                                <li>{title }</li>
                                <li>{img }</li>
                                <li>{ price}</li>
                            </ul>
                        )
                    })
                }

            </div>
        )
}
export default Cart
