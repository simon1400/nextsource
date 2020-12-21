import Page from '../../layout/Page'
import Preloader from '../../components/Preloader'
import query from '../../queries/services'
import sanityClient from "../../lib/sanity.js";
import BlockContent from "@sanity/block-content-to-react";

export async function getServerSideProps({locale}) {
  const services = await sanityClient.fetch(query(locale))

  return {
    props: {
      services
    }
  }
}

const Services = ({services}) => {

  if(!services){
    return <Preloader />
  }

  return(
    <Page title={services.meta?.head} description={services.meta?.description}>
      <section className="sec-block3 pt-0">
  			<div className="fixed-bg bg7"></div>
  			<h2 className="page-number">01.</h2>
  			<div className="container">
  				<div className="main-banner-text title-hd max-width-100">
  					<span>{services.label}</span>
  					<h1>{services.title} <span></span></h1>
  					<BlockContent blocks={services.content} />
  				</div>
  			</div>
  			{!!services.services?.length && <div className="services-section without-carousel">
  				<div className="container">
  					<div className="row">
  						{services.services.map((item, index) => <div key={index} className="col-lg-4 col-md-4 col-sm-6">
  							<div className="service-col">
  								<div className="svs-icon">
  									<img src="images/icon5.svg" alt="" />
  								</div>
  								<h3>{item.title}</h3>
  								{item.categories?.length && <ul>
                    {item.categories.map((itemCat, indexCat) => <li key={indexCat}>{itemCat.category}</li>)}
                  </ul>}
  							</div>
  						</div>)}
  					</div>
  				</div>
  			</div>}
  		</section>

  		<section className="partners-section">
  			<div className="container">
  				<div className="partners-logo">
  					<div className="partner-col">
  						<img src="https://via.placeholder.com/125x77" alt="" />
  					</div>
  					<div className="partner-col">
  						<img src="https://via.placeholder.com/126x56" alt="" />
  					</div>
  					<div className="partner-col">
  						<img src="https://via.placeholder.com/67x91" alt="" />
  					</div>
  					<div className="partner-col">
  						<img src="https://via.placeholder.com/96x96" alt="" />
  					</div>
  					<div className="partner-col">
  						<img src="https://via.placeholder.com/103x65" alt="" />
  					</div>
  					<div className="partner-col">
  						<img src="https://via.placeholder.com/125x77" alt="" />
  					</div>
  					<div className="partner-col">
  						<img src="https://via.placeholder.com/126x56" alt="" />
  					</div>
  					<div className="partner-col">
  						<img src="https://via.placeholder.com/67x91" alt="" />
  					</div>
  					<div className="partner-col">
  						<img src="https://via.placeholder.com/96x96" alt="" />
  					</div>
  					<div className="partner-col">
  						<img src="https://via.placeholder.com/103x65" alt="" />
  					</div>
  				</div>
  			</div>
  		</section>

    </Page>
  )
}

export default Services
