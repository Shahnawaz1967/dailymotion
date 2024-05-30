// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const Content = () => {
//   const { id } = useParams();
//   const [contentDetails, setContentDetails] = useState(null);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchVideoDetails = async (retryCount = 3, delay = 1000) => {
//       try {
//         const response = await axios.get('https://youtube-data8.p.rapidapi.com/video/details', {
//           params: { id, hl: 'en', gl: 'US' },
//           headers: {
//             'x-rapidapi-host': 'youtube-data8.p.rapidapi.com',
//             'x-rapidapi-key': '1099359008msh0dbf0801f2be87ep1f3479jsn80356fb23109'
//           }
//         });
//         setContentDetails(response.data);
//         setLoading(false);
//       } catch (error) {
//         if (error.response && error.response.status === 429 && retryCount > 0) {
//           setTimeout(() => {
//             fetchVideoDetails(retryCount - 1, delay * 2); // Exponential backoff
//           }, delay);
//         } else {
//           console.error('Error fetching video details:', error);
//           setError('Failed to fetch video details. Please try again later.');
//           setLoading(false);
//         }
//       }
//     };

//     fetchVideoDetails();
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div className='text-black'>{error}</div>;
//   }

//   return (
//     <div className='text-black'>
//       <h1>{contentDetails.title}</h1>
//       <p>{contentDetails.description}</p>
//       {/* Add more details as needed */}
//     </div>
//   );
// };

// export default Content;
import React,{useState,useEffect} from "react";


const ProductModal = ({ product, onClose }) => {
    if (!product) return null;
  
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-4 rounded-lg max-w-md w-full relative">
          <button onClick={onClose} className="absolute top-2 right-2 text-black">Close</button>
          <img className="w-full mb-2 h-60" src={product.image} alt={product.title} />
          <h3 className="text-lg font-bold mb-2">{product.title}</h3>
         
          <p className="text-md font-bold mb-2">Price: ${product.price}</p>
          <button className="hover:bg-black bg-[#35383b] text-white font-serif ml-32 py-1 px-2 mt-4 rounded-xl">
                        Add to Cart
                      </button>
        </div>
      </div>
    );
  };


function Trending() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
  
    useEffect(() => {
      fetch('https://fakestoreapi.com/products/category/women%27s%20clothing?limit=4')
        .then(res => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(json => {
          setProducts(json);
          setLoading(false);
        })
        .catch(err => {
          setError(err);
          setLoading(false);
        });
    }, []);

     
  
    const handleImageClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
      };


    return (
    
    <div className="container mx-auto p-4">
   

    <h2 className="text-3xl font-bold text-left p-2 text-green-900 underline">Shopping Now</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-8">
        
        <div className=" p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-2 rounded-lg shadow-md">
        {products.map(product => (
        <div key={product.id} className="border p-4 rounded shadow">
          <img src={product.image} alt={product.title} className="w-full h-96 object-cover mb-4"
          onClick={() => handleImageClick(product)} />
          <h2 className="text-md ">{product.title}</h2>
          
          <p className="text-xl font-semibold mt-2">${product.price}</p>
        </div>
      ))} 
        </div>
        
</div>
{isModalOpen && <ProductModal product={selectedProduct} onClose={handleCloseModal} />}
</div>
);
}

export default Trending; 