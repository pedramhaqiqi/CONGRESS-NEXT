import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    defineField({
      name: 'topic',
      title: 'Topic',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'topic',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'one_line_summary',
      title: 'One line summary',
      type: 'text',
    }),
    defineField({
      name: 'four_line_summary',
      title: 'Four line summary',
      type: 'text',
    }),
   
    defineField({
      name: 'date',
      title: 'date',
      type: 'text',
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'tags',
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return { ...selection, subtitle: author && `by ${author}` }
    },
  },
})
