import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '7df9e8583bad499d8ae52b58d4805f54',
  //https://namli.notion.site/simpleBlog-2972881742ff48aba1839bfef35a46d5

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Migrantopedia',
  domain: 'migrantopedia.com',
  author: 'Impulse Social',

  // open graph metadata (optional)
  description: 'MIGRANTopedia of Barcelona” ( MIGRANTopedia) aims to provide and facilitate information that foreigners who want to relocate to Barcelona are looking for.',

  // social usernames (optional)
  twitter: 'impuls.social',
  // github: 'transitive-bullshit',
  linkedin: 'company/impuls-social',
  instagram: 'impuls.social',
  facebook: 'impuls.social',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '7af36970b3324e5faf62e493627f3f82'
    },
    {
      title: 'Contact',
      pageId: 'eb1bb4f177d947fb84e1264c4d1b5638'
    }
  ]
})
