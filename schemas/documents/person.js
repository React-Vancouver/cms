export default {
  title: 'Person',
  name: 'person',
  type: 'document',
  fields: [
    {
      title: 'First Name',
      name: 'firstName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Last Name',
      name: 'lastName',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Company',
      name: 'company',
      type: 'string',
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'bioPortableText',
    },
    {
      title: 'Photo',
      name: 'avatar',
      type: 'figure',
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
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      title: 'title',
      company: 'company',
      media: 'avatar',
    },
    prepare: ({ firstName, lastName, title, company, media }) => ({
      title: `${firstName || '[first name]'} ${lastName || '[last name]'}`,
      subtitle: `${title || '[title]'} @ ${company || '[company]'}`,
      media,
    }),
  },
};
