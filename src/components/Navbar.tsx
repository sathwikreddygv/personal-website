import React from "react";
import ThemeSwitch from "./ThemeSwitch";

const Navbar = ({}) => {
	return (
		<div id='sticky-parallax-header' className="sticky top-4 left-1/2 -translate-x-1/2  bg-opacity-50 backdrop-blur-md flex items-center w-[40vw] rounded-full px-4">
			<div className="flex-1 text-center p-3">About</div>
			<div className="flex-1 text-center p-3">Projects</div>
			<div className="flex-1 text-center p-3">Blog</div>
			<div className="flex-1 text-center p-3">Contact</div>
			<div className="flex-1 flex items-center justify-center"><ThemeSwitch/></div>
		</div>
	)
}	

export default Navbar