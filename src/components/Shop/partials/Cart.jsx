import React from 'react'
import MultistepCount from '../../../utilities/MultistepCount'
import product from '../../../assets/imgs/products_img.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleCartStatus, handleRemoveCart, onHandleAddCart, onHandleRemoveCart } from '../../../redux/products/produtsSlice';

function Cart() {

    const { cartItem} = useSelector((state) => state.products);
    const dispatch = useDispatch();

    const onAddItem = (item) => {
        dispatch(onHandleAddCart(item));
    }

    const onRemoveItem = (item) => {
        dispatch(onHandleRemoveCart(item));
    }
    const navigate = useNavigate();

    const onCheckout = () => {
        dispatch(handleCartStatus()).then((res) => {
            navigate('/shop/cart/Checkout');
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <section className='container mb-5 pb-md-5'>
            <div className="text-center">
                <h3 className='display-5 head_font'>Cart</h3>
                <p className='mb-4'>1 item</p>

                <MultistepCount />
                <div className='row '>
                    {cartItem.length !== 0 ? cartItem.map((data) => {
                        return (
                            <>
                                <div className="col-md-6 text-start d-flex border-end border-dark border-2" key={data.id}>
                                    <div className=''>
                                        <img src={data.img} className='img-fluid' style={{ maxWidth: "190px" }} />
                                    </div>
                                    <div className='ms-4'>
                                        <div className='d-flex'>
                                            <h5 className='mb-3 fw-bold'>{data.title} <span className='ms-4'>₹{data.price}</span></h5>
                                        </div>
                                        <p className='mb-4'>{data.author}</p>

                                        <div className='d-flex justify-content-between align-items-center border border-2 border-black mb-5' style={{ maxWidth: '120px' }}>
                                            <button className="btn fs-5 fw-bold" onClick={() => onRemoveItem(data)}>-</button>
                                            <span className='fs-5 fw-bold'>{data.cartQuantity}</span>
                                            <button className="btn fs-5 fw-bold" onClick={() => onAddItem(data)}>+</button>
                                        </div>

                                        <div className='d-flex align-items-center mb-3'>
                                            <Link to='/' className="text-dark fw-bold fs-5 text-black">Edit</Link>
                                            <button
                                                className="btn text-dark fw-bold fs-5 ms-4 text-black text-decoration-underline"
                                                onClick={() => dispatch(handleRemoveCart()) }
                                                >
                                                Remove
                                            </button>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input border border-dark" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Add Authentication Document
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h5 className='text-center'>SUMMARY</h5>

                                    <div className='row'>
                                        <div className="col-md-4 offset-5 text-start mb-md-4">
                                            <p className='mb-3 text-black'>Subtotal</p>
                                            <p className='mb-3 text-black'>Shipping & Taxes:
                                                Calculated at the checkout</p>
                                            <p className='mb-0 text-black fw-bold'>Total</p>
                                        </div>
                                        <div className="col-md-3 d-flex flex-column justify-content-between mb-md-4">
                                            <p className='text-black'>₹{data.totalPrice}</p>
                                            <p className='text-black mb-0 fw-bold'>₹{data.totalPrice}</p>
                                        </div>
                                        <div className='col-md-7 offset-5 text-center'>
                                            <button className='btn btn-dark w-100 py-3 rounded-pill fs-5 text-uppercase' onClick={onCheckout}>CHECKOUT</button>

                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }) : (
                        <div className='card p-4'>
                            <div className='text-center fs-4 text-black'>No item Add to Cart</div>
                        </div>
                    )}

                </div>
            </div>
        </section >
    )
}

export default Cart