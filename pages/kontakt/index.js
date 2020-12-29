import {useState} from 'react'

import Page from '../../layout/Page'
import query from '../../queries/contact'
import sanityClient from "../../lib/sanity.js";
import Preloader from '../../components/Preloader'
import BlockContent from "@sanity/block-content-to-react";
import translate from '../../data/translate'
import { AxiosEMAILING } from "../../restClient";

export async function getServerSideProps({locale}) {
  const global = await sanityClient.fetch(query(locale))

  return {
    props: {
      contact: global.contact || {},
      locale
    }
  }
}

const Contact = ({contact, locale}) => {

  const [emailData, setEmailData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = e => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault();

    AxiosEMAILING.post('/sendEmail', { templateName: '_WebContactForm', emailData }).then((res) => {
      setEmailData({
        name: '',
        email: '',
        message: ''
      })
      alert('Děkujeme, vaše zpráva byla odeslána')
    })
  }

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
  										<h3>{translate.address[locale]}</h3>
  										<p>{contact.address}</p>
  									</div>
  								</div>
  								<div className="contact-lzt">
  									<div className="contact-icon">
  										<img src="images/c-icon2.svg" alt="" />
  									</div>
  									<div className="contact-nfo">
  										<h3>{translate.hitUs[locale]}</h3>
  										<span>{contact.tel}</span>
  										<span>{contact.email}</span>
  									</div>
  								</div>
  								<div className="contact-lzt">
  									<div className="contact-icon">
  										<img src="images/c-icon3.svg" alt="" />
  									</div>
  									<div className="contact-nfo">
  										<h3>{translate.workHours[locale]}</h3>
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
  									<form method="post" action="#" id="contact-form" onSubmit={e => onSubmit(e)}>
  	                                    <div className="response"></div>
  										<div className="row">
  											<div className="col-lg-6 col-md-6 col-sm-6">
  												<div className="input-field">
  													<input type="text" name="name" className="name" placeholder={translate.name[locale]} onChange={e => handleChange(e)} />
  												</div>
  											</div>
  											<div className="col-lg-6 col-md-6 col-sm-6">
  												<div className="input-field">
  													<input type="text" name="email" className="email" placeholder="Email" onChange={e => handleChange(e)} />
  												</div>
  											</div>
  											<div className="col-lg-12">
  												<div className="input-field">
  													<textarea name="message" placeholder={translate.message[locale]} onChange={e => handleChange(e)}></textarea>
  												</div>
  											</div>
  											<div className="col-lg-12">
  												<div className="input-field m-0">
  													<button type="button" className="btn-default" id="submit">{translate.sendMessage[locale]}</button>
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
  			{/*<iframe src="https://maps.google.com/maps?hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(Crope)&amp;ie=UTF8&amp;t=p&amp;z=7&amp;iwloc=B&amp;output=embed"></iframe>*/}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28424.57030392066!2d16.59163197782151!3d49.20134291654005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712945cbcc37507%3A0x59ce96bb17f4208!2zTGlkaWNrw6EgMjAwNiwgNjAyIDAwIEJybm8tc3TFmWVkLcSMZXJuw6EgUG9sZSwg0KfQtdGF0LjRjw!5e0!3m2!1sru!2sit!4v1609249806297!5m2!1sru!2sit" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
  		</section>
    </Page>
  )
}

export default Contact
