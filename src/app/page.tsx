
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
			<div className={`mt-8 px-4 sm:px-28 text-center`}>
				<div>I'm a Fullstack developer from India. Here, you'll find my projects, blogs and some cool animations :)</div>
				<div>Feel free to explore and connect with me. Thanks for visiting!</div>
			</div>
			<div className="circle flex items-center justify-center mt-64 mb-64">
				<div className="item"><img className="h-12 w-12" src="/icons/javascript.svg" /></div>
				<div className="item"><img className="h-14 w-14" src="/icons/react.svg" /></div>
				<div className="item"><img className="h-14 w-14" src="/icons/tailwind.svg" /></div>
				<div className="item"><img className="h-14 w-14" src="/icons/node.svg" /></div>
				<div className="item"><img className="h-12 w-12" src="/icons/redis.svg" /></div>
				<div className="item"><img className="h-16 w-16" src="/icons/mysql.svg" /></div>
				<div className="item"><img className="h-20 w-20" src="/icons/go.svg" /></div>
				<div className={``}>My Tech Stack</div>
			</div>
			<div className="p-4 mx-4 sm:mx-16 border border-dashed rounded-large">
				<div className="text-xl">Projects</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-16 mt-4">
					<div className="col-span-1 flex items-center justify-center">
						<img className="revealing-image-from-right w-128 h-64 rounded-lg" src="/images/godis.jpeg" />
					</div>
					<div className="col-span-1 flex items-center justify-center">
						<img className="revealing-image-from-top w-128 h-64 rounded-lg" src="/images/flow_friend.jpeg" />
					</div>
					<div className="col-span-1 flex items-center justify-center">
						<img className="revealing-image-from-bottom w-128 h-64 rounded-lg" src="/images/pdf_crunch.jpeg" />
					</div>
					<div className="col-span-1 flex items-center justify-center">
						<img className="revealing-image-from-left w-128 h-64 rounded-lg" src="/images/godis.jpeg" />
					</div>
				</div>
			</div>
			<div className="p-4 mx-4 sm:mx-16 mt-16 border border-dashed h-[400px] rounded-large">
				<div className="text-xl">Blogs</div>
			</div>
		</div>
  );
}
