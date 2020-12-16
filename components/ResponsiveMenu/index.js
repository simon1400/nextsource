const ResponsiveMenu = () => {
  return(
    <div className="responsive-mobile-menu">
			<div className="responsive-logo">
				<img src="images/logo.png" alt="" />
			</div>
			<ul>
				<li><a href="services.html" title="">Services</a>
					<ul>
						<li><a href="service-details.html" title="">Service Details</a></li>
					</ul>
				</li>
				<li><a href="cases.html" title="">Cases</a>
					<ul>
						<li><a href="case-work.html" title="">Cases Work</a></li>
					</ul>
				</li>
				<li><a href="contact.html" title="">Contact us</a></li>
			</ul>
		</div>
  )
}

export default ResponsiveMenu
