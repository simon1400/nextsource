import Page from '../../layout/Page'

const Contact = () => {
  return(
    <Page>
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
										<p>27 Division St, New York, NY 10002, USA</p>
									</div>
								</div>
								<div className="contact-lzt">
									<div className="contact-icon">
										<img src="images/c-icon2.svg" alt="" />
									</div>
									<div className="contact-nfo">
										<h3>Hit us up:</h3>
										<span>+1 845 631 78 49</span>
										<span>info@sitename.com</span>
									</div>
								</div>
								<div className="contact-lzt">
									<div className="contact-icon">
										<img src="images/c-icon3.svg" alt="" />
									</div>
									<div className="contact-nfo">
										<h3>Working Schedule:</h3>
										<p>Mon - Fri: 9 am - 6 pm Sat, Sun: Holiday</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="contact-section-page">
								<div className="main-banner-text title-hd wow fadeInUp" data-wow-delay="300ms">
									<span>contact us</span>
									<h1>Send a message <span></span></h1>
									<p className="bdy">We always try to implement our creative ideas at the highest level. Tell us about your project and we will make it work. </p>
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
