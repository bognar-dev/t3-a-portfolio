import Card from '~/components/Card'
import classes from '~/styles/Products.module.scss'
import productsData from '~/assets/products.json'
import { api } from '~/utils/api'

type Product = {
  id: number
  name: string
  description: string
  price: string
  priceOriginal: string
  imageId: string
}

function Products(): JSX.Element {

  const products = api.products.getAll.useQuery().data;
  //console.log(products)
  return (
    <div className={classes.cards}>
      {products?.map((product: any) => (
        <Card
          key={product.id}
          size={100}
          product={{
            name: product.name,
            description: product.description,
            price: product.price,
            priceOriginal: product.priceOriginal,
            currency: product.currency,
            imageId: product.imageId,
          }}
        />
      ))}
    </div>
  )
}

export default Products
