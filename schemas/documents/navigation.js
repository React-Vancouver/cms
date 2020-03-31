export default {
  title: 'Navigation',
  name: 'navigation',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{ type: 'link' }],
    },
  ],
  preview: {
    select: {},
    prepare: () => ({ title: 'Navigation' }),
  },
};
