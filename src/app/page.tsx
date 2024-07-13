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
import { BsArrowRight, BsGithub, BsLinkedin, BsMailbox, BsMailbox2Flag, BsMailboxFlag, BsTwitter, BsTwitterX, BsX } from "react-icons/bs";
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

	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
	  const handleScroll = () => {
		const scrollTop = window.scrollY;
		if (scrollTop > 500) { // Adjust this value as needed
		  setIsScrolled(true);
		} else {
		  setIsScrolled(false);
		}
	  };
	  
	  handleScroll()
	  window.addEventListener('scroll', handleScroll);
  
	  return () => {
		window.removeEventListener('scroll', handleScroll);
	  };
	}, []);
  

	// const refsArray = [ref1, ref2, ref3, ref4];

	return (
		<div className="relative mx-auto w-[100vw] 2xl:w-[100vw]">
			<div className="relative h-[90vh] sm:h-[100vh] w-[100%] bg-[#fed230] text-black">
				<svg viewBox="0 0 1440 320" className="absolute -bottom-1" xmlns="http://www.w3.org/2000/svg">
					<path fill="#000000" d="
						M0,10 C390,420 480,0 790,100 C1100,440 1200,0 1440,10 L1440,320 L0,320 Z
					"></path>
				</svg>
				<div className={`relative z-10 p-8 flex items-center justify-center flex-col pt-32`}>
					<div style={{backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)'}} className="fixed top-0 bg-transparent flex-between -my-2 w-[100vw] 2xl:w-[100vw]">
						<img src={isScrolled ? "/icons/gv_logo_white.svg" : "/icons/gv_logo.svg"} className="w-24 h-24 -mx-2 transform transition-transform duration-500 hover:rotate-360"/>
						<div className="flex-center pr-6">
							<a target="_blank" href="https://github.com/sathwikreddygv" className="text-sm flex items-center"><BsGithub className="w-6 h-6 cp mr-4 transition-transform duration-500 transform hover:rotate-360" color={isScrolled ? 'white' : 'black'}/></a>
							<a target="_blank" href="https://x.com/sathwikreddygv7" className="text-sm flex items-center"><BsTwitterX className="w-5 h-5 cp mr-4 transition-transform duration-500 transform hover:rotate-360" color={isScrolled ? 'white' : 'black'}/></a>
							{/* <BsLinkedin className="w-6 h-6 cp mr-4"/> */}
							<a target="_blank" href="https://linkedin.com/in/sathwikreddygv" className="text-sm flex items-center"><img src="/icons/linkedin.svg" className="w-6 h-6 mr-4 transition-transform duration-500 transform hover:rotate-360"/></a>
							<a target="_blank" href="https://sathwikreddygv.blog" className="text-sm flex items-center"><img src="/icons/hashnode.svg" className="w-6 h-6 transition-transform duration-500 transform hover:rotate-360"/></a>
						</div>
					</div>
					<div className="text-xl sm:text-[42px] sm:leading-normal text-[#141309] font-bold text-center mb-4">
						<div className=" font-bold">{"Hi. I'm Sathwik"}</div>
						<div className="">A FullStack Developer</div>
					</div>
					<div className="text-sm sm:text-base text-[#b18a09] text-center">
						<div ref={refsArray[0]} id='about-header'>{"I'm a Software developer from India. Here, you'll find my projects, blogs and social profiles."}</div>
						<div className="mt-2">Feel free to explore and connect with me. Thanks for stopping by!</div>
					</div>
					<div className="mt-14 sm:mt-16 border border-black px-4 py-3 rounded-lg cp fancy-button transition-transform duration-500 transform hover:rotate-1" onClick={() => window.open("https://x.com/sathwikreddygv7")}>
						Say Hello! 👋🏼
					</div>
				</div>
				<div className="w-3/4 sm:w-1/2 h-[50vh] bg-[#110f12] absolute rounded-[18px] -bottom-[23vh] sm:-bottom-[15vh] left-1/2 -translate-x-1/2 p-4 overflow-scroll flex items-center 2xl:justify-center flex-col layered-shadow-nt-lg">
					{/* <div className="circle flex items-center justify-center mt-48">
						<div className="item"><img className="h-12 w-12" src="/icons/javascript.svg" /></div>
						<div className="item"><img className="h-14 w-14" src="/icons/react.svg" /></div>
						<div className="item"><img className="h-14 w-14" src="/icons/tailwind.svg" /></div>
						<div className="item"><img className="h-14 w-14" src="/icons/node.svg" /></div>
						<div className="item"><img className="h-12 w-12" src="/icons/redis.svg" /></div>
						<div className="item"><img className="h-16 w-16" src="/icons/mysql.svg" /></div>
						<div className="item"><img className="h-20 w-20" src="/icons/go.svg" /></div>
						<div className={`text-white text-base`}>My Tech Stack</div>
					</div> */}
					<div className="text-white text-center mb-4 mt-2 ">My Tech Stack</div>
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
						<div className="col-span-1 bg-[#29272a] rounded-lg p-4 flex-center flex-col group transition-transform duration-500 transform hover:scale-90 cp">
							<img className="h-12 w-12 transition-transform duration-500 transform group-hover:rotate-360" src="/icons/javascript.svg" />
							<div className="text-white mt-4 text-base text-center" >Javascript</div>
						</div>
						<div className="col-span-1 bg-[#29272a] rounded-lg p-4 flex-center flex-col group transition-transform duration-500 transform hover:scale-90 cp">
							<img className="h-12 w-12 transition-transform duration-500 transform group-hover:rotate-360" src="/icons/react.svg" />
							<div className="text-white mt-4 text-base text-center" >ReactJS</div>
						</div>
						<div className="col-span-1 bg-[#29272a] rounded-lg p-4 flex-center flex-col group transition-transform duration-500 transform hover:scale-90 cp">
							<img className="h-12 w-12 transition-transform duration-500 transform group-hover:rotate-360" src="/icons/tailwind.svg" />
							<div className="text-white mt-4 text-base text-center" >Tailwind</div>
						</div>
						<div className="col-span-1 bg-[#29272a] rounded-lg p-4 flex-center flex-col group transition-transform duration-500 transform hover:scale-90 cp">
							<img className="h-12 w-12 transition-transform duration-500 transform group-hover:rotate-360" src="/icons/node.svg" />
							<div className="text-white mt-4 text-base text-center" >NodeJS</div>
						</div>
						<div className="col-span-1 bg-[#29272a] rounded-lg p-4 flex-center flex-col group transition-transform duration-500 transform hover:scale-90 cp">
							<img className="h-12 w-12 transition-transform duration-500 transform group-hover:rotate-360" src="/icons/redis.svg" />
							<div className="text-white mt-4 text-base text-center" >Redis</div>
						</div>
						<div className="col-span-1 bg-[#29272a] rounded-lg p-4 flex-center flex-col group transition-transform duration-500 transform hover:scale-90 cp">
							<img className="h-14 w-14 transition-transform duration-500 transform group-hover:rotate-360" src="/icons/mysql.svg" />
							<div className="text-white mt-2 text-base text-center" >MySQL</div>
						</div>
						<div className="col-span-1 bg-[#29272a] rounded-lg p-4 flex-center flex-col group transition-transform duration-500 transform hover:scale-90 cp">
							<img className="h-14 w-14 transition-transform duration-500 transform group-hover:rotate-360" src="/icons/golang-icon.svg" />
							<div className="text-white mt-2 text-base text-center" >Go</div>
						</div>
						<div className="col-span-1 bg-[#29272a] rounded-lg p-4 flex-center flex-col group transition-transform duration-500 transform hover:scale-90 cp">
							<img className="h-12 w-12 transition-transform duration-500 transform group-hover:rotate-360" src="/icons/next.svg" />
							<div className="text-white mt-4 text-base text-center" >NextJS</div>
						</div>
						<div className="hidden sm:block invisible col-span-1 bg-[#29272a] rounded-lg p-4 sm:flex-center flex-col transition-transform duration-500 transform hover:scale-90 cp"></div>
						<div className="col-span-1 bg-[#29272a] rounded-lg p-4 flex-center flex-col group transition-transform duration-500 transform hover:scale-90 cp">
							<img className="h-12 w-12 transition-transform duration-500 transform group-hover:rotate-360" src="/icons/expressjs.svg" />
							<div className="text-white mt-4 text-base text-center" >ExpressJS</div>
						</div>
						<div className="col-span-1 bg-[#29272a] rounded-lg p-4 flex-center flex-col group transition-transform duration-500 transform hover:scale-90 cp">
							<img className="h-12 w-12 transition-transform duration-500 transform group-hover:rotate-360" src="/icons/github-white.svg" />
							<div className="text-white mt-4 text-base text-center" >Github</div>
						</div>
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
				<div className="flex items-center group flex-wrap sm:flex-nowrap">
					<img className="flex-2 border-[hsla(0,0%,100%,.3)] border-2 w-80 h-48 rounded-lg transition-transform duration-500 transform group-hover:scale-95 " src="/images/godis.jpeg" />
					<div className="flex-3 text-white sm:ml-32 mt-4 sm:mt-0">
						<div className="text-xl sm:text-xxl font-bold mb-2 sm:mb-4 flex items-center">
							<div>GodisDB</div>
							<a href="https://github.com/sathwikreddygv/redis-written-in-go" target="_blank">
								<BsGithub color="white" className="w-6 h-6 sm:w-7 sm:h-7 ml-3 transition-transform duration-500 transform hover:rotate-15 cp"/>
							</a>
						</div>
						<div className="text-sm sm:text-base opacity-60">{"GodisDB is a Redis-like in-memory key-value Database but multithreaded unlike Redis. It supports a lot of Redis commands and can also be connected through redis-cli."}</div>
					</div>
				</div>
				<div className="flex items-center group flex-wrap sm:flex-nowrap mt-16">
					<img className="sm:hidden flex-2 sm:ml-32 border-[hsla(0,0%,100%,.3)] border-2 w-80 h-48 rounded-lg transition-transform duration-500 transform group-hover:scale-95 " src="/images/flow_friend.jpeg" />
					<div className="flex-3 text-white mt-4 sm:mt-0">
						<div className="text-xl sm:text-xxl font-bold mb-2 sm:mb-4 flex items-center">
							<div>Flow Friend</div>
							<a href="https://github.com/sathwikreddygv/whatsapp-period-tracking-bot" target="_blank">
								<BsGithub color="white" className="w-6 h-6 sm:w-7 sm:h-7 ml-3 transition-transform duration-500 transform hover:rotate-15 cp"/>
							</a>
						</div>
						<div className="text-sm sm:text-base opacity-60">{"Flow Friend is a Period Tracking Whatsapp Bot for Women. It is designed to help users track their menstrual cycles. The bot provides features such as period tracking and reminders."}</div>
					</div>
					<img className="hidden sm:block flex-2 sm:ml-32 border-[hsla(0,0%,100%,.3)] border-2 w-80 h-48 rounded-lg transition-transform duration-500 transform group-hover:scale-95 " src="/images/flow_friend.jpeg" />
				</div>
				<div className="flex items-center group flex-wrap sm:flex-nowrap mt-16">
					<img className="flex-2 border-[hsla(0,0%,100%,.3)] border-2 w-80 h-48 rounded-lg transition-transform duration-500 transform group-hover:scale-95 " src="/images/pdf_crunch.jpeg" />
					<div className="flex-3 text-white sm:ml-32 mt-4 sm:mt-0">
						<div className="text-xl sm:text-xxl font-bold mb-2 sm:mb-4 flex items-center">
							<div>Pdf Crunch</div>
							<a href="https://github.com/sathwikreddygv/pdf-crunch" target="_blank">
								<BsGithub color="white" className="w-6 h-6 sm:w-7 sm:h-7 ml-3 transition-transform duration-500 transform hover:rotate-15 cp"/>
							</a>
							<a href="https://pdf-compressor-vercel.vercel.app/" target="_blank">
								<img src="/icons/web.svg" className="w-6 h-6 sm:w-7 sm:h-7 ml-3 transition-transform duration-500 transform hover:rotate-15 cp"/>
							</a>
						</div>
						<div className="text-sm sm:text-base opacity-60">{"Pdf Crunch is an In-browser PDF Compressor designed to reduce the size of your PDF documents, making it easier to share and store documents."} </div>
					</div>
				</div>
				<a href="https://github.com/sathwikreddygv" target="_blank" className="group bg-[#fed230] rounded-lg p-4 flex-center mt-16 mb-8 mx-auto shadow-gray-500 shadow-md hover:shadow-gray-600 cp transition-transform duration-500 transform hover:scale-95">
					<div className="text-base sm:text-md mr-2 text-black">View More of my Projects</div>
					<BsGithub className="w-6 h-6 transform transition-transform duration-500 group-hover:rotate-360" color="black"/>
				</a>
			</div>
			{/* <svg width="100%" height="100%" viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
				<path d="M 20,50 Q 100,10 180,50 Q 100,90 20,50 Z" fill="#171818" />
			</svg> */}
			<div className="relative font-bold text-lg sm:text-[28px] leading-normal flex-center mx-9 sm:my-16 mb-16 sm:mb-32 group">
				<img className="relative z-10 h-[40vh] sm:h-[50vh] 2xl:h-[40vh] w-256 ml-8 sm:ml-16 opacity-10 transition-transform duration-700 transform group-hover:rotate-180" src="/images/Vector_2.svg" />
				<div className="absolute max-w-[500px] z-20">
					<div className="mb-2"><span className="text-[#fed230]">Crafting software</span> that prioritizes exceptional user experience brings me great joy.</div>
					<div>I document my learnings through <span className="text-[#fed230]">Technical blogs</span>, simplifying complex concepts.</div>
				</div>
			</div>
			{/* <div className="p-4 mx-4 sm:mx-16 md:mx-32 mt-8 sm:mt-16 rounded-large" style={{boxShadow:'box-shadow: 10px 10px 15px white;'}}>
				<div ref={refsArray[2]} className="text-xl" id='blogs-header'>Blogs</div>
				<a className="flex mt-4 cp" target="_blank" href="https://sathwikreddygv.blog/building-my-own-redis-in-go-part-1">
					<img className="border-[hsla(0,0%,100%,.3)] border-2 w-24 h-16 mt-1 rounded-md" src="/images/godis.jpeg" />
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
					<img className="border-[hsla(0,0%,100%,.3)] border-2 w-24 h-16 mt-1 rounded-md" src="/images/blog3.avif" />
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
					<img className="border-[hsla(0,0%,100%,.3)] border-2 w-24 h-16 mt-1 rounded-md" src="/images/blog2.avif" />
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
			</div> */}
			<div className="container mb-8 min-w-[100vw] overflow-hidden py-8">
				<a className="flex mt-4 cp glass p-6 flex-col max-w-[300px] max-h-[400px] -rotate-12" target="_blank" href="https://sathwikreddygv.blog/building-my-own-redis-in-go-part-1">
					<img className="border-[hsla(0,0%,100%,.3)] border-2  mt-1 rounded-md" src="/images/godis.jpeg" />
					<div className="flex-1 min-w-0 flex flex-col pt-4">
						<div className="text-base">
							Building my own Redis in Go - Part 1
						</div>
						<div className="text-sm opacity-50 mt-1">
							{"Introduction I've always wanted to understand how Redis works internally and how its features are built. So, I decided to create my own version of Redis, but in Go (Redis is actually built in C)..."}
						</div>
					</div>
				</a>
				<a className="flex mt-4 cp glass p-6 flex-col max-w-[300px] max-h-[400px] rotate-6" target="_blank" href="https://sathwikreddygv.blog/understanding-scroll-driven-animations-in-css">
					<img className="border-[hsla(0,0%,100%,.3)] border-2  mt-1 rounded-md" src="/images/blog3.avif" />
					<div className="flex-1 min-w-0 flex flex-col pt-4">
						<div className="text-base">
							Understanding Scroll Driven Animations in CSS
						</div>
						<div className="text-sm opacity-50 mt-1">
						{"Scroll-driven animations are 'animations that are triggered as the user scrolls through a webpage,' according to ChatGPT. I always wanted to build a personal website with cool scroll-based animations..."}
						</div>
					</div>
				</a>
				<hr className="opacity-50 my-4"/>
				<a className="flex mt-4 cp glass p-6 flex-col max-w-[300px] max-h-[400px] rotate-15" target="_blank" href="https://sathwikreddygv.blog/wtf-is-an-event-loop-in-javascript">
					<img className="border-[hsla(0,0%,100%,.3)] border-2  mt-1 rounded-md" src="/images/blog2.avif" />
					<div className="flex-1 min-w-0 flex flex-col pt-4">
						<div className="text-base">
							WTF is an event loop in Javascript
						</div>
						<div className="text-sm opacity-50 mt-1">
						{"You probably already know that JavaScript is a single-threaded language as you read this blog. However, JavaScript can carry out asynchronous actions that may appear to be occurring in ..."}
						</div>
					</div>
				</a>
			</div>
			<div className="flex-center">
				<a href="https://sathwikreddygv.blog" target="_blank" className="group rounded-lg p-4 flex-center mx-auto hover:shadow-gray-600 cp transition-transform duration-500 transform hover:scale-95">
					<div className="text-base sm:text-md mr-2 text-white">Visit <span className="font-bold text-[#fed230]">sathwikreddygv.blog</span></div>
					<img src="/icons/hashnode.svg" className="w-6 h-6 transform transition-transform duration-500 group-hover:rotate-360" />
				</a>
			</div>
			<div className="flex-center mx-4">
				<div className="mt-16 flex-center flex-col mb-4 rounded-lg py-6 px-8 bg-[#fed230] text-black">
					<div ref={refsArray[3]} className="text-lg mb-2 font-bold" id='contact-header'>Connect with me!</div>
					<div className="flex items-center justify-between">
						<div className="text-base mt-2">
							{/* You can find me on X(Twitter) and Linkedin as well! */}
							<a target="_blank" href="https://x.com/sathwikreddygv7" className="group mt-4 text-sm flex items-center"><img src="/icons/twitter.svg" className="w-6 h-6 transition-transform duration-500 transform group-hover:rotate-360 "/> <div><BsArrowRight strokeWidth={1} className="mx-2"/></div> @sathwikreddygv7</a>
							<a target="_blank" href="https://github.com/sathwikreddygv" className="group mt-4 text-sm flex items-center"><BsGithub className="w-6 h-6 transition-transform duration-500 transform group-hover:rotate-360"/> <div><BsArrowRight strokeWidth={1} className="mx-2"/></div> @sathwikreddygv</a>
							<a target="_blank" href="https://linkedin.com/in/sathwikreddygv" className="group mt-4 text-sm flex items-center"><img src="/icons/linkedin.svg" className="w-6 h-6 transition-transform duration-500 transform group-hover:rotate-360 "/> <div><BsArrowRight strokeWidth={1} className="mx-2"/></div> @sathwikreddygv</a>
							<a target="_blank" href="https://sathwikreddygv.blog" className="group mt-4 text-sm flex items-center"><img src="/icons/hashnode.svg" className="w-6 h-6 transition-transform duration-500 transform group-hover:rotate-360 "/> <div><BsArrowRight strokeWidth={1} className="mx-2"/></div> @sathwikreddygv</a>
						</div>
						<img src="/images/sathwik-github.jpeg" className="rounded-full h-24 w-24 mt-4 mx-8" />
					</div>
					<a href="mailto:sathwikreddygv@gmail.com" className="mt-4 flex-center text-base border border-black px-4 py-3 rounded-lg cp fancy-button transition-transform duration-500 transform hover:rotate-1" >
						<div>Hire me </div>
						<img src="/icons/gmail.svg" className="ml-2 w-4 h-4" />
					</a>
				</div>
			</div>
		</div>
  );
}
