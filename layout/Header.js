import Link from 'next/link'
import {useEffect, useState} from 'react'
import sanityClient from "../lib/sanity.js";
import query from '../queries/header'
import { useRouter } from 'next/router'
import translate from '../data/translate'


const Header = ({homepage, handleMenu}) => {

  const [header, setHeader] = useState({})

  const router = useRouter()

  useEffect(() => {
    sanityClient.fetch(query(router.locale)).then(res => setHeader(res))
  }, [])

  return(
    <header className={homepage ? 'pb' : 'black-bg'}>
			<div className="container">
				<div className="header-content">
					<div className="logo">
            <Link href="/">
  						<a><img src="images/logo.png" alt="" /></a>
            </Link>
					</div>
					<nav>
						<ul>
							<li><Link href="/"><a>{translate.home[router.locale]}</a></Link></li>
							<li><Link href="/sluzby"><a>{translate.service[router.locale]}</a></Link></li>
							<li><Link href="/kontakt"><a>{translate.contact[router.locale]}</a></Link></li>
						</ul>
					</nav>
					<div className="right-side-hd">
						<span><a href={`tel:${header.contact}`}>{header.contact}</a></span>
            <span className="lang-btn"><Link href="/" locale="cs"><a>CS</a></Link></span>
            <span className="lang-btn"><Link href="/en" locale="en"><a>EN</a></Link></span>
						<Link href="/kontakt"><a title="" className="btn-default">{translate.quote[router.locale]}</a></Link>
					</div>
					<button className="menu-btn" onClick={e => handleMenu(e)}>
						<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0.711397 17.6361C-0.0696518 18.4171 -0.0696518 19.6834 0.711397 20.4645C1.49245 21.2455 2.75878 21.2455 3.53982 20.4645L20.5104 3.49393C21.2914 2.71288 21.2914 1.44655 20.5104 0.665498C19.7293 -0.115551 18.463 -0.11555 17.682 0.665498L0.711397 17.6361Z" fill="white"/>
							<path d="M2.12558 31.7782C1.34453 30.9971 1.34453 29.7308 2.12558 28.9498L19.0961 11.9792C19.8772 11.1981 21.1435 11.1981 21.9246 11.9792C22.7056 12.7602 22.7056 14.0266 21.9246 14.8076L4.95401 31.7782C4.17296 32.5592 2.90663 32.5592 2.12558 31.7782Z" fill="white"/>
							<path d="M13.4393 33.1924C12.6583 32.4113 12.6583 31.145 13.4393 30.364L30.4099 13.3934C31.1909 12.6124 32.4572 12.6124 33.2383 13.3934C34.0193 14.1745 34.0193 15.4408 33.2383 16.2218L16.2677 33.1924C15.4867 33.9734 14.2204 33.9734 13.4393 33.1924Z" fill="white"/>
						</svg>
					</button>
					<div className="clearfix"></div>
				</div>
			</div>

		</header>
  )
}

export default Header
