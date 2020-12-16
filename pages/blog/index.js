import Page from '../../layout/Page'

const Blog = () => {
  return(
    <Page>
      <section className="black-bg">
  			<div className="page-content">
  				<div className="fixed-bg bg7"></div>
  				<h2 className="page-number">01.</h2>
  				<div className="container">
  					<div className="main-banner-text mw-100 title-hd wow fadeInUp mgb-100" data-wow-delay="300ms">
  						<span>blog</span>
  						<h1>articles & news at crope</h1>
  						<p>You may be interested in our technologies. We want to share more helpful infomation with you about our digital life and methods.</p>
  					</div>
  					<div className="blog-page">
  						<div className="row">
  							<div className="col-lg-6 col-md-6 col-sm-6">
  								<div className="blog_post main">
  									<div className="blog-thumbnail">
  										<img src="https://via.placeholder.com/555x500" alt="" />
  									</div>
  									<div className="blog_info">
  										<ul className="meta">
  											<li>
  												<span className="category">Corporate</span>
  											</li>
  											<li>
  												<span>Apr 06, 2020</span>
  											</li>
  										</ul>
  										<h2 className="post-title"><a href="blog-single.html" title="">Best 20 useful tools for people who like to spend time in ...</a></h2>
  										<a href="blog-single.html" title=""><img src="images/icon9.svg" alt="" /></a>
  									</div>
  								</div>
  							</div>
  							<div className="col-lg-6 col-md-6 col-sm-6">
  								<div className="blog_post main">
  									<div className="blog-thumbnail">
  										<img src="https://via.placeholder.com/555x500" alt="" />
  									</div>
  									<div className="blog_info">
  										<ul className="meta">
  											<li>
  												<span className="category">Web</span>
  											</li>
  											<li>
  												<span>Apr 06, 2020</span>
  											</li>
  										</ul>
  										<h2 className="post-title"><a href="blog-single.html" title="">Where to find clients and how to develop cool products</a></h2>
  										<a href="blog-single.html" title=""><img src="images/icon9.svg" alt="" /></a>
  									</div>
  								</div>
  							</div>
  							<div className="col-lg-6 col-md-6 col-sm-6">
  								<div className="blog_post main">
  									<div className="blog-thumbnail">
  										<img src="https://via.placeholder.com/555x500" alt="" />
  									</div>
  									<div className="blog_info">
  										<ul className="meta">
  											<li>
  												<span className="category">Development</span>
  											</li>
  											<li>
  												<span>Apr 06, 2020</span>
  											</li>
  										</ul>
  										<h2 className="post-title"><a href="blog-single.html" title="">If you want to learn more about design look at this</a></h2>
  										<a href="blog-single.html" title=""><img src="images/icon9.svg" alt="" /></a>
  									</div>
  								</div>
  							</div>
  							<div className="col-lg-6 col-md-6 col-sm-6">
  								<div className="blog_post main">
  									<div className="blog-thumbnail">
  										<img src="https://via.placeholder.com/555x500" alt="" />
  									</div>
  									<div className="blog_info">
  										<ul className="meta">
  											<li>
  												<span className="category">Interface</span>
  											</li>
  											<li>
  												<span>Apr 06, 2020</span>
  											</li>
  										</ul>
  										<h2 className="post-title"><a href="blog-single.html" title="">Best 20 useful tools for people who like to spend time in drawing</a></h2>
  										<a href="blog-single.html" title=""><img src="images/icon9.svg" alt="" /></a>
  									</div>
  								</div>
  							</div>
  						</div>
  						<div className="full-div w-100 text-center mt-40">
  							<a href="#" title="" className="btn-default">Load More</a>
  						</div>
  					</div>
  				</div>
  			</div>
  		</section>
    </Page>
  )
}

export default Blog
