"use client"
import React, { useContext } from "react";
import ThemeSwitch from "./ThemeSwitch";
import useMediaQuery from "./useMediaQuery";
import { IconActivityHeartbeat, IconAt, IconNfcOff } from "@tabler/icons-react";
import { BiInfoCircle, BiInfoSquare, BiLaptop } from "react-icons/bi";
import { BsInfo, BsInfoCircle, BsInfoCircleFill, BsInfoLg, BsInfoSquare } from "react-icons/bs";
import { GoInfo, GoProject } from "react-icons/go";
import { IoDocument, IoDocumentOutline } from "react-icons/io5";
import { FcContacts } from "react-icons/fc";
import { GrContact } from "react-icons/gr";
import { MdAlternateEmail, MdContactMail, MdEmail, MdMarkEmailRead, MdOutlineEmail } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { TbWriting } from "react-icons/tb";
import { CgInfo } from "react-icons/cg";
import { FaInfo, FaInfoCircle } from "react-icons/fa";
import { GiInfo } from "react-icons/gi";
import { ActiveTabContext } from "@/contexts/ActiveTabContext";

interface NavbarProps {
	active_tab: string;
	set_active_tab: React.Dispatch<React.SetStateAction<string>>;
}

const Navbar: React.FC = ({}) => {
	const isDesktop = useMediaQuery('(min-width: 768px)');
	const { active_tab, set_active_tab } = useContext(ActiveTabContext)

	const navigate = (id:string) : void => {
		let element = document.getElementById(id)
		if(element){
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			});
		}
		// set_active_tab(id)
	}

	return (
		<>
			<div id={'sticky-parallax-header'} style={{backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)'}} className="hidden sm:flex sticky left-1/2 -translate-x-1/2  bg-opacity-60 items-center w-[40vw] rounded-full px-4 z-20 dark:border-[hsla(0,0%,100%,.3)] dark:border-2 bg-[rgba(0,0,0,.1)] dark:bg-transparent overflow-hidden">
				<div className={`cp flex-1 text-center p-3 font-bold flex items-center justify-center ${active_tab==='about-header' ? ' border-2 rounded-full my-2' : ''}`} onClick={() => navigate('about-header')}><GoInfo className="w-4 h-4 mr-1" strokeWidth={1}/> About</div>
				<div className={`cp flex-1 text-center p-3 font-bold flex items-center justify-center ${active_tab==='projects-header' ? ' border-2 rounded-full my-2' : ''}`} onClick={() => navigate('projects-header')}><BiLaptop className="w-4 h-4 mr-1" strokeWidth={1}/> Projects</div>
				<div className={`cp flex-1 text-center p-3 font-bold flex items-center justify-center ${active_tab==='blogs-header' ? ' border-2 rounded-full my-2' : ''}`} onClick={() => navigate('blogs-header')}><TbWriting className="w-4 h-4 mr-1" strokeWidth={3}/> Blog</div>
				<div className={`cp flex-1 text-center p-3 font-bold flex items-center justify-center ${active_tab==='contact-header' ? ' border-2 rounded-full my-2' : ''}`} onClick={() => navigate('contact-header')}><IconAt className="w-4 h-4 mr-1" strokeWidth={3}/> Contact</div>
				{/* <div className="cp flex-1 flex items-center justify-center"><ThemeSwitch/></div> */}
			</div>

			<div className="fixed flex sm:hidden items-center justify-center left-0 right-0 bottom-4 m-auto z-20 w-[100vw]">
				<div style={{backdropFilter:'blur(10px)', WebkitBackdropFilter:'blur(10px)'}} className="bg-opacity-60 flex items-center w-[70vw] rounded-full px-2 py-3 z-20 dark:border-[hsla(0,0%,100%,.3)] dark:border-2 bg-[rgba(0,0,0,.1)] dark:bg-transparent overflow-hidden">
					<div className={`flex-1 text-center font-bold flex items-center justify-center mr-2 ${active_tab==='about-header' ? 'bg-white text-black rounded-full py-2' : ''}`} onClick={() => navigate('about-header')}><GoInfo className="w-6 h-6" strokeWidth={1}/></div>
					<div className={`flex-1 text-center font-bold flex items-center justify-center mr-2 ${active_tab==='projects-header' ? 'bg-white text-black rounded-full py-2' : ''}`} onClick={() => navigate('projects-header')}><BiLaptop className="w-6 h-6" strokeWidth={1}/></div>
					<div className={`flex-1 text-center font-bold flex items-center justify-center mr-2 ${active_tab==='blogs-header' ? 'bg-white text-black rounded-full py-2' : ''}`} onClick={() => navigate('blogs-header')}><TbWriting className="w-6 h-6" strokeWidth={3}/></div>
					<div className={`flex-1 text-center font-bold flex items-center justify-center mr-2 ${active_tab==='contact-header' ? 'bg-white text-black rounded-full py-2' : ''}`} onClick={() => navigate('contact-header')}><IconAt className="w-6 h-6" strokeWidth={3}/></div>
					{/* <div className="flex-1 flex items-center justify-center"><ThemeSwitch/></div> */}
				</div>
			</div>
		</>
	)
}	

export default Navbar