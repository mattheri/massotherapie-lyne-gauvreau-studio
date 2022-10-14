export default {
	title: 'Appointments',
	name: 'appointments',
	type: 'object',
	fieldsets: [
		{
			title: 'Link',
			name: 'link',
		},
	],
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
		},
		{
			title: 'Appointment ID',
			name: 'appointmentIdFirst',
			type: 'string',
			validation: Rule => [
				Rule.required().error('You have to enter an appointment ID'),
			],
		},
		{
			title: 'Appointment ID',
			name: 'appointmentIdSecond',
			type: 'string',
		},
		{
			title: 'Appointment ID',
			name: 'appointmentIdThird',
			type: 'string',
		}
	],
	preview: {
		select: {
			title: 'title',
			appointmentId: 'appointmentId',
		},
	},
};
