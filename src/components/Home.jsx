
import '../styles/home.scss'
import { useDispatch, useSelector } from 'react-redux'
import {fetchAllProducts} from '../store/productSlice'
import cardSlice from '../store/cardSlice'
import { useEffect } from 'react'

const Home = () => {

  const { addToCart, removeFromCart } = cardSlice.actions
  const dispatch = useDispatch()
  const {cart, products}  = useSelector((state) => state)
  
  useEffect(()=>{
    dispatch(fetchAllProducts('http://localhost:4000/products'))
  }, [dispatch])

  return (
    <div className="container product-catalogue">
      <div className="row">
        {products.data.map((product) => {
          return (
            <div className="wrapper col-md-4" key={product.id}>
              <div className="card">
                <img className="card-img-top center-block" src={product.imageUrl} alt="Card cap" />

                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">${product.price}</p>
                  {
                    cart.cartProductIds.includes(product.id)
                      ?
                      <button className="btn btn-primary" onClick={() => dispatch(removeFromCart(product.id))}>Remove from cart</button>
                      :
                      <button className="btn btn-primary" onClick={() => dispatch(addToCart(product.id))}>Add to cart</button>
                  }
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
