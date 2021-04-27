import React, { useContext }from 'react'
import { ProductContext } from '../context/ProductContext';
import styled from 'styled-components';



const Cart = () => {
    const { cartItems, cartIncrement, cartDecrement, removeCartItem, addToFavorite, tax, subtotal, total, color, setColor } = useContext(ProductContext)
    

    
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
                                const { id, title, img, price, count, total, favorite } = cart
                                


                                return (
                                    <div key={cart.id} className="card mb-3">
                                        <SpaceEvenly className=" row g-0" >
                                            <SpaceEvenly className="" >
                                                <ImgContainer className="p-3 img-fluid" src={img} alt={img} />
                                                <div>
                                                    <h6 className=" p-3">{title}</h6>

                                                    <BaseLineDiv className="mt-5 p-3">
                                                        <ColorRed type="button" onClick={() => removeCartItem(id)} className="mr-3"><i class="fa fa-trash-o fa-2x text-danger" aria-hidden="true"></i></ColorRed>
                                                        <FavSpan onClick={() => addToFavorite(id)} >

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
                        <div>
                            <hr></hr>
                            <h2>Subtotal : {subtotal}</h2>
                            <h3>Tax : {tax}%</h3>
                            <h1>Total : {total}</h1>
                        </div>
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
    align-items: baseline;
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
    // <div className="card mb-3">
    // <div div className = "row g-0" >
    //                         <div className="col-md-4">
    //                             <img src="" alt="" />

    //                         </div>
    //                         <div className="col-md-8">
    //                             <div className="card-body">
    //                                 <h5 className="card-title">Card title</h5>
    //                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    //                                 <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    //                             </div>
    //                         </div>
    //                     </div >
    //                 </div >




// {
//     cartItems.map((cart) => {
//         const { title, img, price } = cart
//         return (
//             <ul key={cart.id}>
//                 <li>{title}</li>
//                 <li>{img}</li>
//                 <li>{price}</li>
//             </ul>
//         )
//     })
// }