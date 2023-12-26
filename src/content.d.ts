export interface Article {
    _type: 'post'
    _id: string
    _createdAt: string
    title: string
    slug: string
    tags: string[]
    mainImage: string
    one_line_summary: string
    four_line_summary: string
    date: string
  }