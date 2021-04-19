import React, { useContext } from 'react'
import Product from "./Product"
// import {storeProducts} from '../../src/data';
import { ProductContext} from '../context/ProductContext'
import Title from '../components/Title'

const ProductList = () => {
    const { products } = useContext(ProductContext)
    return (

            // <Product />
            <React.Fragment>
                <div className="py-5 container">
                    <Title name="Our" title="Products" />
                    <div className="row">
                            {  products.map(product => {
                                    return (<Product key={product.id} product={product} />)
                                })
                            }
                    </div>

                </div>
            </React.Fragment>

        )

}
export default ProductList























// export default class ProductList extends Component {
//     // state ={
//     //     products: storeProducts
//     // }
//     render() {
//         // console.log(this.state.products)
//         return (
            
//                 // <Product />
//             <React.Fragment>
//                 <div className ="py-5 container">
//                 <Title name="Our" title="Products"/>
//                     <div className ="row">
//                     <ProductConsumer>
//                         {(data)=>{
//                             return (data.products.map(product => {
//                                 return(<Product key={product.id} product={product}/>)
//                             }))    
//                         }}
//                     </ProductConsumer>
//                     </div>

//                 </div>
//             </React.Fragment>

//                 )
//     }
// }
