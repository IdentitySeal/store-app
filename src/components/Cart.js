import React, { useContext }from 'react'
import { ProductContext } from '../context/ProductContext';

import firebase, { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import SignIn from '../components/GoogleLogin'


import PaypalPayment from '../components/PaypalPayment'
import styled from 'styled-components';



const Cart = () => {
    const { cartItems, cartIncrement, cartDecrement, removeCartItem, addToFavorite, tax, subtotal, total,setFavorite, favButtonColor } = useContext(ProductContext)
          
    const [user] = useAuthState(auth)


    return (
    <>
        {
            cartItems.length === 0 ?
                <HeadingStyle> Shopping Cart Empty </HeadingStyle>
                :
                    <div className="container mt-4" >
                        <HeadingStyle>Shopping cart</HeadingStyle>
                        {
                            cartItems.map((cart) => {
                                const { id, title, img, price, count, total,favorite } = cart



                                console.log(id)
                                console.log(favorite)


                                return (
                                    <div key={cart.id} className="card mb-3">
                                        <SpaceEvenly className=" row g-0" >
                                            <SpaceEvenly className="" >
                                                <ImgContainer className="p-3 img-fluid" src={img} alt={img} />
                                                <div>
                                                    <h6 className=" p-3">{title}</h6>

                                                    <BaseLineDiv className="mt-5 p-3">
                                                        <ColorRed type="button" onClick={() => removeCartItem(id)} className="mr-3"><i class="fa fa-trash-o fa-2x text-danger" aria-hidden="true"></i></ColorRed>
                                                        <FavSpan className={favButtonColor} onClick={() => addToFavorite(id)} >

                                                            <i className="fa fa-heart-o fa-2x " aria-hidden="true"></i>
                                                            
                                                              
                                                        </FavSpan>
                                                    </BaseLineDiv>

                                                </ div>

                                            </SpaceEvenly>
                                            <div className=" ml-3">
                                                <div className="card-body">
                                                    {/* <h5 className="card-title">{ title}</h5> */}
                                                    <div className="mb-0 btn-group" role="group">
                                                        <IncrementButton onClick={() => cartDecrement(id)} className="">-</IncrementButton>
                                                        <input className="form-control w-25" type="number" value={count} />
                                                        <IncrementButton onClick={() => cartIncrement(id)} className="">+</IncrementButton>
                                                    </div>
                                                    <p className="text-muted pt-4">Price : ${price}</p>

                                                    <p className="text-muted pt-4">Item Total : ${total}</p>
                                                </div>
                                            </div>
                                        </SpaceEvenly >
                                    </div >
                                )
                            })
                        }
                        <FlexEnd className ="card p-5">
                            {/* <hr></hr> */}
                            <div>
                            <h2>Subtotal : ${subtotal}</h2>
                            <h3>Tax : {tax}%</h3>
                            <h1>Total : ${total}</h1>
                            
                                
                                {user ? <PaypalPayment
                                    total={total} /> : <SignIn /> }


                            </div>
                        </FlexEnd>
                    </div>
        }
  </>
                
        )
}
export default Cart




const ImgContainer = styled.img`
width : 200px;
height:200px
`

const SpaceEvenly = styled.div
    `
    display:flex;
    justify-content:space-between;

    @media (max-width:990px) {
    background:red;
  }

    
    `
const IncrementButton = styled.button
    `
    border: 1px solid #ced4da;
    border-radius: .25rem;
    width:30px;
    outline:none;
    `

const BaseLineDiv = styled.div
    `
    display: flex;
    flex-wrap: wrap;
    `
const HeadingStyle = styled.h1
    `
    text-align:center;
    `

const ColorRed = styled.a`
    color:red

`

const FavSpan = styled.span`
color: ${props => (props.primary ? "red" : "grey")};
`
const FlexEnd = styled.div`
display: flex;
flex-direction: row-reverse;


`

