import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

const About = ()=>{
	return (
		<Layout active="about">
			<div className="w-full h-full">
				<div>
					<div className="text-center text-5xl sm:text-7xl font-bold">
						Paulo Victor
					</div>	
					<hr className="w-10/12 sm:w-2/3 mx-auto"/>
					<div className="text-center text-2xl sm:text-3xl">
						FullStack Developer
					</div>
				</div>

				<p className="mt-12 sm:mt-20 p-8 sm:p-10 text-md sm:text-lg font-mono text-center">
					Hello! my name is <Link className="underline hover:bg-white hover:text-black hover:text-bold hover:no-underline transition-all duration-500 ease-in-out" to="contacts">Paulo Victor</Link> and i'm a Web Developer.
					I'm passionate about technology and i'm graduating as a Software Enginner right now.  
				</p>
				
			</div>

		</Layout>
	);
}

export default About;