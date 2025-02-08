import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import payment from './payment'
import user from './user'
import categories from './categories'
import order from './order'
import analytics from './analytics'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,payment,order,categories,user,analytics],
}
