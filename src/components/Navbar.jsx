import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="nav-bar">
                <nav className="sticky-top bg-secondary text-light">
                    <div className="container-fluid" style={{textAlign:'center'}}>
                        <p className='navbar-brands' style={{
                            padding:'10px',
                            fontSize:'1.5rem'
                        }}>News App</p>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar