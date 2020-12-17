import sanityClient from "../lib/sanity.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Page from '../layout/Page'
import query from '../queries/homepage'
import Preloader from '../components/Preloader'

const imageBuilder = imageUrlBuilder(sanityClient);
const urlFor = source => imageBuilder.image(source);

var ms = 0

export async function getServerSideProps() {
  const homepage = await sanityClient.fetch(query)

  return {
    props: {
      homepage: homepage[0]
    }
  }
}

const Homepage = ({homepage}) => {

  if(!homepage){
    return <Preloader />
  }

  return (
    <Page homepage title={homepage.meta.head} description={homepage.meta.description}>
      <section className="main-banner">
  			<div className="banner-slider">
  				<div className="banner-slide">
  					<div className="container">
  						<div className="main-banner-text">
  							{homepage?.label && <span className="wow fadeInUp" data-wow-delay="300ms">{homepage.label}</span>}
  							<h1 className="wow fadeInUp" data-wow-delay="450ms">{homepage.title} <span></span></h1>
  							<p className="wow fadeInUp" data-wow-delay="600ms"><BlockContent blocks={homepage.content} /></p>
                <a href="#" className="wow fadeInUp btn-default" data-wow-delay="900ms">Get a quote</a>
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
  					<p className="bdy"><BlockContent blocks={homepage.services.content} /> </p>
  				</div>
  			</div>
  			{!!homepage.services.services.length && <div className="services-section">
  				<div className="container">
  					<div className="row svs-carousel">
              {homepage.services.services.map((item, index) => {
                ms += 300
                return(<div className="col-lg-3">
    							<div className="service-col wow fadeIn" data-wow-delay={ms+'ms'}>
    								<div className="svs-icon">
    									<img src="images/icon5.svg" alt="" />
    								</div>
    								<h3>UI/UX and Brand Identity</h3>
    								<a href="services.html" title="" className="btn-default2">read more</a>
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
  					<div className="col-lg-5">
  						<div className="counter-section">
  							<div className="row">
  								<div className="col-lg-6 col-md-6 col-sm-6 col-12">
  									<div className="counter-div gradient-bg1 wow fadeInUp" data-wow-delay="300ms">
  										<h2>{homepage.why.points.point1.number} <sup>+</sup></h2>
  										<span>{homepage.why.points.point1.description}</span>
  									</div>
  								</div>
  								<div className="col-lg-6 col-md-6 col-sm-6 col-12">
  									<div className="counter-div scnd-dv gradient-bg1 wow fadeInUp" data-wow-delay="600ms">
  										<h2>{homepage.why.points.point2.number} <sup>+</sup></h2>
  										<span>{homepage.why.points.point2.description}</span>
  									</div>
  								</div>
  								<div className="col-lg-6 col-md-6 col-sm-6 col-12">
  									<div className="counter-div gradient-bg2 wow fadeInUp" data-wow-delay="900ms">
  										<h2>{homepage.why.points.point3.number} <sup>+</sup></h2>
  										<span>{homepage.why.points.point3.description}</span>
  									</div>
  								</div>
  								<div className="col-lg-6 col-md-6 col-sm-6 col-12">
  									<div className="counter-div frht gradient-bg2 wow fadeInUp" data-wow-delay="1200ms">
  										<h2>{homepage.why.points.point4.number} <sup>+</sup></h2>
  										<span>{homepage.why.points.point4.description}</span>
  									</div>
  								</div>
  							</div>
  						</div>
  					</div>
  					<div className="col-lg-7">
  						<div className="why-we-sec">
  							<div className="main-banner-text title-hd wow fadeInUp" data-wow-delay="300ms">
  								<span>{homepage.why.label}</span>
  								<h1>{homepage.why.title} <span></span></h1>
  								<BlockContent blocks={homepage.why.content} />
  							</div>
  							<ul className="our-features-list wow fadeInDown" data-wow-delay="600ms">
  								{homepage.why.benefits.map((item, index) => <li key={index}>
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
