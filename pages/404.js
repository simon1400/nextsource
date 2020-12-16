const NotFound = () => {
  return (
    <div className="error-page">
  		<div className="container">
  			<div className="error-content">
  				<h2>OMG!</h2>
  				<h3>You broke the site!</h3>
  				<p>Don’t worry. It’s just 404 page not found.</p>
  				<h4>Please try Search or go back to <a href="#" title="">Homepage.</a></h4>
  				<div className="widget-search">
  					<form>
  						<input type="text" name="search" placeholder="Search" />
  						<button type="submit"><img src="images/search.svg" alt="" /></button>
  					</form>
  				</div>
  			</div>
  		</div>
  	</div>
  )
}

export default NotFound
