import { useState, useEffect } from 'react'
import { ProductCard } from './ProductCard';

export type ProductItem = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  rating: number;
  thumbnail: string;
  brand: string;
  discountPercentage: number;
};

export default function ProductList () {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<ProductItem[]>([]);
  // const [totalProducts, setTotalProducts] = useState(0);
  const [error, setError] = useState<null | Error>(null);

  const debounce = (func: (args: any) => void, delay: number) => {
    let timeoutId: ReturnType<typeof setTimeout>;
  
    return function (...args: any) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      timeoutId = setTimeout(() => {
        func(args);
      }, delay);
    };
  };

  const fetchData = async (page: number) => {
    try {
      setLoading(true);
      console.log('FETCHING DATA!!!!!')
      const res = await fetch(
        `https://dummyjson.com/products/?limit=10&skip=${(page - 1) * 10}`
      );
      const data = await res.json();
      if (res.ok) {
        setProducts((prevItems) => [...prevItems, ...data.products]);
        // page === 1 && setTotalProducts(() => data.total);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        setError(error);
      }
    }
  };

  const [page, setPage] = useState(1);

  const handleScroll = debounce(() => {
    const bottom =
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.documentElement.scrollHeight - 200;
    if (bottom) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        fetchData(nextPage);
        return nextPage;
      });
    }
  }, 300);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  // INITIAL FETCH

  useEffect(() => {
    let subscribed = true;
    (async () => {
      if (subscribed) {
        await fetchData(1);
      }
    })();

    return () => {
      subscribed = false;
    };
  }, []);

  return (
    <div>
      <div className="products-list">
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>

       {loading && <p>Loading...</p>}
       {error && <p>Error: {error.message}</p>}
    </div>
  )
}
