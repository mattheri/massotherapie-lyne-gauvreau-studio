export default {
  type: 'object',
  name: 'imageSection',
  title: 'Image with text',
  fields: [
    {
      name: 'revealInViewport',
      type: 'boolean',
      title: 'Show only when in viewport',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'text',
      type: 'simplePortableText',
      title: 'Text',
    },
    {
      name: 'image',
      type: 'figure',
      title: 'Image',
    },
    {
      name: 'imagePosition',
      type: 'string',
      title: 'Image position (on large screens)',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      default: 'left',
    },
    {
      name: 'textAlignment',
      type: 'string',
      title: 'Text alignment',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'textPosition',
      type: 'string',
      title: 'Text position',
      options: {
        list: [
          { title: 'Top', value: 'top' },
          { title: 'Center', value: 'center' },
          { title: 'Bottom', value: 'bottom' },
        ],
        layout: 'radio',
      },
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call to action',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
      subtitle: 'label',
      media: 'image',
    },
    prepare({ heading, media }) {
      return {
        title: `Image: ${heading}`,
        subtitle: 'Image section',
        media,
      };
    },
  },
};
