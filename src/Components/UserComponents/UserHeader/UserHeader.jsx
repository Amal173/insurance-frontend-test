import React from 'react'
import './UserHeader.css'

function UserHeader() {

    return (
        <header>
            <div className='container'>
                <div className="header">
                    <div className="brand-logo">
                        <h1>Insurance</h1>
                    </div>
                    <input type="search" placeholder='search' />
                    <div className='buttons'>
                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default UserHeader