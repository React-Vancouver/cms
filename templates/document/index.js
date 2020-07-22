module.exports = {
  description: 'Generate a document schema',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Name now, please!',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'schemas/documents/{{dashCase name}}.js',
      templateFile: 'templates/document/template.hbs',
    },
    {
      type: 'append',
      path: 'schemas/schema.js',
      pattern: `/* PLOP_INJECT_DOCUMENT_IMPORT */`,
      template: `import {{camelCase name}} from './documents/{{dashCase name}}';`,
    },
    {
      type: 'append',
      path: 'schemas/schema.js',
      pattern: `/* PLOP_INJECT_DOCUMENT */`,
      template: `    {{camelCase name}},`,
    },
  ],
};
