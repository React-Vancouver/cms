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
      title: 'Contributor',
      description:
        'Is this person an organizer, volunteer or contributor to ReactVancouver?',
      name: 'isContributor',
      type: 'boolean',
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
    prepare: ({
      firstName = '[first name]',
      lastName = '[last name]',
      title = '[title]',
      company = '[company]',
      media,
    }) => ({
      title: `${firstName} ${lastName}`,
      subtitle: `${title} @ ${company}`,
      media,
    }),
  },
};
