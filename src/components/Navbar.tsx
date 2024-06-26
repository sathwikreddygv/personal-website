"use client"
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import useMediaQuery from "./useMediaQuery";
import { IconActivityHeartbeat, IconAt, IconNfcOff } from "@tabler/icons-react";
import { BiInfoCircle, BiLaptop } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import { IoDocument, IoDocumentOutline } from "react-icons/io5";
import { FcContacts } from "react-icons/fc";
import { GrContact } from "react-icons/gr";
import { MdAlternateEmail, MdContactMail, MdEmail, MdMarkEmailRead, MdOutlineEmail } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { TbWriting } from "react-icons/tb";

const Navbar = ({}) => {
	const isDesktop = useMediaQuery('(min-width: 768px)');
	return (
		isDesktop?
		<>
			<div id={'sticky-parallax-header'} style={{backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)'}} className="sticky left-1/2 -translate-x-1/2  bg-opacity-60 flex items-center w-[40vw] rounded-full px-4 z-20 dark:border-[hsla(0,0%,100%,.3)] dark:border-2 bg-[rgba(0,0,0,.1)] dark:bg-transparent overflow-hidden">
				<div className="cp flex-1 text-center p-3 font-bold flex items-center justify-center"><BsInfoCircle className="w-4 h-4 mr-1" strokeWidth={1}/> About</div>
				<div className="cp flex-1 text-center p-3 font-bold flex items-center justify-center"><BiLaptop className="w-4 h-4 mr-1" strokeWidth={1}/> Projects</div>
				<div className="cp flex-1 text-center p-3 font-bold flex items-center justify-center"><TbWriting className="w-4 h-4 mr-1" strokeWidth={3}/> Blog</div>
				<div className="cp flex-1 text-center p-3 font-bold flex items-center justify-center"><IconAt className="w-4 h-4 mr-1" strokeWidth={3}/> Contact</div>
				<div className="cp flex-1 flex items-center justify-center"><ThemeSwitch/></div>
			</div>
		</>:
		<div className="sticky flex items-center justify-center top-[90vh] z-20">
			<div style={{backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)'}} className="bg-opacity-60 flex items-center w-[70vw] rounded-full px-4 z-20 dark:border-[hsla(0,0%,100%,.3)] dark:border-2 bg-[rgba(0,0,0,.1)] dark:bg-transparent overflow-hidden">
				<div className="flex-1 text-center p-3 font-bold flex items-center justify-center"><BsInfoCircle className="w-4 h-4 mr-1" strokeWidth={1}/></div>
				<div className="flex-1 text-center p-3 font-bold flex items-center justify-center"><BiLaptop className="w-4 h-4 mr-1" strokeWidth={1}/></div>
				<div className="flex-1 text-center p-3 font-bold flex items-center justify-center"><TbWriting className="w-4 h-4 mr-1" strokeWidth={3}/></div>
				<div className="flex-1 text-center p-3 font-bold flex items-center justify-center"><IconAt className="w-4 h-4 mr-1" strokeWidth={3}/></div>
				<div className="flex-1 flex items-center justify-center"><ThemeSwitch/></div>
			</div>
		</div>
	)
}	

export default Navbar