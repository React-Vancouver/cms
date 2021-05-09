import S from '@sanity/desk-tool/structure-builder';
import { FaCompass, FaInfo } from 'react-icons/fa';


const hiddenDocuments = (document) =>
  !['navigation', 'aside', 'seo', 'aboutUs'].includes(document.getId());

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
      S.listItem()
        .title('About US')
        .child(S.document().schemaType('aboutUs').documentId('aboutUs'))
        .icon(FaInfo),
      S.divider(),
      ...S.documentTypeListItems().filter(hiddenDocuments),
    ]);
