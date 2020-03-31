export default {
  title: 'Aside',
  name: 'aside',
  type: 'document',
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
  fields: [
    {
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{ type: 'brand' }],
    },
  ],
  preview: {
    select: {},
    prepare: () => ({ title: 'Aside' }),
  },
};
