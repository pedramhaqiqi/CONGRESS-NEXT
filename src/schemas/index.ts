import { SchemaTypeDefinition } from 'sanity'

import blockContent from './blockContent'
import article from './article'

export const schemaTypes = [article, blockContent]
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [article, blockContent],
}
