import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { Heart, Star, StarHalf } from 'lucide-react';
import Footer from '../components/Footer';

const renderStars = (rating) => {
  const stars = [];

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="text-yellow-500 fill-yellow-500" />);
  }

  if (hasHalfStar) {
    stars.push(<StarHalf key="half" className="text-yellow-500 fill-yellow-500" />);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="text-gray-300" />);
  }

  return stars;
};

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Header />

      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row py-20 md:py-40 gap-10">
        <div className="flex-shrink-0 p-0 md:p-7">
          <img
            src={product.image}
            className="w-full max-w-sm mx-auto h-[300px] md:h-[500px] object-contain"
            alt={product.title}
          />
        </div>
        <div className="flex flex-col w-full md:pl-5 md:pt-10">
          <h2 className="text-2xl md:text-5xl font-medium mt-4">{product.title}</h2>
          <h2 className="flex items-center gap-1 text-lg md:text-2xl font-normal mt-4">
            {renderStars(product.rating.rate)}
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-4">{product.description}</p>
          <h2 className="text-2xl md:text-4xl font-normal mt-6 md:mt-10 mb-6">${product.price}</h2>

          <div className="flex flex-col gap-5 py-4">
            <div className="flex flex-row items-center gap-x-5">
              <button
                className="flex-grow border border-black rounded-md px-3 py-2 transition-colors duration-300 hover:bg-black hover:text-white"
                aria-label="Add to cart"
              >
                <span className="text-sm md:text-base">Add To Cart</span>
              </button>
              <button
                className="flex items-center justify-center px-2"
              >
                <Heart size={30} strokeWidth={1} />
              </button>
            </div>
            <button
              className="border border-black rounded-md px-3 py-2 w-full transition-colors duration-300 hover:bg-black hover:text-white"
              aria-label="Buy now"
            >
              <span className="text-sm md:text-base">Buy Now</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetails;
