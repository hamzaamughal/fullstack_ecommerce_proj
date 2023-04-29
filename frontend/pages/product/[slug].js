import { useEffect } from 'react'
import {
  DetailsStyle,
  ProductInfo,
  Quantity,
  Buy,
} from '@/styles/ProductDetails'
import { useQuery } from 'urql'
import { GET_PRODUCT_QUERY } from '../../lib/query'
import { useRouter } from 'next/router'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { useStateContext } from '../../lib/context'
import { toast } from 'react-hot-toast'

export default function ProductDetails() {
  //Use state
  const { increaseQty, decreaseQty, qty, onAdd, setQty } = useStateContext()

  const resetQuantity = () => {
    setQty(1)
  }
  useEffect(() => {
    resetQuantity()
  }, [])
  //Fetch slug
  const { query } = useRouter()

  //Fetch Graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: { slug: query.slug },
  })
  const { data, fetching, error } = results
  if (fetching) return <p>Loading...</p>
  if (error) return <p>Oh no... {error.message}</p>
  //Extract Data
  const { title, description, image } = data.products.data[0].attributes
  // Toast
  const notify = () => {
    toast.success(`${title} added to cart`, { duration: 1500 })
  }

  return (
    <DetailsStyle>
      <img src={image.data.attributes.formats.medium.url} alt={title} />
      <ProductInfo>
        <h2>{title}</h2>
        <p>{description}</p>
        <Quantity>
          <span>Quantity</span>
          <button onClick={decreaseQty}>
            <AiFillMinusCircle />
          </button>
          <p>{qty}</p>
          <button>
            <AiFillPlusCircle onClick={increaseQty} />
          </button>
        </Quantity>
        <Buy
          onClick={() => {
            onAdd(data.products.data[0].attributes, qty)
            notify()
          }}
        >
          Add To Cart
        </Buy>
      </ProductInfo>
    </DetailsStyle>
  )
}
