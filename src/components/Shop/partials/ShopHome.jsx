import React, { useEffect, useRef, useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import product from '../../../assets/imgs/products_img.png';
import './shop.css'
import {useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleAddCart, onHandleAddCart, onHandleRemoveCart, onRemoveCart } from '../../../redux/products/produtsSlice';

const productDetails = {
    id:1,
    title: 'The Chronicles of Narnia',
    type: 'Paperback',
    author: 'C S Lewis',
    seller: 'Paper Hill Publication',
    isbn: '978-006264150',
    price: '899.00',
    realprice: '2599.00',
    offpercentage: '35%',
    category: 'Best Seller Books, Fiction',
    img:product
}

function ShopHome() {
    const [itemCount, setItemCount] = useState(1);

    const mainSlider = useRef(null);
    const thumbnailSlider = useRef(null);

    const {cartItem} = useSelector((state) => state.products);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onAddItem = () => {
        dispatch(onHandleAddCart(productDetails));
        setItemCount(prev => prev + 1);
    }

    const onRemoveItem = () => {
        dispatch(onHandleRemoveCart(productDetails));
        setItemCount(prev => (prev > 0 ? prev - 1 : 0));
    }
    const onMoveToCart = () => {
        dispatch(handleAddCart(productDetails)).then((res) => {
            navigate('cart');
        })
        .catch((error) => {
           console.log(error);
        });
        
    }

    const handleThumbnailClick = (index) => {
        if (mainSlider.current) {
            mainSlider.current.go(index);
        }
    };

    useEffect(() => {
        if (mainSlider.current && thumbnailSlider.current) {
            mainSlider.current.sync(thumbnailSlider.current.splide);
        }
    }, [mainSlider, thumbnailSlider]);

    useEffect(() => {
        if(cartItem.length !== 0){
            dispatch(onRemoveCart());
        }
    },[]);

    return (
        <>
            <section className='container py-4'>
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <Splide
                            id="main-slider"
                            options={{
                                type: 'fade',
                                heightRatio: 0.8,
                                pagination: false,
                                arrows: false,
                                cover: false,
                            }}
                            ref={mainSlider}
                        >
                            <SplideSlide>
                                <img src={productDetails.img} alt="Image 1" width='300px' />
                            </SplideSlide>
                            <SplideSlide >
                                <img src={productDetails.img} alt="Image 2" width='300px' />
                            </SplideSlide>
                            <SplideSlide >
                                <img src={productDetails.img} alt="Image 3" width='300px' />
                            </SplideSlide>
                        </Splide>

                        <Splide
                            id="thumbnail-slider"
                            options={{
                                rewind: true,
                                fixedWidth: 100,
                                fixedHeight: 150,
                                isNavigation: true,
                                arrows: false,
                                gap: 10,
                                focus: 'center',
                                pagination: false,
                                cover: true,
                                dragMinThreshold: {
                                    mouse: 4,
                                    touch: 10,
                                },
                                breakpoints: {
                                    640: {
                                        fixedWidth: 66,
                                        fixedHeight: 38,
                                    },
                                },
                            }}
                            ref={thumbnailSlider}
                        >
                            <SplideSlide onClick={() => handleThumbnailClick(0)}>
                                <img src={productDetails.img} alt="Thumbnail 1" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </SplideSlide>
                            <SplideSlide onClick={() => handleThumbnailClick(1)}>
                                <img src={productDetails.img} alt="Thumbnail 2" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </SplideSlide>
                            <SplideSlide onClick={() => handleThumbnailClick(2)}>
                                <img src={productDetails.img} alt="Thumbnail 3" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                            </SplideSlide>
                        </Splide>
                    </div>
                    <div className="col-md-5">
                        <h4 className='mb-4'>{productDetails.title} by {productDetails.author} {productDetails.type}</h4>

                        <div className='row mb-3'>
                            <div className="col-md-2 text-black fw-semibold">Author:</div>
                            <div className="col-md-2 text-black">{productDetails.author}</div>
                        </div>
                        <div className='row mb-3'>
                            <div className="col-md-2 text-black fw-semibold">Seller:</div>
                            <div className="col-md-5 text-black">{productDetails.seller}</div>
                        </div>
                        <div className='row mb-3'>
                            <div className="col-md-2 text-black fw-semibold">ISBN:</div>
                            <div className="col-md-5 text-black">{productDetails.isbn}</div>
                        </div>

                        <div className='mb-3'>
                            <button className="btn btn-success">In Stock</button>
                        </div>
                        <div className="mb-3">
                            <p className='fs-5 fw-semibold'><span className='text-danger text-decoration-line-through me-2'>INR {productDetails.realprice}</span> INR {productDetails.price} <span className='text-danger text-decoration-line-through ms-2'>{productDetails.offpercentage} Off</span></p>
                        </div>

                        <p className='fs-6'><b>Category: </b>{productDetails.category}</p>
                        <div className='d-flex justify-content-between align-items-center border border-2 border-black mb-3' style={{ maxWidth: '120px' }}>
                            <button className="btn fs-5 fw-bold" onClick={onRemoveItem}>-</button>
                            <span className='fs-5 fw-bold'>{itemCount}</span>
                            <button className="btn fs-5 fw-bold" onClick={onAddItem}>+</button>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <button className='btn btn_secondary fs-5 w-100 py-2 rounded-3' onClick={onMoveToCart}><i className="bi bi-cart-plus-fill pe-2"></i> Add to cart</button>
                            </div>
                            <div className="col-md-6">
                                <button className='btn btn_secondary fs-5 w-100 py-2 rounded-3'><i className="bi bi-heart pe-2"></i> Add to wishlist</button>
                            </div>
                        </div>
                        <button className='btn btn-dark w-100 fs-5 mb-3 rounded-3'><i className="bi bi-cart-fill pe-2"></i>Buy Now</button>
                        <button className='btn btn-success w-100 fs-5 rounded-3'><i className="i bi-box-arrow-right pe-2"></i>Rent</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShopHome