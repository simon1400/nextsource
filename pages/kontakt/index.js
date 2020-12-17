import Page from '../../layout/Page'
import query from '../../queries/contact'
import sanityClient from "../../lib/sanity.js";
import Preloader from '../../components/Preloader'
import BlockContent from "@sanity/block-content-to-react";

export async function getServerSideProps() {
  const global = await sanityClient.fetch(query)
  return {
    props: {
      contact: global.contact
    }
  }
}

const Contact = ({contact}) => {

  return(
    <Page title="Kontakt">
      <section className="sec-block2">
  			<h2 className="page-number bottom">01.</h2>
  			<div className="fixed-bg bg-darky"></div>
  			<div className="container">
  				<div className="contact-us-page">
  					<div className="row">
  						<div className="col-lg-6">
  							<div className="contact-list">
  								<div className="contact-lzt">
  									<div className="contact-icon">
  										<img src="images/c-icon1.svg" alt="" />
  									</div>
  									<div className="contact-nfo">
  										<h3>Address:</h3>
  										<p>{contact.address}</p>
  									</div>
  								</div>
  								<div className="contact-lzt">
  									<div className="contact-icon">
  										<img src="images/c-icon2.svg" alt="" />
  									</div>
  									<div className="contact-nfo">
  										<h3>Hit us up:</h3>
  										<span>{contact.tel}</span>
  										<span>{contact.email}</span>
  									</div>
  								</div>
  								<div className="contact-lzt">
  									<div className="contact-icon">
  										<img src="images/c-icon3.svg" alt="" />
  									</div>
  									<div className="contact-nfo">
  										<h3>Working Schedule:</h3>
  										<p>{contact.workTime}</p>
  									</div>
  								</div>
  							</div>
  						</div>
  						<div className="col-lg-6">
  							<div className="contact-section-page">
  								<div className="main-banner-text title-hd wow fadeInUp" data-wow-delay="300ms">
  									<span>{contact.label}</span>
  									<h1>{contact.title} <span></span></h1>
  									<BlockContent blocks={contact.content} />
  								</div>
  								<div className="contact-form wow fadeInUp" data-wow-delay="300ms">
  									<form method="post" action="#" id="contact-form">
  	                                    <div className="response"></div>
  										<div className="row">
  											<div className="col-lg-6 col-md-6 col-sm-6">
  												<div className="input-field">
  													<input type="text" name="name" className="name" placeholder="Name" />
  												</div>
  											</div>
  											<div className="col-lg-6 col-md-6 col-sm-6">
  												<div className="input-field">
  													<input type="text" name="email" className="email" placeholder="Email" />
  												</div>
  											</div>
  											<div className="col-lg-12">
  												<div className="input-field">
  													<textarea name="message" placeholder="Message"></textarea>
  												</div>
  											</div>
  											<div className="col-lg-12">
  												<div className="input-field m-0">
  													<button type="button" className="btn-default" id="submit">Send message</button>
  												</div>
  											</div>
  										</div>
  									</form>
  								</div>
  							</div>
  						</div>
  					</div>
  				</div>
  			</div>
  		</section>

  		<section className="map-section">
  			<iframe src="https://maps.google.com/maps?hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(Crope)&amp;ie=UTF8&amp;t=p&amp;z=7&amp;iwloc=B&amp;output=embed"></iframe>
  		</section>
    </Page>
  )
}

export default Contact
