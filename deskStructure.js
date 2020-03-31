import S from '@sanity/desk-tool/structure-builder';
import FaCompass from 'react-icons/lib/fa/compass';
import FaInfo from 'react-icons/lib/fa/info';

const hiddenDocuments = (document) =>
  !['navigation', 'aside', 'seo'].includes(document.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Navigation')
        .child(S.document().schemaType('navigation').documentId('navigation'))
        .icon(FaCompass),
      S.listItem()
        .title('Aside')
        .child(S.document().schemaType('aside').documentId('aside'))
        .icon(FaCompass),
      S.listItem()
        .title('SEO')
        .child(S.document().schemaType('seo').documentId('seo'))
        .icon(FaInfo),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocuments),
    ]);
