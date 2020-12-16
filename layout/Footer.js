const Footer = () => {
  return(
    <footer>
			<div className="container">
				<div className="top-footer">
					<div className="row">
						<div className="col-lg-6">
							<div className="tp-contact wow fadeInUp" data-wow-delay="300ms">
								<div className="main-banner-text title-hd">
									<span>newsletter</span>
									<h1>be always <br /> in touch <span></span></h1>
									<p className="bdy">We are grateful to know you are interested in our content and services. Subscribe</p>
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
										<h3>Katerina Wilson</h3>
										<span>CEO at Crope Design Company</span>
									</div>
								</div>
								<p>We never give up. Сhallenges make us stronger and more professional. Keep in mind. Beware ;)</p>
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
								<p>Copyright © 2020 Crope.</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="widget widget-para wow fadeInDown" data-wow-delay="600ms">
								<h3 className="widget-title">Working hours:</h3>
								<p>Mon - Fri: 9 am - 6 pm Sat, Sun: Holiday</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="widget widget-para wow fadeInUp" data-wow-delay="900ms">
								<h3 className="widget-title">Address:</h3>
								<p>27 Division St, New York, NY 10002, USA</p>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 col-sm-6 col-12">
							<div className="widget widget-para wow fadeInDown" data-wow-delay="1200ms">
								<h3 className="widget-title">Hit us up:</h3>
								<span>+1 845 631 78 49</span>
								<p>info@sitename.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
  )
}

export default Footer
