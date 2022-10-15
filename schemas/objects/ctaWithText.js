export default {
	title: 'Call to action with text',
	name: 'ctaWithText',
	type: 'object',
	validation: Rule =>
		Rule.custom(
			(fields = {}) =>
				!fields.route || !fields.link || 'Only one link type is allowed'
		),
	fieldsets: [
		{
			title: 'Link',
			name: 'link',
		},
	],
	fields: [
		{
			name: 'revealInViewport',
			type: 'boolean',
			title: 'Show only when in viewport',
		},
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			name: 'text',
			type: 'portableText',
			title: 'Text',
		},
		{
			name: 'ctas',
			type: 'array',
			title: 'Call to actions',
			of: [
				{
					title: 'Call to action',
					type: 'cta',
				},
			],
		},
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }) {
			return {
				title,
			};
		},
	},
};