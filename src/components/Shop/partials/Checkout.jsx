import React, { useState } from "react";
import MultistepCount from "../../../utilities/MultistepCount";
import "./shop.css";
import product from "../../../assets/imgs/products_img.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleInfoStatus, handleOrderDetails, handleRemoveCart, handleShipingStatus } from "../../../redux/products/produtsSlice";

function Checkout() {
    const [formCount, setFormCount] = useState(1);
    const [order, setorder] = useState({
        email: "",
        phoneNumber: "",
        fName: "",
        lName: "",
        city: "",
        postCode: "",
        address: "",
        dLandmark: '',
        cardNumber: '',
        nameCard: '',
        expirationDate: '',
        cvv: '',
        terms:false
    });
    const [error, setError] = useState({
        email: "",
        phoneNumber: "",
        fName: "",
        lName: "",
        city: "",
        postCode: "",
        address: "",
        dLandmark: '',
        cardNumber: '',
        nameCard: '',
        expirationDate: '',
        cvv: '',
        terms:''
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { cartItem } = useSelector((state) => state.products);

    const onShipping = () => {
        const newError = {};

        if (order.email === '') {
            newError.email = "Email is required";
        }

        if (order.phoneNumber === '') {
            newError.phoneNumber = "Phone Number is required";
        }

        if (order.fName === '') {
            newError.fName = "First Name is required";
        }

        if (order.lName === '') {
            newError.lName = "Last Name is required";
        }

        if (order.city === '') {
            newError.city = "City is required";
        }

        if (order.postCode === '') {
            newError.postCode = "Postal code is required";
        }

        if (order.address === '') {
            newError.address = "Address is required";
        }

        dispatch(handleInfoStatus()).then((res) => {
            if (Object.keys(newError).length === 0) {
                setFormCount((prev) => prev + 1);
            }
        }).catch((err) => {
            console.log(err)
        })
        setError(newError);
    }

    const onPayment = () => {
        const newError = {};

        if (order.email === '') {
            newError.email = "Email is required";
        }

        if (order.phoneNumber === '') {
            newError.phoneNumber = "Phone Number is required";
        }

        if (order.fName === '') {
            newError.fName = "First Name is required";
        }

        if (order.lName === '') {
            newError.lName = "Last Name is required";
        }

        if (order.city === '') {
            newError.city = "City is required";
        }

        if (order.postCode === '') {
            newError.postCode = "Postal code is required";
        }

        if (order.address === '') {
            newError.address = "Address is required";
        }

        if (order.dLandmark === '') {
            newError.dLandmark = "Delivery Landmark is required";
        }

        dispatch(handleShipingStatus()).then((res) => {
            if (Object.keys(newError).length === 0) {
                setFormCount((prev) => prev + 1);
            }
        }).catch((err) => {
            console.log(err)
        })
        setError(newError);
    }

    const onSubmitBillingInfo = (data) => {
        const newError = {};

        if (order.cardNumber === '') {
            newError.cardNumber = "Card Number is required";
        }

        if (order.nameCard === '') {
            newError.nameCard = "Name on card is required";
        }

        if (order.expirationDate === '') {
            newError.expirationDate = "Expiration Date is required";
        }

        if (order.cvv === '') {
            newError.cvv = "CVV is required";
        }

        if (order.terms === false) {
            newError.terms = "Please check the checkbox";
        }


        if (Object.keys(newError).length === 0) {
            const orderDetails = { ...order, ...data };
            dispatch(handleOrderDetails(orderDetails)).then((res) => {
                navigate('/shop/cart/Purchase');
            }).catch((err) => {
                console.log(err)
            })
        }

        setError(newError);
    };

    const removeCart = async () => {
        try {
            await dispatch(handleRemoveCart());
            navigate('/shop');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <section className="container">
                <h3 className="display-5 head_font text-center">Checkout</h3>

                <MultistepCount />
                <div className="row mb-4">
                    <div className="col-md-6">
                        {formCount === 1 ? (
                            <>
                                <h5 className="fs-2 mb-4">Contact & Billing Information</h5>
                                <form>
                                    <div className="d-flex">
                                        <div className="mb-3 flex-fill">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder="name@gmail.com"
                                                name="email"
                                                value={order.email}
                                                onChange={(e) => setorder({ ...order, email: e.target.value })}
                                                required
                                            />
                                            {error.email && (
                                                <span className="text-danger">{error.email}</span>
                                            )}
                                        </div>
                                        <div className="mb-3 flex-fill ms-3">
                                            <label htmlFor="exampleInputPhone1" className="form-label">
                                                Phone Number
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                                id="exampleInputPhone1"
                                                aria-describedby="phoneHelp"
                                                placeholder="+91 123456 7890"
                                                value={order.phoneNumber}
                                                onChange={(e) => setorder({ ...order, phoneNumber: e.target.value })}
                                                required
                                            />
                                            {error.phoneNumber && (
                                                <span className="text-danger">{error.phoneNumber}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="d-flex mb-4">
                                        <div className="mb-3 flex-fill">
                                            <label htmlFor="exampleInputfirstName1" className="form-label">
                                                First Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                                id="exampleInputfirstName1"
                                                aria-describedby="firstNameHelp"
                                                placeholder="Name"
                                                value={order.fName}
                                                onChange={(e) => setorder({ ...order, fName: e.target.value })}
                                                required
                                            />
                                            {error.fName && (
                                                <span className="text-danger">{error.fName}</span>
                                            )}
                                        </div>
                                        <div className="mb-3 flex-fill ms-3">
                                            <label htmlFor="exampleInputlastName1" className="form-label">
                                                Last Name
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                                id="exampleInputlastName1"
                                                aria-describedby="lastNameHelp"
                                                placeholder="Surname"
                                                value={order.lName}
                                                onChange={(e) => setorder({ ...order, lName: e.target.value })}
                                                required
                                            />
                                            {error.lName && (
                                                <span className="text-danger">{error.lName}</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="d-flex mb-4">
                                        <div className="mb-3 flex-fill">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                City
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder="Nagpur"
                                                value={order.city}
                                                onChange={(e) => setorder({ ...order, city: e.target.value })}
                                                required
                                            />
                                            {error.city && (
                                                <span className="text-danger">{error.city}</span>
                                            )}
                                        </div>
                                        <div className="mb-3 flex-fill ms-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Postal Code
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                                id="exampleInputPhone1"
                                                aria-describedby="phoneHelp"
                                                placeholder="12345"
                                                value={order.postCode}
                                                onChange={(e) => setorder({ ...order, postCode: e.target.value })}
                                                required
                                            />
                                            {error.postCode && (
                                                <span className="text-danger">{error.postCode}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputAddress1" className="form-label">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                            id="exampleInputAddress1"
                                            aria-describedby="addressHelp"
                                            placeholder="123 Street"
                                            value={order.address}
                                            onChange={(e) => setorder({ ...order, address: e.target.value })}
                                            required
                                        />
                                        {error.address && (
                                            <span className="text-danger">{error.address}</span>
                                        )}
                                    </div>
                                </form>
                            </>
                        ) : formCount === 2 ? (
                            <>
                                <h5 className="fs-2 mb-4">Shipping Information</h5>
                                <form>
                                    <div className="d-flex mb-4">
                                        <div className="mb-3 flex-fill">
                                            <label htmlFor="exampleInputCity1" className="form-label">
                                                City
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                                id="exampleInputCity1"
                                                aria-describedby="City1Help"
                                                placeholder="Nagpur"
                                                value={order.city}
                                                onChange={(e) => setorder({ ...order, city: e.target.value })}
                                                required
                                            />
                                            {error.city && (
                                                <span className="text-danger">{error.city}</span>
                                            )}
                                        </div>
                                        <div className="mb-3 flex-fill ms-3">
                                            <label htmlFor="exampleInputPhone1" className="form-label">
                                                Postal Code
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                                id="exampleInputPhone1"
                                                aria-describedby="phoneHelp"
                                                placeholder="12345"
                                                value={order.postCode}
                                                onChange={(e) => setorder({ ...order, postCode: e.target.value })}
                                                required
                                            />
                                            {error.postCode && (
                                                <span className="text-danger">{error.postCode}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputAddress1" className="form-label">
                                            Address
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                            id="exampleInputAddress1"
                                            aria-describedby="addressHelp"
                                            placeholder="123 Street"
                                            value={order.address}
                                            onChange={(e) => setorder({ ...order, address: e.target.value })}
                                            required
                                        />
                                        {error.address && (
                                            <span className="text-danger">{error.address}</span>
                                        )}
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="mb-3 flex-fill">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder="name@gmail.com"
                                                name="email"
                                                value={order.email}
                                                onChange={(e) => setorder({ ...order, email: e.target.value })}
                                                required
                                            />
                                            {error.email && (
                                                <span className="text-danger">{error.email}</span>
                                            )}
                                        </div>
                                        <div className="mb-3 flex-fill ms-3">
                                            <label htmlFor="exampleInputPhone1" className="form-label">
                                                Phone Number
                                            </label>
                                            <input
                                                type="number"
                                                className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                                id="exampleInputPhone1"
                                                aria-describedby="phoneHelp"
                                                placeholder="+91 123456 7890"
                                                value={order.phoneNumber}
                                                onChange={(e) => setorder({ ...order, phoneNumber: e.target.value })}
                                                required
                                            />
                                            {error.phoneNumber && (
                                                <span className="text-danger">{error.phoneNumber}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputdelivery1" className="form-label">
                                            Delivery Landmark
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                            id="exampleInputdelivery1"
                                            aria-describedby="deliveryHelp"
                                            placeholder="123 Street"
                                            value={order.dLandmark}
                                            onChange={(e) => setorder({ ...order, dLandmark: e.target.value })}
                                            required
                                        />
                                        {error.dLandmark && (
                                            <span className="text-danger">{error.dLandmark}</span>
                                        )}
                                    </div>
                                </form>
                            </>
                        ) : formCount === 3 ? (
                            <>
                                <h5 className="fs-2 mb-4">Payment Details</h5>
                                <form>
                                    <div className="mb-3 mb-4">
                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                            Card Number
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                            id="exampleInputEmail1"
                                            aria-describedby="emailHelp"
                                            placeholder="1234 5678 9898 0000"
                                            value={order.cardNumber}
                                            onChange={(e) => setorder({ ...order, cardNumber: e.target.value })}
                                            required
                                        />
                                        {error.cardNumber && (
                                            <span className="text-danger">{error.cardNumber}</span>
                                        )}
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="exampleInputEmail1" className="form-label">
                                            Name on Card
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                            id="exampleInputPhone1"
                                            aria-describedby="phoneHelp"
                                            placeholder="Name Surname"
                                            value={order.nameCard}
                                            onChange={(e) => setorder({ ...order, nameCard: e.target.value })}
                                        />
                                        {error.nameCard && (
                                            <span className="text-danger">{error.nameCard}</span>
                                        )}
                                    </div>
                                    <div className="d-flex mb-4">
                                        <div className="mb-3 flex-fill">
                                            <label htmlFor="exampleInputEmail1" className="form-label">
                                                Expiration Date
                                            </label>
                                            <input
                                                type="date"
                                                className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                                id="exampleInputEmail1"
                                                aria-describedby="emailHelp"
                                                placeholder="name@gmail.com"
                                                value={order.expirationDate}
                                                onChange={(e) => setorder({ ...order, expirationDate: e.target.value })}
                                                required
                                            />
                                            {error.expirationDate && (
                                                <span className="text-danger">{error.expirationDate}</span>
                                            )}
                                        </div>
                                        <div className="mb-3 flex-fill ms-3">
                                            <label htmlFor="exampleInputPhone1" className="form-label">
                                                CVV
                                            </label>
                                            <input
                                                type="password"
                                                className="form-control form_input border-0 rounded-0 border-bottom border-dark bg-transparent"
                                                id="exampleInputPhone1"
                                                aria-describedby="phoneHelp"
                                                placeholder="123"
                                                value={order.cvv}
                                                onChange={(e) => setorder({ ...order, cvv: e.target.value })}
                                                required
                                            />
                                            {error.cvv && (
                                                <span className="text-danger">{error.cvv}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <div className="">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={order.terms}
                                            onChange={(e) => setorder({ ...order, terms: e.target.checked })}
                                            id="flexCheckDefault"
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            I agree to{" "}
                                            <Link to='/terms' className="text-decoration-underline fw-bold text-black">
                                                Terms and Conditions
                                            </Link>
                                        </label>
                                        </div>
                                       
                                        {error.terms && (
                                                <span className="text-danger">{error.terms}</span>
                                            )}
                                    </div>
                                </form>
                            </>
                        ) : null}
                    </div>
                    <div className="col-md-4 offset-2">
                        {cartItem.length !== 0 ? cartItem.map((data) => {
                            return (
                                <>
                                    <div className="d-flex border-bottom border-dark pb-2 mb-5">
                                        <div className="">
                                            <img src={product} alt="product" width="92px" height="auto" />
                                        </div>
                                        <div className="ms-3 flex-fill">
                                            <p className="fs-6 fw-bold mb-2">{data.title}</p>
                                            <p className="mb-0">{data.author}</p>
                                            <p className="mb-3">
                                                <b>₹{data.totalPrice}</b> x{data.cartQuantity}
                                            </p>

                                            <div className="d-flex align-items-center justify-content-between">
                                                <Link to="/" className="text-dark fw-bold fs-5 text-black">
                                                    Edit
                                                </Link>
                                                <button
                                                    className="btn text-dark fw-bold fs-5 ms-4 text-black text-decoration-underline"
                                                    onClick={removeCart}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-8 text-start mb-md-4">
                                            <p className="mb-3 text-black fs-5">SUMMARY</p>
                                            <p className="mb-3 text-black fs-5">
                                                Shipping & Taxes: Calculated at the checkout
                                            </p>
                                            <p className="mb-0 text-black fw-bold fs-5">Total</p>
                                        </div>
                                        <div className="col-md-4 d-flex flex-column justify-content-between align-items-end mb-md-4">
                                            <p className="text-black fs-5">₹{data.totalPrice}</p>
                                            <p className="text-black mb-0 fw-bold fs-5">₹{data.totalPrice}</p>
                                        </div>
                                        <div className="col-md-12 text-center">
                                            {formCount === 1 ? (
                                                <button
                                                    className="btn btn-dark w-100 py-3 rounded-pill fs-5 text-uppercase"
                                                    onClick={onShipping}
                                                >
                                                    Continue to Shipping
                                                </button>
                                            ) : formCount === 2 ? (
                                                <button
                                                    className="btn btn-dark w-100 py-3 rounded-pill fs-5 text-uppercase"
                                                    onClick={onPayment}
                                                >
                                                    Continue to Payment
                                                </button>
                                            ) : formCount === 3 ? (
                                                <button
                                                    className="btn btn-dark w-100 py-3 rounded-pill fs-5 text-uppercase"
                                                    onClick={() => onSubmitBillingInfo(data)}
                                                >
                                                    Confirm Payment
                                                </button>
                                            ) : null}
                                        </div>
                                    </div>
                                </>
                            )
                        }) : null}

                    </div>
                </div>
            </section>
        </>
    );
}

export default Checkout;
