import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// DOCUMENTS ===================================================================
/* PLOP_INJECT_DOCUMENT_IMPORT */
import talk from './documents/talk';
import person from './documents/person';
import navigation from './documents/navigation';
import aside from './documents/aside';
import seo from './documents/seo';
import company from './documents/company';
import event from './documents/event';
import tag from './documents/tag';

// OBJECTS =====================================================================
/* PLOP_INJECT_OBJECT_IMPORT */
import articlePortableText from './objects/articlePortableText';
import bioPortableText from './objects/bioPortableText';
import brand from './objects/brand';
import figure from './objects/figure';
import link from './objects/link';
import simplePortableText from './objects/simplePortableText';

export default createSchema({
  name: 'website',
  types: schemaTypes.concat([
    /* PLOP_INJECT_DOCUMENT */
    talk,
    navigation,
    aside,
    seo,
    person,
    event,
    company,
    tag,

    /* PLOP_INJECT_OBJECT */
    articlePortableText,
    bioPortableText,
    brand,
    figure,
    link,
    simplePortableText,
  ]),
});
