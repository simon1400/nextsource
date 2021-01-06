import { useState } from 'react';
import Head from 'next/head'
// import sanityClient from "../lib/sanity.js";
import { useRouter } from 'next/router'

import Header from './Header'
import Footer from './Footer'
import ResponsiveMenu from '../components/ResponsiveMenu'
import Sidebar from './Sidebar'
// import query from '../queries/page'

const site_url =  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://nextsource.io'
const defaultTitle =  'NEXTSOURCE'
const defaultDescription =  'Nextsource'
const defaultImage =  `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://nextsource.io'}`
const defaultTwitter =  '@nextsource'
const defaultSep =  ' '

const Page = ({
  children,
  id,
  className,
  title,
  description,
  image,
  twitter,
  contentType,
  published,
  category,
  updated,
  noCrawl,
  homepage = false,
  tags
}) => {

  const router = useRouter()
  const [menu, setMenu] = useState(false)

  const handleMenu = (e) => {
    setMenu(!menu)
  }

  // useEffect(() => {
  //   sanityClient.fetch(query).then(res => {
  //     setGlobal({
  //       ...global,
  //       defaultTitle: res[1].endTitle || 'NEXTSOURCE'
  //     })
  //   })
  // }, [])

  const theTitle = title ? (title + defaultSep + defaultTitle).substring(0, 60) : defaultTitle;
  const theDescription = description ? description.substring(0, 155) : defaultDescription;
  const theImage = image ? image : defaultImage;

  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#80bd01" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{theTitle}</title>
        <link rel="canonical" href={global.site_url+router.asPath} />
        <meta itemProp="name" content={theTitle} />
        <meta itemProp="description" content={theDescription} />
        <meta itemProp="image" content={theImage} />
        <meta name="description" content={theDescription} />
        {/*<meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={global.defaultTwitter} />
        <meta name="twitter:title" content={theTitle} />
        <meta name="twitter:description" content={theDescription} />
        <meta name="twitter:creator" content={twitter || global.defaultTwitter} />
        <meta name="twitter:image:src" content={theImage} />*/}
        <meta property="og:title" content={theTitle} />
        <meta property="og:type" content={contentType || 'website'} />
        <meta property="og:url" content={site_url+router.asPath} />
        <meta property="og:image" content={theImage} />
        <meta property="og:description" content={theDescription} />
        <meta property="og:site_name" content="NEXTSOURCE" />
        {/*<meta property="fb:app_id" content={global.facebook_app_id} />*/}

        {published && <meta name="article:published_time" content={published} />}
        {category && <meta name="article:section" content={category} />}
        {updated && <meta name="article:modified_time" content={updated} />}
        {noCrawl && <meta name="robots" content="noindex, nofollow" />}
        {tags && <meta name="article:tag" content={tags} />}

      </Head>
      {/*<Sidebar />*/}
      <div id={id} className="wrapper">
        <Header homepage={homepage} handleMenu={handleMenu}/>
        <ResponsiveMenu menu={menu} handleMenu={handleMenu} />
        {children}
        <Footer />
      </div>
      <div className="clearfix"></div>
      <script src="/js/jquery.min.js"></script>
      <script src="/js/popper.js"></script>
      <script src="/js/bootstrap.min.js"></script>
      <script src="/js/plugin/slick.min.js"></script>
      <script src="/js/plugin/html5lightbox.js"></script>
      <script src="/js/wow.min.js"></script>
      <script src="/js/script.js"></script>
    </>
  );
}


export default Page
