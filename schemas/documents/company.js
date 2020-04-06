export default {
  title: 'Company',
  name: 'company',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Google Maps Url',
      name: 'googleMapsUrl',
      type: 'url',
      description:
        'If this company is a host, this helps our attendees find their way to their office. ',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'string',
      description: 'Display address: eg. 422 Richards St #170, Vancouver',
    },
    {
      title: 'Is this a sponsor?',
      name: 'isSponsor',
      type: 'boolean',
      description: 'Is this company ReactVancouver’s current or past sponsor?',
    },
    {
      title: 'Logo',
      name: 'logo',
      type: 'figure',
    },
  ],
};
