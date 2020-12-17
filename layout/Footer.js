import {useEffect, useState} from 'react'
import sanityClient from "../lib/sanity.js";
import query from '../queries/footer'
import BlockContent from "@sanity/block-content-to-react";

const Footer = () => {

  const [footer, setFooter] = useState({})

  useEffect(() => {
    sanityClient.fetch(query).then(res => {
      setFooter(res[0])
    })
  }, [])

  if(!footer?.contact){
    return ''
  }


  return(
    <footer>
			<div className="container">
				<div className="top-footer">
					<div className="row">
						<div className="col-lg-6">
							<div className="tp-contact wow fadeInUp" data-wow-delay="300ms">
								<div className="main-banner-text title-hd">
									<span>{footer.newsletter.label}</span>
									<h1>{footer.newsletter.title} <span></span></h1>
									<p className="bdy"><BlockContent blocks={footer.newsletter.content} /></p>
								</div>
								<form className="newsletter-form">
									<input type="email" name="email" placeholder="Email" />
									<button type="submit"><img src="images/send.svg" alt="" /></button>
								</form>
								<div className="clearfix"></div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="testimonial-sec wow fadeInDown" data-wow-delay="300ms">
								<div className="testi-head">
									<div className="testi-thumb">
										<img src="https://via.placeholder.com/70x70" alt="" />
									</div>
									<div className="testi-info">
										<h3>{footer.newsletter.ceo.name}</h3>
										<span>{footer.newsletter.ceo.position}</span>
									</div>
								</div>
								<BlockContent blocks={footer.newsletter.ceo.content} />
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
								<h3 className="widget-title">Working hours:</h3>
								<p>{footer.contact.workTime}</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="widget widget-para wow fadeInUp" data-wow-delay="900ms">
								<h3 className="widget-title">Address:</h3>
								<p>{footer.contact.address}</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="widget widget-para wow fadeInDown" data-wow-delay="1200ms">
								<h3 className="widget-title">Hit us up:</h3>
								<span>{footer.contact.tel}</span>
								<p>{footer.contact.email}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
  )
}

export default Footer
