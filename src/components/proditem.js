// import React from 'react'
import React, { useState, useEffect } from 'react';

export default function Proditem() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.log('Error fetching data:', error));
    }, []);

  return (
    <div className='prod-item-wrp'>
        {products.map(product => (
            <div className='prod-card' key={product.id}>
                <img alt={product.title} src={product.image} className='image-class'/>

                <div className="svgwrp">
                    <svg className='firsts' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.62 20.8096C12.28 20.9296 11.72 20.9296 11.38 20.8096C8.48 19.8196 2 15.6896 2 8.68961C2 5.59961 4.49 3.09961 7.56 3.09961C9.38 3.09961 10.99 3.97961 12 5.33961C13.01 3.97961 14.63 3.09961 16.44 3.09961C19.51 3.09961 22 5.59961 22 8.68961C22 15.6896 15.52 19.8196 12.62 20.8096Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                
                <div className='details'>
                    <h6>{product.title}</h6>
                    <p className='mb-2'>{product.description}</p>
                    <h6>Price: ${product.price}</h6>
                </div>
            </div>
            ))}
    </div>
  )
}

// export default proditem