import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = ({}) => {
	return (
		<div id='sticky-parallax-header' className="sticky left-1/2 -translate-x-1/2  bg-opacity-60 backdrop-blur-[10px] flex items-center w-[40vw] rounded-full px-4 z-20 dark:border-[hsla(0,0%,100%,.3)] dark:border-2 bg-[rgba(0,0,0,.1)] dark:bg-transparent overflow-auto">
			<div className="flex-1 text-center p-3">About</div>
			<div className="flex-1 text-center p-3">Projects</div>
			<div className="flex-1 text-center p-3">Blog</div>
			<div className="flex-1 text-center p-3">Contact</div>
			<div className="flex-1 flex items-center justify-center"><ThemeSwitch/></div>
		</div>
	)
}	

export default Navbar