// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './documents/blockContent'
import siteConfig from './documents/siteConfig'
import route from './documents/route'
import page from './documents/page'

import cta from './objects/cta'
import hero from './objects/hero'
import imageSection from './objects/imageSection'
import textSection from './objects/textSection'
import embedHtml from './objects/embedHTML'
import figure from './objects/figure'
import internalLink from './objects/internalLink'
import link from './objects/link'
import portableText from './objects/portableText'
import simplePortableText from './objects/simplePortableText'
import appointments from './objects/appointments'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteConfig,
    route,
    page,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    cta,
    hero,
    imageSection,
    textSection,
    embedHtml,
    figure,
    internalLink,
    link,
    portableText,
    simplePortableText,
    appointments,
  ]),
})
