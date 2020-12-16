import Page from '../../layout/Page'

const CaseWork = () => {
  return(
    <Page>
    <section className="cases-section black-bg">
			<div className="page-content">
				<div className="fixed-bg bg7"></div>
				<h2 className="page-number">01.</h2>
				<div className="container">
					<div className="main-banner-text mw-100 title-hd wow fadeInUp mgb-100" data-wow-delay="300ms">
						<span>portfolio</span>
						<h1>Website design for OP company</h1>
					</div>
					<div className="case-work-page">
						<div className="case-thumbnail">
							<img src="https://via.placeholder.com/1140x570" alt="" className="w-100">
							<div className="cz-controls">
								<a href="#" title="" className="float-left">prev</a>
								<a href="#" title="" className="float-right">next</a>
								<div className="clearfix"></div>
							</div>
						</div>
						<div className="case-content">
							<h3>About Project</h3>
							<p>The agency builds personal brands for entrepreneurs and corporates. We built a page with all kind of information about the service, examples of results, case studies, testimonials of old clients and pricing packages. We like to build new websites especially for any kind of marketing agencies. At this time we created a landing page for marketing agency.</p>
							<ul className="mg-list">
								<li>
									<h3>Client:</h3>
									<span>OP Company</span>
								</li>
								<li>
									<h3>Start date:</h3>
									<span>Mar 21, 2020</span>
								</li>
								<li>
									<h3>Category:</h3>
									<span>UI/UX Design</span>
								</li>
								<li>
									<h3>Finish date:</h3>
									<span>Apr 21, 2020</span>
								</li>
							</ul>
							<div className="clearfix"></div>
							<a href="#" title="" className="btn-default">Visit website</a>
							<a href="#" title="" className="st-btn"><img src="images/share.svg" alt="" />  Share</a>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="sec-block3">
			<div className="fixed-bg bg4"></div>
			<h2 className="page-number">02.</h2>
			<div className="container">
				<div className="section-head">
					<div className="main-banner-text title-hd wow fadeInUp" data-wow-delay="300ms">
						<span>portfolio</span>
						<h1>Related cases <span></span></h1>
						<p className="bdy">We always try to implement our creative ideas at the highest level. You can see it by looking at our portfolio.</p>
					</div>
					<a href="cases.html" title="" className="btn-default2">view all cases <img src="images/icon4.svg" alt="" /></a>
					<div className="clearfix"></div>
				</div>
				<div className="pft-items">
					<div className="row">
						<div className="col-lg-4 col-md-6 col-sm-6 col-12">
							<div className="pft-item wow fadeInUp" data-wow-delay="300ms">
								<img src="https://via.placeholder.com/380x490" alt="" />
								<div className="figcaption">
									<h2><a href="#" title="">Web site design for curious company</a></h2>
									<a href="#" title=""><img src="images/icon9.svg" alt="" /></a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6 col-12">
							<div className="pft-item wow fadeInUp" data-wow-delay="600ms">
								<img src="https://via.placeholder.com/380x490" alt="" />
								<div className="figcaption">
									<h2><a href="#" title="">Web site design for curious company</a></h2>
									<a href="#" title=""><img src="images/icon9.svg" alt="" /></a>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-6 col-sm-6 col-12">
							<div className="pft-item wow fadeInUp" data-wow-delay="900ms">
								<img src="https://via.placeholder.com/380x490" alt="" />
								<div className="figcaption">
									<h2><a href="#" title="">Web site design for curious company</a></h2>
									<a href="#" title=""><img src="images/icon9.svg" alt="" /></a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </Page>
  )
}

export default CaseWork
