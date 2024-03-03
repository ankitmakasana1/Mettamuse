import React from 'react'

import UsdImg from "../assets/images/usd.svg";
import BottomOne from "../assets/images/gpay.png";
import BottomTwo from "../assets/images/other.png";
import BottomThree from "../assets/images/paypal.png";
import BottomFour from "../assets/images/amex.png";
import BottomFive from "../assets/images/applepay.png";
import BottomSix from "../assets/images/opay.png";

const footer = () => {
  return (
    <footer className='footer'>
        <div className='container'>
            <div className='row'>
              <div className='col-lg-6 col-md-8'>
              <div className='pr-div'>
                <h5>Be the first to know</h5>
                <p>Sign up for updates from mettā muse.</p>
                <div className='search-btn'>
                <form class="d-flex" role="search">
                  <input class="form-control" type="search" placeholder="Enter your e-mail..." aria-label="Search"/>
                  <button class="btn btn-outline-success" type="submit">Subscribe</button>
                </form>
                </div>
              </div>
              </div>
              <div className='col-lg-6 col-md-4'>
                <h5>CONTACT US</h5>
                <p>+44 221 133 5360</p>
                <p>customercare@mettamuse.com</p>
                <h5 className='mt'>Currency</h5>
                <div className='usd-div'>
                  <img src={UsdImg} alt=''/>
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 0L4.48492 1.51508L6 3L4.48492 4.48492L3 6L1.51508 4.48492L0 3L1.51508 1.51508L3 0Z" fill="white"/>
                  </svg>
                  <h5>USD</h5>
                </div>
                <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
              </div>
            </div>
            <hr/>
            <div className='row'>
              <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                <h5>mettā muse</h5>
                <a className='link' href='/'>About Us</a>
                <a className='link' href='/'>Stories</a>
                <a className='link' href='/'>Artisans</a>
                <a className='link' href='/'>Boutiques</a>
                <a className='link' href='/'>Contact Us</a>
                <a className='link' href='/'>EU Compliances Docs</a>
              </div>
              
              <div className='col-lg-3 col-md-3 col-sm-6 col-6'>
                <h5>Quick Links</h5>
                <a className='link' href='/'>Orders & Shipping</a>
                <a className='link' href='/'>Join/Login as a Seller</a>
                <a className='link' href='/'>Payment & Pricing</a>
                <a className='link' href='/'>Return & Refunds</a>
                <a className='link' href='/'>FAQs</a>
                <a className='link' href='/'>Privacy Policy</a>
                <a className='link' href='/'>Terms & Conditions</a>
              </div>

              <div className='col-lg-6 col-md-6'>
                <h5>Follow Us</h5>
                <div className='svg-div'>
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.00012" y="1" width="32" height="32" rx="16" fill="black" stroke="white" stroke-width="1.2"/>
                <g clip-path="url(#clip0_4238_77)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.702 9.048C12.8505 9.08686 12.2688 9.22171 11.7591 9.42057C11.2334 9.624 10.7877 9.89829 10.342 10.3429C9.89853 10.7874 9.62424 11.2343 9.42082 11.76C9.22196 12.2686 9.0871 12.8503 9.04824 13.7017C9.00939 14.5543 9.00024 14.8274 9.00024 17C9.00024 19.1726 9.00939 19.4457 9.04824 20.2983C9.0871 21.1497 9.22196 21.7314 9.42082 22.2411C9.62424 22.7669 9.89853 23.2126 10.3431 23.6583C10.7877 24.1017 11.2345 24.376 11.7602 24.5806C12.2688 24.7783 12.8505 24.912 13.702 24.952C14.5557 24.9909 14.8277 25 17.0002 25C19.1728 25 19.446 24.9909 20.2985 24.952C21.15 24.9131 21.7317 24.7783 22.2414 24.5806C22.7671 24.3749 23.2128 24.1017 23.6585 23.6571C24.102 23.2126 24.3762 22.7657 24.5808 22.24C24.7785 21.7314 24.9122 21.1497 24.9522 20.2983C24.9911 19.4446 25.0002 19.1726 25.0002 17C25.0002 14.8274 24.9911 14.5543 24.9522 13.7017C24.9134 12.8503 24.7785 12.2686 24.5808 11.7589C24.3797 11.2249 24.0646 10.7413 23.6574 10.3417C23.2128 9.89829 22.766 9.624 22.2402 9.42057C21.7317 9.22171 21.15 9.08686 20.2985 9.048C19.446 9.00914 19.1728 9 17.0002 9C14.8277 9 14.5545 9.00914 13.702 9.048ZM12.8917 17C12.8917 18.0897 13.3245 19.1347 14.095 19.9052C14.8656 20.6757 15.9106 21.1086 17.0002 21.1086C18.0899 21.1086 19.1349 20.6757 19.9054 19.9052C20.676 19.1347 21.1088 18.0897 21.1088 17C21.1088 15.9103 20.676 14.8653 19.9054 14.0948C19.1349 13.3243 18.0899 12.8914 17.0002 12.8914C15.9106 12.8914 14.8656 13.3243 14.095 14.0948C13.3245 14.8653 12.8917 15.9103 12.8917 17ZM17.0002 19.6663C16.2931 19.6663 15.6149 19.3854 15.1149 18.8853C14.6149 18.3853 14.334 17.7071 14.334 17C14.334 16.2929 14.6149 15.6147 15.1149 15.1147C15.6149 14.6146 16.2931 14.3337 17.0002 14.3337C17.7074 14.3337 18.3856 14.6146 18.8856 15.1147C19.3856 15.6147 19.6665 16.2929 19.6665 17C19.6665 17.7071 19.3856 18.3853 18.8856 18.8853C18.3856 19.3854 17.7074 19.6663 17.0002 19.6663ZM22.6002 12.44C22.6002 12.5661 22.5754 12.6909 22.5272 12.8074C22.4789 12.9238 22.4082 13.0297 22.3191 13.1188C22.2299 13.208 22.1241 13.2787 22.0076 13.3269C21.8911 13.3752 21.7663 13.4 21.6402 13.4C21.5142 13.4 21.3893 13.3752 21.2729 13.3269C21.1564 13.2787 21.0506 13.208 20.9614 13.1188C20.8723 13.0297 20.8016 12.9238 20.7533 12.8074C20.7051 12.6909 20.6802 12.5661 20.6802 12.44C20.6802 12.1854 20.7814 11.9412 20.9614 11.7612C21.1415 11.5811 21.3856 11.48 21.6402 11.48C21.8949 11.48 22.139 11.5811 22.3191 11.7612C22.4991 11.9412 22.6002 12.1854 22.6002 12.44Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_4238_77">
                <rect width="32" height="32" fill="white" transform="translate(1.00012 1)"/>
                </clipPath>
                </defs>
                </svg>

                  <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.999756" y="1" width="32" height="32" rx="16" stroke="white" stroke-width="1.2"/>
                    <path d="M24 8C24.5304 8 25.0391 8.21071 25.4142 8.58579C25.7893 8.96086 26 9.46957 26 10V24C26 24.5304 25.7893 25.0391 25.4142 25.4142C25.0391 25.7893 24.5304 26 24 26H10C9.46957 26 8.96086 25.7893 8.58579 25.4142C8.21071 25.0391 8 24.5304 8 24V10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H24ZM23.5 23.5V18.2C23.5 17.3354 23.1565 16.5062 22.5452 15.8948C21.9338 15.2835 21.1046 14.94 20.24 14.94C19.39 14.94 18.4 15.46 17.92 16.24V15.13H15.13V23.5H17.92V18.57C17.92 17.8 18.54 17.17 19.31 17.17C19.6813 17.17 20.0374 17.3175 20.2999 17.5801C20.5625 17.8426 20.71 18.1987 20.71 18.57V23.5H23.5ZM11.88 13.56C12.3256 13.56 12.7529 13.383 13.0679 13.0679C13.383 12.7529 13.56 12.3256 13.56 11.88C13.56 10.95 12.81 10.19 11.88 10.19C11.4318 10.19 11.0019 10.3681 10.685 10.685C10.3681 11.0019 10.19 11.4318 10.19 11.88C10.19 12.81 10.95 13.56 11.88 13.56ZM13.27 23.5V15.13H10.5V23.5H13.27Z" fill="white"/>
                  </svg>
                </div>
                <div className='bottom-logo'>
                  <h5>mettā muse Accepts</h5>
                  <a href='/'><img src={BottomOne} alt=''/></a>
                  <a href='/'><img src={BottomTwo} alt=''/></a>
                  <a href='/'><img src={BottomThree} alt=''/></a>
                  <a href='/'><img src={BottomFour} alt=''/></a>
                  <a href='/'><img src={BottomFive} alt=''/></a>
                  <a href='/'><img src={BottomSix} alt=''/></a>
                </div>
              </div>

            </div>
            <div className='copright'>
              <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default footer