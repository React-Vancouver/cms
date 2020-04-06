import moment from 'moment';

export default {
  title: 'Event',
  name: 'event',
  type: 'document',
  fields: [
    {
      title: 'Date',
      name: 'date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Virtual',
      description: 'Is it a virtual event?',
      name: 'isVirtual',
      type: 'boolean',
    },
    {
      title: 'Talks',
      name: 'talks',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'talk' }],
        },
      ],
    },
    {
      title: 'Host',
      name: 'host',
      type: 'reference',
      to: [{ type: 'company' }],
    },
    {
      title: 'Photos',
      name: 'photos',
      type: 'array',
      of: [{ type: 'figure' }],
    },
    {
      title: 'Sponsors',
      name: 'sponsors',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'company' }] }],
    },
    {
      title: 'Where to direct people?',
      description:
        'Where can people get a ticket or tune in for a virtual event?',
      name: 'eventUrl',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'date',
      subtitle: 'eventUrl',
    },
    prepare: ({ title, subtitle }) => ({
      title: title ? moment(title).format('MMM Do, YYYY') : '- -',
      subtitle: subtitle ? `${subtitle.slice(0, 30)}…` : 'no link',
    }),
  },
};
