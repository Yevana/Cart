import React from 'react'
import { useSelector } from 'react-redux';

function MultistepCount() {
    const { onCartStatus, onInfoStatus, onShippingStatus, onPaymentsStatus } = useSelector((state) => state.products);

    return (
        <div className='d-flex align-items-center justify-content-center mb-5'>
            <div className='d-flex align-items-center'>
                <div className={`d-flex justify-content-center ${onCartStatus !== true ? 'bg-secondary bg-opacity-50 text-black' : 'bg-primary text-white'} fw-bold rounded-circle`} style={{ width: "24px", height: "24px" }}>{onCartStatus !== true ? '1' : (<i className="bi bi-check2-circle"></i>)}</div>
                <span className={`${onCartStatus !== true ? 'fw-semibold' : ''} fs-4 ms-3`}>Cart</span>
            </div>
            <div className='border ms-1' style={{ width: "87px" }}></div>
            <div className='d-flex align-items-center'>
                <div className={`d-flex justify-content-center ${onInfoStatus !== true ? 'bg-secondary bg-opacity-50 text-black' : 'bg-primary text-white'} fw-bold rounded-circle`} style={{ width: "24px", height: "24px" }}>{onInfoStatus !== true ? '2' : (<i className="bi bi-check2-circle"></i>)}</div>
                <span className={`${onInfoStatus !== true ? 'fw-semibold' : ''} fs-4 ms-3`}>Information</span>
            </div>
            <div className='border ms-1' style={{ width: "87px" }}></div>
            <div className='d-flex align-items-center'>
                <div className={`d-flex justify-content-center ${onShippingStatus !== true ? 'bg-secondary bg-opacity-50 text-black' : 'bg-primary text-white'} fw-bold rounded-circle`} style={{ width: "24px", height: "24px" }}>{onShippingStatus !== true ? '3' : (<i className="bi bi-check2-circle"></i>)}</div>
                <span className={`${onShippingStatus !== true ? 'fw-semibold' : ''} fs-4 ms-3`}>Shipping</span>
            </div>
            <div className='border ms-1' style={{ width: "87px" }}></div>
            <div className='d-flex align-items-center'>
                <div className={`d-flex justify-content-center ${onPaymentsStatus !== true ? 'bg-secondary bg-opacity-50 text-black' : 'bg-primary text-white'} fw-bold rounded-circle`} style={{ width: "24px", height: "24px" }}>{onPaymentsStatus !== true ? '4' : (<i className="bi bi-check2-circle"></i>)}</div>
                <span className={`${onPaymentsStatus !== true ? 'fw-semibold' : ''} fs-4 ms-3`}>Payments</span>
            </div>
        </div>
    )
}

export default MultistepCount