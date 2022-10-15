export default {
	name: 'map',
	title: 'Map',
	type: 'document',
	fields: [
		{
			name: 'revealInViewport',
			type: 'boolean',
			title: 'Show only when in viewport',
		},
		{
			name: 'location',
			type: 'geopoint',
			options: {
				leaflet: {
					defaultLocation: {
						lat: 46.735129478356335,
						lng: -71.25796665247894
					}
				}
			}
		}
	],
};
