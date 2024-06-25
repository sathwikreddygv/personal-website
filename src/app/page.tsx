
import Navbar from "@/components/Navbar";
import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";
import { roboto_mono, pacifico, satisfy, rochester, allura, tangerine, sofia } from './fonts'
import { IconChevronsDown } from "@tabler/icons-react";
import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { HiExternalLink } from "react-icons/hi";
import { LuExternalLink } from "react-icons/lu";


export default function Home() {
	return (
		<div className="relative z-10">
			<div className="h-[100vh] relative ">
				<div className={`text-center absolute text-[36px] sm:text-[64px] w-full flex flex-col items-center justify-center top-[50vh] -translate-y-1/2 ${pacifico.className}`}>
					<div>Hi. I'm Sathwik.</div>
					<div>A Software Developer.</div>
					<IconChevronsDown id="scroll-icon" className="w-8 sm:w-12 h-8 sm:h-12" stroke={2}/>
				</div>
			</div>
			<div className="mt-8 px-28 text-center">
				<div>I'm a Fullstack developer from India. Here, you'll find my projects, blog and some cool animations :)</div>
				<div>Feel free to explore and connect with me. Thanks for visiting!</div>
			</div>
			<main>
				<ul id="cards">
					<li className="card" id="card_1">
						<div className=" flex justify-center">
							{/* <div>
								<h2>whatsapp-period-tracking-bot</h2>
								<p>A Period Tracking Whatsapp Bot for Women</p>
								<p><a href="https://github.com/sathwikreddygv/whatsapp-period-tracking-bot" target="_blank" className="flex items-center justify-center text-blue-600 underline text-lg cp">Github Repo <LuExternalLink className="h-5 w-5 ml-2"/></a></p>
							</div>
							<figure> */}
								<img className="w-[600px] h-72 revealing-image" src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg" alt="Image description"/>
							{/* </figure> */}
						</div>
					</li>
					{/* <li className="card" id="card_2">
						<div className="card__content">
							<div>
								<h2>Pdf Crunch</h2>
								<p>An In-browser PDF Compressor</p>
								<p><a href="https://pdf-compressor-vercel.vercel.app/" target="_blank" className="flex items-center justify-center text-blue-600 underline text-lg cp">Try it out <LuExternalLink className="h-5 w-5 ml-2"/></a></p>
								<p><a href="https://github.com/sathwikreddygv/pdf-crunch" target="_blank" className="flex items-center justify-center text-blue-600 underline text-lg cp">Github Repo <LuExternalLink className="h-5 w-5 ml-2"/></a></p>
							</div>
							<figure>
								<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-1.jpg" alt="Image description"/>
							</figure>
						</div>
					</li>
					<li className="card" id="card_3">
						<div className="card__content">
							<div>
								<h2>Card Three</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
								<p><a href="#top" className="btn btn--accent">Read more</a></p>
							</div>
							<figure>
								<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-3.jpg" alt="Image description"/>
							</figure>
						</div>
					</li>
					<li className="card" id="card_4">
						<div className="card__content">
							<div>
								<h2>Card Four</h2>
								<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
								<p><a href="#top" className="btn btn--accent">Read more</a></p>
							</div>
							<figure>
								<img src="https://codyhouse.co/demo-tutorials/stacking-cards/assets/img/img-2.jpg" alt="Image description"/>
							</figure>
						</div>
					</li> */}
				</ul>
			</main>
			<aside>
				
			</aside>
		</div>
  );
}
