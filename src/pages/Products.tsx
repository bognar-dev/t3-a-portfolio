import Card from '~/components/Card'
import classes from '~/styles/Products.module.scss'
import productsData from '~/assets/products.json'

type Product = {
  id: number
  name: string
  description: string
  price: string
  priceOriginal: string
  imageId: string
}

function Products(): JSX.Element {
  return (
    <div className={classes.cards}>
      {productsData.map((product: Product) => (
        <Card
          key={product.id}
          size={100}
          product={{
            name: product.name,
            description: product.description,
            price: product.price,
            priceOriginal: product.priceOriginal,
            imageId: product.imageId,
          }}
        />
      ))}
    </div>
  )
}

export default Products
