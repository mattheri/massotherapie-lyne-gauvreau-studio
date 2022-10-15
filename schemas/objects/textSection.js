export default {
  type: 'object',
  name: 'textSection',
  title: 'Text',
  fields: [
    {
      name: 'revealInViewport',
      type: 'boolean',
      title: 'Show only when in viewport',
    },
    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'text',
      type: 'portableText',
      title: 'Text',
    },
  ],
  preview: {
    select: {
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: `${heading}`,
        subtitle: 'Text section',
      };
    },
  },
};
