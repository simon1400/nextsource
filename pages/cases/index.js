import Page from '../../layout/Page'

const Cases = () => {
  return(
    <Page>
    <section className="cases-section">
			<div className="page-content">
				<div className="fixed-bg bg7 bg-without-color"></div>
				<h2 className="page-number">01.</h2>
				<div className="container">
					<div className="main-banner-text title-hd wow fadeInUp mgb-100" data-wow-delay="300ms">
						<span>portfolio</span>
						<h1>Our amazing cases <span></span></h1>
						<p className="bdy">You may be interested in what we can offer you. More services you can find below. We do everything at a high level.</p>
					</div>
					<section className="options">
						<div className="option-isotop">
							<ul id="filter" className="option-set filters-nav" data-option-key="filter">
								<li><a data-option-value="*" className="selected">All</a></li>
								<li><a data-option-value=".ui-ux">UI/UX and Brand</a></li>
								<li><a data-option-value=".apps">Apps</a></li>
								<li><a data-option-value=".seo">SEO & SMM</a></li>
								<li><a data-option-value=".web">Web</a></li>
								<li><a data-option-value=".e-commerce">E-commerce</a></li>
								<li><a data-option-value=".marketing">marketing</a></li>
							</ul>
						</div>
					</section>
					<div className="masonary-layout">
						<div className="row">
							<div className="masonary">
								<div className="col-lg-4 col-md-6 col-sm-6 apps web">
									<div className="tema-col">
										<img src="https://via.placeholder.com/380x490" alt="" />
										<div className="team-caption">
											<h3><a href="case-work.html" title="">Maria Yaltekee</a></h3>
											<span>Graphic Designer</span>
											<a href="case-work.html" title="" className=""><img src="images/arrow-right.svg" alt="" /></a>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6 web marketing">
									<div className="tema-col">
										<img src="https://via.placeholder.com/380x490" alt="" />
										<div className="team-caption">
											<h3><a href="case-work.html" title="">Maria Yaltekee</a></h3>
											<span>Graphic Designer</span>
											<a href="case-work.html" title="" className=""><img src="images/arrow-right.svg" alt="" /></a>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6 e-commerce ui-ux seo">
									<div className="tema-col">
										<img src="https://via.placeholder.com/380x490" alt="" />
										<div className="team-caption">
											<h3><a href="case-work.html" title="">Maria Yaltekee</a></h3>
											<span>Graphic Designer</span>
											<a href="case-work.html" title="" className=""><img src="images/arrow-right.svg" alt="" /></a>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6 marketing e-commerce seo">
									<div className="tema-col">
										<img src="https://via.placeholder.com/380x490" alt="" />
										<div className="team-caption">
											<h3><a href="case-work.html" title="">Maria Yaltekee</a></h3>
											<span>Graphic Designer</span>
											<a href="case-work.html" title="" className=""><img src="images/arrow-right.svg" alt="" /></a>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6 e-commerce apps seo">
									<div className="tema-col">
										<img src="https://via.placeholder.com/380x490" alt="" />
										<div className="team-caption">
											<h3><a href="case-work.html" title="">Maria Yaltekee</a></h3>
											<span>Graphic Designer</span>
											<a href="case-work.html" title="" className=""><img src="images/arrow-right.svg" alt="" /></a>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6 col-sm-6 ui-ux apps">
									<div className="tema-col">
										<img src="https://via.placeholder.com/380x490" alt="" />
										<div className="team-caption">
											<h3><a href="case-work.html" title="">Maria Yaltekee</a></h3>
											<span>Graphic Designer</span>
											<a href="case-work.html" title="" className=""><img src="images/arrow-right.svg" alt="" /></a>
										</div>
									</div>
								</div>
							</div>
							<div className="full-div w-100 text-center mt-70">
								<a href="#" title="" className="btn-default">Load more</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </Page>
  )
}

export default Cases
