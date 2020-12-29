import sanityClient from "../lib/sanity.js";
import BlockContent from "@sanity/block-content-to-react";
import Page from '../layout/Page'
import query from '../queries/homepage'
import Preloader from '../components/Preloader'
import translate from '../data/translate'
import Link from 'next/link'

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
  							{homepage?.label && <span className="wow fadeInUp" data-wow-delay="300ms">{homepage.label}</span>}
  							<h1 className="wow fadeInUp" data-wow-delay="450ms">{homepage.title} <span></span></h1>
  							<p className="wow fadeInUp" data-wow-delay="600ms"><BlockContent blocks={homepage.content} /></p>
                <Link href="/kontakt"><a className="wow fadeInUp btn-default" data-wow-delay="900ms">{translate.quote[locale]}</a></Link>
  						</div>
  					</div>
  				</div>
  			</div>
  		</section>

  		<section className="sec-block">
  			<div className="fixed-bg bg3"></div>
  			<h2 className="page-number">01</h2>
  			<div className="container">
  				<div className="main-banner-text title-hd svs-header wow fadeInLeft" data-wow-delay="500ms">
  					{homepage.services?.label && <span>{homepage.services.label}</span>}
  					<h1>{homepage.services.title} <span></span></h1>
            <BlockContent className="bdy" blocks={homepage.services.content} />
  				</div>
  			</div>
  			{!!homepage.services?.services?.length && <div className="services-section">
  				<div className="container">
  					<div className="row svs-carousel">
              {homepage.services.services.map((item, index) => {
                ms += 300
                return(<div className="col-lg-3" key={index}>
    							<div className="service-col wow fadeIn" data-wow-delay={ms+'ms'}>
    								{/*<div className="svs-icon">
    									<img src="images/icon5.svg" alt="" />
    								</div>*/}
    								<h3>{item.title}</h3>
                    <ul>
                      {item.categories.map((itemCat, indexCat) => <li key={indexCat}>{itemCat}</li>)}
                    </ul>
    								{/* <a href="services.html" title="" className="btn-default2">{translate.more[locale]}</a>*/}
    							</div>
    						</div>)
              })}
  					</div>
  				</div>
  			</div>}
  		</section>

  		<section className="sec-block why-choose-us">
  			<div className="fixed-bg bg6"></div>
  			<h2 className="page-number">02</h2>
  			<div className="container">
  				<div className="row">
  					{/*<div className="col-lg-5">
  						<div className="counter-section">
  							<div className="row">
  								<div className="col-lg-6 col-md-6 col-sm-6 col-12">
  									<div className="counter-div gradient-bg1 wow fadeInUp" data-wow-delay="300ms">
  										<h2>{homepage.why.points.point1?.number} <sup>+</sup></h2>
  										<span>{homepage.why.points.point1.description}</span>
  									</div>
  								</div>
  								<div className="col-lg-6 col-md-6 col-sm-6 col-12">
  									<div className="counter-div scnd-dv gradient-bg1 wow fadeInUp" data-wow-delay="600ms">
  										<h2>{homepage.why.points.point2?.number} <sup>+</sup></h2>
  										<span>{homepage.why.points.point2.description}</span>
  									</div>
  								</div>
  								<div className="col-lg-6 col-md-6 col-sm-6 col-12">
  									<div className="counter-div gradient-bg2 wow fadeInUp" data-wow-delay="900ms">
  										<h2>{homepage.why.points.point3?.number} <sup>+</sup></h2>
  										<span>{homepage.why.points.point3.description}</span>
  									</div>
  								</div>
  								<div className="col-lg-6 col-md-6 col-sm-6 col-12">
  									<div className="counter-div frht gradient-bg2 wow fadeInUp" data-wow-delay="1200ms">
  										<h2>{homepage.why.points.point4?.number} <sup>+</sup></h2>
  										<span>{homepage.why.points.point4.description}</span>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>*/}
  					<div className="col-lg-7">
  						<div className="why-we-sec">
  							<div className="main-banner-text title-hd wow fadeInUp" data-wow-delay="300ms">
  								<span>{homepage.why.label}</span>
  								<h1>{homepage.why.title} <span></span></h1>
  								<BlockContent blocks={homepage.why.content} />
  							</div>
  							<ul className="our-features-list wow fadeInDown" data-wow-delay="600ms">
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
