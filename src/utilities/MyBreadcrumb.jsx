import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function MyBreadcrumb() {
    const location = useLocation();
    const { pathname } = location;
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    const pathSegments = pathname.split('/').filter(segment => segment !== '');

    const filteredSegments = pathSegments.filter(segment => segment !== 'shop');
    return (
        <>
            <div className='container py-3'>
                <div className="d-flex align-items-center">
                    <button className="btn text-black fs-5" onClick={goBack}><i className="bi bi-arrow-left-short"></i> Back</button>

                    <nav aria-label="breadcrumb" className='mx-auto'>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link className='text-decoration-none text-black' to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">The Chronicles of Narnia First Edition by C S Lewis (Paperback)</li>

                            {filteredSegments.map((segment, index) => {
                                const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
                                const isLast = index === pathSegments.length - 1;
                                return (
                                    <li key={index} className={`breadcrumb-item ${isLast ? 'active' : ''} text-capitalize text-black fw-semibold`} aria-current={isLast ? 'page' : null}>
                                        {isLast ? segment : <Link className='text-decoration-none text-black' to={url}>{segment}</Link>}
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>
                </div>


            </div>
        </>

    )
}

export default MyBreadcrumb