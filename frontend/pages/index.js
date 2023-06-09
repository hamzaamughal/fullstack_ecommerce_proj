import Image from 'next/image'
import { useQuery } from 'urql'
import { PRODUCT_QUERY } from '../lib/query'
import Product from '@/components/Products'
import { Gallery } from '@/styles/Gallery'

export default function Home() {
  const [result] = useQuery({ query: PRODUCT_QUERY })
  const { data, fetching, error } = result

  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>

  const products = data.products.data
  console.log(products, 'products')

  return (
    <main>
      <Gallery>
        {products.map((product) => {
          return <Product key={product.attributes.slug} product={product} />
        })}
      </Gallery>
    </main>
  )
}
