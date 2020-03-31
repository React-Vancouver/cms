import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// DOCUMENTS ===================================================================
import navigation from './documents/navigation';
import aside from './documents/aside';
import seo from './documents/seo';

// OBJECTS =====================================================================
import link from './objects/link';
import brand from './objects/brand';
import figure from './objects/figure';

export default createSchema({
  name: 'website',
  types: schemaTypes.concat([navigation, aside, seo, link, brand, figure]),
});
