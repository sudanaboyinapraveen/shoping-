import React from 'react'
import './fotter.css'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet} from 'react-icons/fa';
const Fotter = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='left-box'>
                <div className='box'>
                    <div className='icon_box'>
                        <FaPiggyBank />
                    </div>
                    <div className='detail'>
                        <h3>Great Saving</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
                    <div className='box'>
                    <div className='icon_box'>
                        <FaShippingFast />
                    </div>
                    <div className='detail'>
                        <h3>free delivery</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaHeadphonesAlt />
                    </div>
                    <div className='detail'>
                        <h3>24X7 support</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
                <div className='box'>
                    <div className='icon_box'>
                        <FaWallet />
                    </div>
                    <div className='detail'>
                        <h3>money back</h3>
                        <p>Lorem ipsum dolor sit amet,</p>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='header'>
                   <h1>ShopNest</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur Nuliscing elit. Duis faucibus ipsum id sem Putconsequat Text.</p>
                </div>
                <div className='bottom'>
                    <div className='box'>
                        <h3>Your Account</h3>
                        <ul>
                            <li>About us</li>
                            <li>Account</li>
                            <li>Payment</li>
                            <li>sales</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>products</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Track Oder</li>
                            <li>New product</li>
                            <li>old product</li>
                        </ul>
                    </div>
                    <div className='box'>
                        <h3>contact us</h3>
                        <ul>
                            <li>Bommanahalli is a locality in Bengaluru and one of the zones of BBMP</li>
                            <li>+(91)9430493323</li>
                            <li>praveenn@gmail.com</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Fotter