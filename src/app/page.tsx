"use client"

import Navbar from "@/components/Navbar";
import ThemeSwitch from "@/components/ThemeSwitch";
import Image from "next/image";
import { roboto_mono, pacifico, satisfy, rochester, allura, tangerine, sofia } from './fonts'
import { IconChevronsDown } from "@tabler/icons-react";
import { FaExternalLinkAlt, FaExternalLinkSquareAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { HiExternalLink } from "react-icons/hi";
import { LuExternalLink } from "react-icons/lu";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
	return (
		<div className="relative ">
			<div className="h-[100vh] relative ">
				<div className={`text-center absolute text-[36px] sm:text-[64px] w-full flex flex-col items-center justify-center top-[50vh] -translate-y-1/2 ${pacifico.className}`}>
					<div>{"Hi. I'm Sathwik."}</div>
					<div>A Software Developer.</div>
					<IconChevronsDown id="scroll-icon" className="w-8 sm:w-12 h-8 sm:h-12" stroke={2}/>
				</div>
			</div>
			<div className={`mt-8 px-4 sm:px-28 text-center text-md ${roboto_mono.className}`}>
				<div>{"I'm a Fullstack developer from India. Here, you'll find my projects, blogs and some cool animations :)"}</div>
				<div className="mt-2">Feel free to explore and connect with me. Thanks for visiting!</div>
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
			<div className="p-4 mx-4 sm:mx-16">
				<div className="text-xl">Projects</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 mt-4">
					<div className="col-span-1 mb-8 sm:h-64 ">
						<div className="relative group inline-block dark:border-[hsla(0,0%,100%,.3)] border-2 rounded-lg" >
							<a className="cp group-hover:block hidden absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 " target="_blank" href="https://github.com/sathwikreddygv/redis-written-in-go">
								<img src="/icons/github.svg" />
							</a>
							<img className="revealing-image-from-right group-hover:blur-md h-48 w-auto sm:h-64 rounded-lg hover:scale-110" src="/images/godis.jpeg" />
						</div>
						<div className="mt-2">
							<div className="text-base mb-2">godisDB</div>
							<div className="text-sm opacity-60">A Redis-like Database in Go</div>
						</div>
					</div>
					<div className="col-span-1 mb-8">
						<div className="relative group inline-block dark:border-[hsla(0,0%,100%,.3)] border-2 rounded-lg" >
							<a className="cp group-hover:block hidden absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 " target="_blank" href="https://github.com/sathwikreddygv/whatsapp-period-tracking-bot">
								<img src="/icons/github.svg" />
							</a>
							<img className="revealing-image-from-left group-hover:blur-md h-48 w-auto sm:h-64 rounded-lg hover:scale-110" src="/images/flow_friend.jpeg" />
						</div>
						<div className="mt-2">
							<div className="text-base mb-2">Flow Friend</div>
							<div className="text-sm opacity-60">A Period tracking Whatsapp bot for Women</div>
						</div>
					</div>
					<div className="col-span-1 mb-8">
						<div className="relative group inline-block dark:border-[hsla(0,0%,100%,.3)] border-2 rounded-lg" >
							<div className="cp group-hover:flex hidden absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center justify-center">
								<a className="cp" target="_blank" href="https://github.com/sathwikreddygv/pdf-crunch">
									<img src="/icons/github.svg" />
								</a>
								<a className="cp" target="_blank" href="https://pdf-compressor-vercel.vercel.app/">
									<img src="/icons/web.svg" className="w-24 h-24 ml-4 opacity-60"/>
								</a>
							</div>
							<img className="revealing-image-from-right group-hover:blur-md h-48 w-auto sm:h-64 rounded-lg hover:scale-110" src="/images/pdf_crunch.jpeg" />
						</div>
						<div className="mt-2">
							<div className="text-base mb-2">Pdf Crunch</div>
							<div className="text-sm opacity-60">An In-browser Pdf Compressor</div>
						</div>
					</div>
					<div className="col-span-1 mb-8 cp" onClick={() => window.open("https://github.com/sathwikreddygv")}>
						<div className="inline-block dark:border-[hsla(0,0%,100%,.3)] border-2 rounded-lg">
							<div className="revealing-image-from-left relative inline-block " >
								<div className="cp flex absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 items-center justify-center">
									<a className="cp text-white flex-col items-center justify-center" target="_blank" href="https://github.com/sathwikreddygv">
										<div className="flex items-center justify-center">
											<img src="/icons/github-white.svg" />
											<div><BsArrowRight strokeWidth={1} className="mx-2"/></div>
											<img src="/images/sathwik-github.jpeg" className="rounded-full h-24 w-24" />
										</div>
										<div className="text-sm flex items-center justify-center mt-4">Click to view more </div>
									</a>
								</div>
								<img className=" w-[450px] h-48 sm:h-64 rounded-lg blur-md" src="/images/gaudmire.png" />
							</div>
						</div>
						<div className="mt-2">
							<div className="text-base mb-2">@sathwikreddygv</div>
							<div className="text-sm opacity-60">Click to visit my github profile</div>
						</div>
					</div>
				</div>
			</div>
			<div className="p-4 mx-4 sm:mx-16 mt-16 border border-dashed h-[400px] rounded-large">
				<div className="text-xl">Blogs</div>
			</div>
		</div>
  );
}
