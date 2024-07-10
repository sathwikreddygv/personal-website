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
import { BsArrowRight, BsGithub } from "react-icons/bs";
import { useCallback, useContext, useEffect, useState } from "react";
import useIntersectionObserver from "@/components/IntersectionObserver";
import { useElements } from "./elements";
import { useInView } from "react-intersection-observer";
import { ActiveTabContext } from "@/contexts/ActiveTabContext";

const options = {
	threshold: 0.1,
  };

export default function Home() {
	const { refsArray, inViewArray } = useElements();
	const { active_tab, set_active_tab } = useContext(ActiveTabContext)
	// const [ref1, inView1] = useInView(options);
	// const [ref2, inView2] = useInView(options);
	// const [ref3, inView3] = useInView(options);
	// const [ref4, inView4] = useInView(options);

	useEffect(() => {
		console.log('inView1inView1', inViewArray)
		if (inViewArray[3]) {
			set_active_tab('contact-header')
		} else if(inViewArray[2]) {
			set_active_tab('blogs-header')
		} else if(inViewArray[1]) {
			set_active_tab('projects-header')
		} else if(inViewArray[0]) {
			set_active_tab('about-header')
		}
	}, [inViewArray[0], inViewArray[1], inViewArray[2], inViewArray[3]]);

	// const refsArray = [ref1, ref2, ref3, ref4];

	return (
		<div className="relative ">
			<div className="relative h-[100vh] bg-[#fed230] text-black">
				<svg viewBox="0 0 1440 320" className="absolute -bottom-1" xmlns="http://www.w3.org/2000/svg">
					<path fill="#000000" d="
						M0,10 C390,420 480,0 790,100 C1100,440 1200,0 1440,10 L1440,320 L0,320 Z
					"></path>
				</svg>
				<div className={`relative z-10 p-8 flex items-center justify-center flex-col pt-32`}>
					<div className="text-[42px] text-[#141309] font-bold text-center mb-4">
						<div className=" font-bold">Hi. I'm Sathwik</div>
						<div className="">A FullStack Developer</div>
					</div>
					<div className="text-base text-[#b18a09] text-center">
						<div ref={refsArray[0]} id='about-header'>{"I'm a Software developer from India. Here, you'll find my projects, blogs and social profiles."}</div>
						<div className="mt-2">Feel free to explore and connect with me. Thanks for stopping by!</div>
					</div>
				</div>
				<div className="w-full sm:w-1/2 h-[400px] bg-[#110f12] absolute rounded-lg -bottom-[150px] left-1/2 -translate-x-1/2">
					<div className="circle flex items-center justify-center mt-48">
						<div className="item"><img className="h-12 w-12" src="/icons/javascript.svg" /></div>
						<div className="item"><img className="h-14 w-14" src="/icons/react.svg" /></div>
						<div className="item"><img className="h-14 w-14" src="/icons/tailwind.svg" /></div>
						<div className="item"><img className="h-14 w-14" src="/icons/node.svg" /></div>
						<div className="item"><img className="h-12 w-12" src="/icons/redis.svg" /></div>
						<div className="item"><img className="h-16 w-16" src="/icons/mysql.svg" /></div>
						<div className="item"><img className="h-20 w-20" src="/icons/go.svg" /></div>
						<div className={`text-white text-base`}>My Tech Stack</div>
					</div>
				</div>
			</div>
			{/* <div className="h-[100vh] relative bg-[#FFDB58] text-black">
				<div className={`translate-fancy text-center absolute text-[36px] sm:text-[64px] w-full flex flex-col items-center justify-center top-[50vh] -translate-y-1/2 ${pacifico.className}`}>
					<div>{"Hi. I'm Sathwik."}</div>
					<div>A Software Developer.</div>
					<IconChevronsDown id="scroll-icon" className="w-8 sm:w-12 h-8 sm:h-12" stroke={2}/>
				</div>
			</div> */}
			<div>
			</div>
			<div className="p-4 mt-60 mx-4 sm:mx-32 flex flex-col ">
				{/* <div ref={refsArray[1]} className="text-xl" id='projects-header'>Projects</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 mt-4">
					<div className="col-span-1 mb-8  flex flex-col items-center justify-center">
						<div className="relative group inline-block rounded-lg" >
							<a className="cp group-hover:block hidden absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-3/4 " target="_blank" href="https://github.com/sathwikreddygv/redis-written-in-go">
								<img src="/icons/github.svg" />
							</a>
							<img className="dark:border-[hsla(0,0%,100%,.3)] border-2 revealing-image-from-right group-hover:blur-md h-48 w-auto sm:h-64 rounded-lg hover:scale-110" src="/images/godis.jpeg" />
							<div className="mt-2">
								<div className="text-base mb-2">godisDB</div>
								<div className="text-sm opacity-60">A Redis-like Database in Go</div>
							</div>
						</div>
					</div>
					<div className="col-span-1 mb-8 flex flex-col items-center justify-center">
						<div className="relative group inline-block rounded-lg" >
							<a className="cp group-hover:block hidden absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-3/4 " target="_blank" href="https://github.com/sathwikreddygv/whatsapp-period-tracking-bot">
								<img src="/icons/github.svg" />
							</a>
							<img className="dark:border-[hsla(0,0%,100%,.3)] border-2 revealing-image-from-left group-hover:blur-md h-48 w-auto sm:h-64 rounded-lg hover:scale-110" src="/images/flow_friend.jpeg" />
							<div className="mt-2">
								<div className="text-base mb-2">Flow Friend</div>
								<div className="text-sm opacity-60">A Period tracking Whatsapp bot for Women</div>
							</div>
						</div>
					</div>
					<div className="col-span-1 mb-8 flex flex-col items-center justify-center">
						<div className="relative group inline-block rounded-lg" >
							<div className="cp group-hover:flex hidden absolute z-10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-3/4 items-center justify-center">
								<a className="cp" target="_blank" href="https://github.com/sathwikreddygv/pdf-crunch">
									<img src="/icons/github.svg" />
								</a>
								<a className="cp" target="_blank" href="https://pdf-compressor-vercel.vercel.app/">
									<img src="/icons/web.svg" className="w-24 h-24 ml-4 opacity-60"/>
								</a>
							</div>
							<img className="dark:border-[hsla(0,0%,100%,.3)] border-2 revealing-image-from-right group-hover:blur-md h-48 w-auto sm:h-64 rounded-lg hover:scale-110" src="/images/pdf_crunch.jpeg" />
							<div className="mt-2">
								<div className="text-base mb-2 text-left">Pdf Crunch</div>
								<div className="text-sm opacity-60">An In-browser Pdf Compressor</div>
							</div>
						</div>
					</div>
					<div className="col-span-1 mb-8 flex flex-col items-center justify-center cp" onClick={() => window.open("https://github.com/sathwikreddygv")}>
						<div className="inline-block rounded-lg">
							<div className="revealing-image-from-left relative inline-block dark:border-[hsla(0,0%,100%,.3)] border-2 rounded-lg" >
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
								<img className="w-[450px] h-48 sm:h-64 rou text-leftnded-lg blur-md" src="/images/gaudmire.png" />
							</div>
							<div className="mt-2">
								<div className="text-base mb-2">@sathwikreddygv</div>
								<div className="text-sm opacity-60">Click to visit my github profile</div>
							</div>
						</div>
					</div>
				</div> */}
				<div className="flex items-center flex-wrap sm:flex-nowrap">
					<img className="flex-2 dark:border-[hsla(0,0%,100%,.3)] border-2 group-hover:blur-md w-80 h-48 rounded-lg " src="/images/godis.jpeg" />
					<div className="flex-3 sm:ml-32 mt-4 sm:mt-0">
						<div className="text-xxl font-bold mb-2 sm:mb-4">GodisDB</div>
						<div className="text-base opacity-60">{"GodisDB is a Redis-like in-memory key-value Database but multithreaded unlike Redis. It supports a lot of Redis commands and can also be connected through redis-cli."}</div>
					</div>
				</div>
				<div className="flex items-center flex-wrap sm:flex-nowrap mt-16">
					<img className="sm:hidden flex-2 sm:ml-32 dark:border-[hsla(0,0%,100%,.3)] border-2 group-hover:blur-md w-80 h-48 rounded-lg " src="/images/flow_friend.jpeg" />
					<div className="flex-3 mt-4 sm:mt-0">
						<div className="text-xxl font-bold mb-2 sm:mb-4">Flow Friend</div>
						<div className="text-base opacity-60">{"Flow Friend is a Period Tracking Whatsapp Bot for Women. It is designed to help users track their menstrual cycles. The bot provides features such as period tracking and reminders."}</div>
					</div>
					<img className="hidden sm:block flex-2 sm:ml-32 dark:border-[hsla(0,0%,100%,.3)] border-2 group-hover:blur-md w-80 h-48 rounded-lg " src="/images/flow_friend.jpeg" />
				</div>
				<div className="flex items-center flex-wrap sm:flex-nowrap mt-16">
					<img className="flex-2 dark:border-[hsla(0,0%,100%,.3)] border-2 group-hover:blur-md w-80 h-48 rounded-lg " src="/images/pdf_crunch.jpeg" />
					<div className="flex-3 sm:ml-32 mt-4 sm:mt-0">
						<div className="text-xxl font-bold mb-2 sm:mb-4">Pdf Crunch</div>
						<div className="text-base opacity-60">{"Pdf Crunch is an In-browser PDF Compressor designed to reduce the size of your PDF documents, making it easier to share and store documents."} </div>
					</div>
				</div>
			</div>
			<div className="p-4 mx-4 sm:mx-16 md:mx-32 mt-16 border border-dashed rounded-large">
				<div ref={refsArray[2]} className="text-xl" id='blogs-header'>Blogs</div>
				<a className="flex mt-4 cp" target="_blank" href="https://sathwikreddygv.blog/building-my-own-redis-in-go-part-1">
					<img className="dark:border-[hsla(0,0%,100%,.3)] border-2 w-24 h-16 mt-1 rounded-md" src="/images/godis.jpeg" />
					<div className="flex-1 min-w-0 flex flex-col ml-4">
						<div className="text-base">
							Building my own Redis in Go - Part 1
						</div>
						<div className="text-sm opacity-50 mt-1">
							{"Introduction I've always wanted to understand how Redis works internally and how its features are built. So, I decided to create my own version of Redis, but in Go (Redis is actually built in C). The name 'godisDB' came naturally when merging Go and ..."}
						</div>
					</div>
				</a>
				<hr className="opacity-50 my-4"/>
				<a className="flex mt-4 cp" target="_blank" href="https://sathwikreddygv.blog/understanding-scroll-driven-animations-in-css">
					<img className="dark:border-[hsla(0,0%,100%,.3)] border-2 w-24 h-16 mt-1 rounded-md" src="/images/blog3.avif" />
					<div className="flex-1 min-w-0 flex flex-col ml-4">
						<div className="text-base">
							Understanding Scroll Driven Animations in CSS
						</div>
						<div className="text-sm opacity-50 mt-1">
						{"Scroll-driven animations are 'animations that are triggered as the user scrolls through a webpage,' according to ChatGPT. I always wanted to build a personal website with cool scroll-based animations..."}
						</div>
					</div>
				</a>
				<hr className="opacity-50 my-4"/>
				<a className="flex mt-4 cp" target="_blank" href="https://sathwikreddygv.blog/wtf-is-an-event-loop-in-javascript">
					<img className="dark:border-[hsla(0,0%,100%,.3)] border-2 w-24 h-16 mt-1 rounded-md" src="/images/blog2.avif" />
					<div className="flex-1 min-w-0 flex flex-col ml-4">
						<div className="text-base">
							WTF is an event loop in Javascript
						</div>
						<div className="text-sm opacity-50 mt-1">
						{"You probably already know that JavaScript is a single-threaded language as you read this blog. However, JavaScript can carry out asynchronous actions that may appear to be occurring in ..."}
						</div>
					</div>
				</a>

				<div className="text-center mt-6 mb-2 text-md">View more at <a href="https://sathwikreddygv.blog" target="_blank" className="underline text-[#0078ff]">https://sathwikreddygv.blog</a></div>
			</div>
			<div className="mt-16 flex flex-col items-center justify-center mb-32">
				<div ref={refsArray[3]} className="text-base mb-2" id='contact-header'>You can find me on X and Linkedin as well!</div>
				<div className="flex items-center justify-center">
					<img src="/images/sathwik-github.jpeg" className="rounded-full h-24 w-24 mt-4 mr-12" />
					<div>
						<a target="_blank" href="https://x.com/sathwikreddygv7" className="mt-4 text-sm flex items-center"><img src="/icons/twitter.svg" className="w-6 h-6 "/> <div><BsArrowRight strokeWidth={1} className="mx-2"/></div> @sathwikreddygv7</a>
						<a target="_blank" href="https://github.com/sathwikreddygv" className="mt-4 text-sm flex items-center"><BsGithub className="w-6 h-6"/> <div><BsArrowRight strokeWidth={1} className="mx-2"/></div> @sathwikreddygv</a>
						<a target="_blank" href="https://linkedin.com/in/sathwikreddygv" className="mt-4 text-sm flex items-center"><img src="/icons/linkedin.svg" className="w-6 h-6 "/> <div><BsArrowRight strokeWidth={1} className="mx-2"/></div> @sathwikreddygv</a>
						<a target="_blank" href="https://sathwikreddygv.blog" className="mt-4 text-sm flex items-center"><img src="/icons/hashnode.svg" className="w-6 h-6 "/> <div><BsArrowRight strokeWidth={1} className="mx-2"/></div> @sathwikreddygv</a>
					</div>
				</div>
			</div>
		</div>
  );
}
