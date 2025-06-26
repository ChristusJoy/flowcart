import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import { Heart } from 'lucide-react';

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

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row py-40 gap-10">
        <div className="flex-shrink-0 p-7">
          <img src={product.image} className="w-full h-[500px] object-contain" alt={product.title} />
        </div>
        <div className='flex flex-col pl-5 pt-10'>
          <h2 className="text-5xl font-medium mt-4">{product.title}</h2>
          <h2 className="text-2xl font-normal mt-4">{product.rating.rate}</h2>
          <h2 className="text-4xl font-normal mt-4 pt-10 pb-10">${product.price}</h2>
          <div className='flex flex-col'>
            <div className='flex flex-row pt-30 items-center gap-x-9'>
              <button>
                <div className='border-slate-950 rounded-md'>
                  Add To Cart
                </div>
              </button>
              <button> <Heart /></button>
            </div>
            <button>
              Buy Now
            </button>
          </div>
        </div>


      </div>
    </>

  );
};

export default ProductDetails;
