import sanityClient from "../lib/sanity.js";
import BlockContent from "@sanity/block-content-to-react";
import Page from '../layout/Page'
import query from '../queries/homepage'
import Preloader from '../components/Preloader'
import translate from '../data/translate'
import Link from 'next/link'
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanityClient);
const urlFor = source => imageBuilder.image(source)

var ms = 0

export async function getServerSideProps({locale}) {
  const homepage = await sanityClient.fetch(query(locale))

  return {
    props: {
      homepage: homepage[locale],
      locale
    }
  }
}

const Homepage = ({homepage, locale}) => {

  if(!homepage){
    return <Preloader />
  }

  return (
    <Page homepage title={homepage.meta?.head} description={homepage.meta?.description}>
      <section className="main-banner">
  			<div className="banner-slider">
  				<div className="banner-slide">
  					<div className="container">
  						<div className="main-banner-text">
  							{homepage?.label && <span>{homepage.label}</span>}
  							<h1>{homepage.title} <span></span></h1>
  							<p><BlockContent blocks={homepage.content} /></p>
                <Link href="/kontakt"><a className="btn-default">{translate.quote[locale]}</a></Link>
  						</div>
  					</div>
  				</div>
  			</div>
  		</section>

  		<section className="sec-block">
  			<div className="fixed-bg bg3"></div>
  			<h2 className="page-number">01</h2>
  			<div className="container">
  				<div className="main-banner-text title-hd ">
  					{homepage.services?.label && <span>{homepage.services.label}</span>}
  					<h1>{homepage.services.title} <span></span></h1>
            <BlockContent className="bdy" blocks={homepage.services.content} />
  				</div>
  			</div>
  			{!!homepage.services?.services?.length && <div className="services-section">
  				<div className="container">
  					<div className="row">
              {homepage.services.services.map((item, index) => <div className="col-lg-3" key={index}>
                <div className="service-col">
                  <div className="svs-icon">
                    <img src={urlFor(item.icon).url()} alt="" />
                  </div>
                  <h3>{item.title}</h3>
                  <ul>
                    {item.categories.map((itemCat, indexCat) => <li key={indexCat}>{itemCat}</li>)}
                  </ul>
                  {/* <a href="services.html" title="" className="btn-default2">{translate.more[locale]}</a>*/}
                </div>
              </div>)}
  					</div>
  				</div>
  			</div>}
  		</section>

  		<section className="sec-block why-choose-us">
  			<div className="fixed-bg bg6"></div>
  			<h2 className="page-number">02</h2>
  			<div className="container">
  				<div className="row">
  					{!!homepage.why.tech?.length && <div className="col-lg-5">
  						<div className="counter-section">
  							<div className="row">
  								{homepage.why.tech.map((item, index) => <div key={index} className="col-lg-6 col-md-6 col-sm-6 col-12">
  									<div className="counter-div gradient-bg1">
  										{/*<h2>{item?.logo}</h2>*/}
                      <img className="techLogo" src={urlFor(item.logo).url()} alt={item.description} />
  										<span>{item.description}</span>
  									</div>
  								</div>)}
  							</div>
  						</div>
  					</div>}
  					<div className="col-lg-7">
  						<div className="why-we-sec">
  							<div className="main-banner-text title-hd">
  								<span>{homepage.why.label}</span>
  								<h1>{homepage.why.title} <span></span></h1>
  								<BlockContent blocks={homepage.why.content} />
  							</div>
  							<ul className="our-features-list">
  								{homepage.why?.benefits?.length && homepage.why.benefits.map((item, index) => <li key={index}>
  									<h3>{item.title}</h3>
  									<p>{item.description}</p>
  								</li>)}
  							</ul>
  						</div>
  					</div>
  				</div>
  			</div>
  		</section>
    </Page>
  )
}

export default Homepage
