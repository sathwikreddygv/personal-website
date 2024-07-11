
import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import { inter } from './fonts'
import { useCallback, useContext, useEffect, useState } from "react";
import { useElements } from "./elements";
import { ActiveTabContext } from "@/contexts/ActiveTabContext";

export const metadata: Metadata = {
	title: "Sathwik Reddy | FullStack Developer",
	description: "I'm a Software developer from India. Here, you'll find my projects, blogs and social profiles. Feel free to explore and connect with me. Thanks for stopping by!",
	icons: {
	icon: '/icons/gv_logo.svg',
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {

	// const debounce = (func: () => void, wait: number) => {
	// 	let timeout: NodeJS.Timeout;
	// 	return (...args: any[]) => {
	// 	  clearTimeout(timeout);
	// 	  timeout = setTimeout(() => func(), wait);
	// 	};
	//   };

	// const handleScrollEnd = () => {
	// 	console.log("Scrolling has ended", inViewArray);
	// 	// if(elements[0].isVisible)set_active_tab('about-header')
	// 	// if(elements[1].isVisible) set_active_tab('projects-header')
	// 	// if(elements[2].isVisible) set_active_tab('blogs-header')
	// 	// if(elements[3].isVisible) set_active_tab('contact-header') 
	// 	if (inViewArray[0]) {
	// 		set_active_tab('about-header')
	// 		console.log("Scrolling has en, set_active_tab('about-header')ded");
	// 	} else if (inViewArray[1]) {
	// 		set_active_tab('projects-header')
	// 		console.log("Scrolling has ended, set_active_tab('projects-header')");
	// 	} else if(inViewArray[2]) {
	// 		set_active_tab('blogs-header')
	// 		console.log("Scrolling has en, set_active_tab('blogs-header')ded");
	// 	} else if(inViewArray[3]) {
	// 		set_active_tab('contact-header') 
	// 		console.log("Scrolling has ended, set_active_tab('contact-header') ");
	// 	} 
	// };
	
	// useEffect(() => {
	// 	const debouncedHandleScrollEnd = debounce(handleScrollEnd, 100);
	
	// 	const handleScroll = () => {
	// 	debouncedHandleScrollEnd();
	// 	};
	
	// 	window.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 	window.removeEventListener('scroll', handleScroll);
	// 	};
	// }, [handleScrollEnd]);

	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<meta property="og:image" content="/images/opengraph-image.png" />
				<link rel="icon" type="images/png" sizes="32x32" href="/image/sathwik.svg"/>
				<Providers>
					{/* <ActiveTabContext.Provider value={{active_tab, set_active_tab}}> */}
						{/* <Navbar /> */}
						{children}
					{/* </ActiveTabContext.Provider> */}
				</Providers>
			</body>
		</html>
	);
}
