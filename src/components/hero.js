import React from 'react'

const hero = () => {
  return (
    <>
    {/* Mobile teb section */}
    <div className='tab-wrp d-block d-sm-none'>
      <a href='/' className='link'>HOME</a>
      <a href='/' className='link active'>SHOP</a>
    </div>

    {/* Hero section  */}
    <div className='main-hero-s'>
        <div className='container'>
            <h1 className='m-title text-center'>DISCOVER OUR PRODUCTS</h1>
            <p className='m-text text-center'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>
    </div>
    </>
  )
}

export default hero