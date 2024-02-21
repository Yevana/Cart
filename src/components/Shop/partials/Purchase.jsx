import React from 'react'

function Purchase() {
    return (
        <section className='container py-5'>
            <div className='d-flex justify-content-center'>
                <div className='text-center'>
                    <h2 className='display-4 mb-3 head_font'>Thank you for your purchase!</h2>
                    <p className='fw-semibold mb-2'>Your order number is #123456789</p>
                    <p className='fw-semibold mb-5'>You’ll receive an email confirming your order details.</p>
                    <div className="d-flex justify-content-center">
                        <div className='rounded-circle d-flex justify-content-center align-items-center' style={{ width: "120px", height: "120px",background:"rgba(35, 162, 109, 0.12)" }}><i className="bi bi-check-circle-fill display-3 text-success"></i></div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Purchase