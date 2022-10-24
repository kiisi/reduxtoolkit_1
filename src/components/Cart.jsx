import productList from '../data/productList.json'
import '../styles/cart.scss'
import {useSelector, useDispatch} from 'react-redux';
import cardSlice from '../store/cardSlice';

const Cart = () => {
    const {cartProductIds} = useSelector((state)=> state.cart)
    const dispatch = useDispatch()
    const cartProductData = productList.products.filter(product => cartProductIds.includes(product.id))
    const {removeFromCart, clearAllItems} = cardSlice.actions
    
  return (
    <div className="cart">
      {
        cartProductIds.length > 0 
        ?
        <div className="cart-product">
        <h3 className="header">Items in cart</h3>
        {cartProductData.map((product) => (
          <div key={product.id} className="row">
            <img className="item-image" src={product.imageUrl} alt="product" />

            <div className="item-info">
              <h4>{product.name}</h4>
              <p className="text-truncate">{product.detail}</p>
              <button className="btn btn-primary" onClick={()=> dispatch(removeFromCart(product.id))}>
                <i className="bi bi-trash-fill" /> Remove Item
              </button>
            </div>
          </div>
        ))}
        
        <footer className="text-center">
          <button className="btn btn-primary" onClick={()=> dispatch(clearAllItems())}>CHECKOUT</button>
        </footer>
      </div>
      :

      <div className="text-center empty-cart">
        <i className="bi bi-cart3" />
        <p>Your cart is empty.</p>
        <p>You have not added any item to your cart.</p>
      </div>
}
    </div>
  )
}

export default Cart
