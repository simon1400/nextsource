import {useEffect, useState} from 'react'
import sanityClient from "../lib/sanity.js";
import imageUrlBuilder from "@sanity/image-url";
import query from '../queries/footer'
import BlockContent from "@sanity/block-content-to-react";
import { useRouter } from 'next/router'
import translate from '../data/translate'
const imageBuilder = imageUrlBuilder(sanityClient);
const urlFor = source => imageBuilder.image(source)

const Footer = () => {

  const [footer, setFooter] = useState({})
  const router = useRouter()

  useEffect(() => {
    sanityClient.fetch(query(router.locale)).then(res => {
      setFooter(res)
    })
  }, [])
  useEffect(() => {
    sanityClient.fetch(query(router.locale)).then(res => {
      setFooter(res)
    })
  }, [router.locale])

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

  // if(!footer?.contact){
  //   return ''
  // }


  return(
    <footer>
			<div className="container">
				<div className="top-footer">
					<div className="row">
            <div className="col-lg-6">
              <div className="contact-section-page">
                <div className="main-banner-text title-hd wow fadeInUp" data-wow-delay="300ms">
                  <span>{footer.contact?.label}</span>
                  <h1>{footer.contact?.title} <span></span></h1>
                  <BlockContent blocks={footer.contact?.content} />
                </div>
                <div className="contact-form wow fadeInUp" data-wow-delay="300ms">
                  <form method="post" action="#" id="contact-form" onSubmit={e => onSubmit(e)}>
                                      <div className="response"></div>
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="input-field">
                          <input type="text" name="name" className="name" placeholder={translate.name[router.locale]} onChange={e => handleChange(e)} />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="input-field">
                          <input type="text" name="email" className="email" placeholder="Email" onChange={e => handleChange(e)} />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-field">
                          <textarea name="message" placeholder={translate.message[router.locale]} onChange={e => handleChange(e)}></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-field m-0">
                          <button type="button" className="btn-default" id="submit">{translate.sendMessage[router.locale]}</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
						<div className="col-lg-6">
							<div className="testimonial-sec wow fadeInDown" data-wow-delay="300ms">
								<div className="testi-head">
									<div className="testi-thumb">
										<img src={urlFor(footer.newsletter?.ceo?.image).width(70).height(70).url()} alt="" />
									</div>
									<div className="testi-info">
										<h3>{footer.newsletter?.ceo?.name}</h3>
										<span>{footer.newsletter?.ceo?.position}</span>
									</div>
								</div>
								<BlockContent blocks={footer.newsletter?.ceo?.content} />
								<img src="images/sing.png" alt="" />
							</div>
							<div className="clearfix"></div>
						</div>
					</div>
				</div>
				<div className="bottom-footer">
					<div className="row">
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="widget widget-about wow fadeInUp" data-wow-delay="300ms">
								<img src="images/logo.png" alt="" />
								<p>Copyright © 2020 Nextsource.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="widget widget-para wow fadeInDown" data-wow-delay="600ms">
								<h3 className="widget-title">{translate.workHours[router.locale]}</h3>
								<p>{footer.contact?.workTime}</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="widget widget-para wow fadeInUp" data-wow-delay="900ms">
								<h3 className="widget-title">{translate.address[router.locale]}</h3>
								<p>{footer.contact?.address}</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="widget widget-para wow fadeInDown" data-wow-delay="1200ms">
								<h3 className="widget-title">{translate.hitUs[router.locale]}</h3>
								<span>{footer.contact?.tel}</span>
								<p>{footer.contact?.email}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
  )
}

export default Footer
