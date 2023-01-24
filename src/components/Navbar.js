import React from 'react';

function Navbar() {
    return (
        <header className="bd-header light py-3 d-flex align-items-stretch border-bottom shadow-sm">
            <div className="container-fluid d-flex align-items-center">
                <h1 className="d-flex align-items-center fs-4 text-black mb-0">
                    <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-black.svg" width="38" height="30" className="me-3"
                         alt="Bootstrap"/>
                        EuroNews
                </h1>
            </div>
        </header>
    );
}

export default Navbar;