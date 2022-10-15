import React from 'react';

const HTMLpreview = ({ value }) => (
  // eslint-disable-next-line
  <div dangerouslySetInnerHTML={{ __html: value.html }} />
);

export default {
  name: 'embedHTML',
  title: 'Embed HTML',
  type: 'object',
  fields: [
    {
      name: 'revealInViewport',
      type: 'boolean',
      title: 'Show only when in viewport',
    },
    {
      name: 'html',
      title: 'HTML',
      type: 'text',
      description:
        'You usually want to avoid storing freeform HTML, but for embed codes it can be useful.',
      options: {
        language: 'html',
      },
    },
  ],
  preview: {
    select: {
      html: 'html',
    },
    component: HTMLpreview,
  },
};
