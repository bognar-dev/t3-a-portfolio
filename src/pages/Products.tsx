import Card from '~/components/Card'
import classes from '~/styles/Products.module.scss'
import { api } from '~/utils/api'
import type { Product } from '@prisma/client';

function Products(): JSX.Element {

  const products = api.products.getAll.useQuery();
  //console.log(products)
  return (
    <div className={classes.cards}>
      {products?.data?.map((product: Product) => (
        <Card
          key={product.id}
          product={product}
        />
      ))}
    </div>
  )
}

export default Products
