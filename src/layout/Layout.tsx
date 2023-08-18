import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";

type Props = {
	children:ReactNode,
	active:string
}


const Layout = ({ children, active }:Props)=>{

	const [navbar , setNavbar] = useState(false);

	return(
		<div className="bg-black w-screen h-screen">
		  <section className="w-full h-full">
		    <nav className={`w-full flex flex-col sm:flex-row-reverse overflow-hidden transition-all duration-1000 ease-in-out ${navbar ? "" : " h-16"} border-b 
		    	border-white`}>

		    	<h1 className="hidden sm:block absolute ml-4 left-0 self-center text-gray-200 hover:text-gray-300 cursor-pointer font-bold font-mono text-xl">Paulo Victor</h1>

		    	<div onClick={()=> setNavbar(!navbar)} className={`w-8 mx-6  my-5 cursor-pointer transition-all duration-500 ease-in-out ${navbar? "rotate-90":""} sm:hidden`}>
		    		<div className="h-1 w-8 bg-white"></div>
		    		<div className="h-1 w-8 bg-white mt-2"></div>
		    		<div className="h-1 w-8 bg-white mt-2"></div>
		    	</div>
		        
		        <Link className={`${active=="about"? "text-purple-300 font-bold":""} p-6 self-center hover:bg-white hover:text-black hover:p-6 transition-all duration-300 ease-in-out`} 
		        to={"/"}>About me</Link>

		        <Link className={`${active=="contacts"? "text-purple-300 font-bold":""} p-6 self-center hover:bg-white hover:text-black transition-all duration-300 ease-in-out`} 
		        to={"/contacts"}>Contacts</Link>
		        
		        <Link className={`${active=="projects"? "text-purple-300 font-bold":""} p-6 self-center hover:bg-white hover:text-black transition-all duration-300 ease-in-out`} 
		        to={"/projects"}>Projects</Link>
		    
		    </nav>
		    <section className="mt-20 sm:mt-32">
		   		{ children }
		    </section>

		  </section>
		</div>
	);
}


export default Layout;