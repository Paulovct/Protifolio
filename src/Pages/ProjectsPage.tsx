import { ProjectCard } from "../components/ProjectCard";
import Layout from "../layout/Layout";


const ProjectsPage = ()=>{
	return (
		<Layout active="projects">
			<div className="flex flex-col">
				
				<h1 className="text-4xl text-center font-bold font-mono sm:text-6xl md:text-7xl lg:text-8xl">Projects</h1>

				<div className="w-full bg-black mt-8 flex flex-col xl:flex-row flex-wrap ">

					
					<ProjectCard title="DevCond" technologies="PHP, Laravel"type="Backend"
						link="https://github.com/Paulovct/DevCond-backend" 
						image="projects/backend.png" 
					/>

					<ProjectCard title="OLX-api" technologies="PHP, Laravel"type="Backend"
						link="https://github.com/Paulovct/OLX-api" 
						image="projects/backend.png" 
					/>

					<ProjectCard title="OLX-frontend" technologies="Typescript, React"type="React App"
						link="https://github.com/Paulovct/OLX-frontend" 
						image="projects/olx.png" 
					/>

					<ProjectCard title="DevMemory" technologies="Typescript, React"type="React App"
						link="https://github.com/Paulovct/DevMemory" 
						image="projects/devmemory.jpg" 
					/>

					<ProjectCard title="IMC Calc" technologies="Typescript, React"type="React App"
						link="https://github.com/Paulovct/calc-imc-react" 
						image="projects/imc.jpg" 
					/>

					<ProjectCard title="CineR" technologies="Typescript, React"type="React App"
						link="https://github.com/Paulovct/CineR" 
						image="projects/ciner.png" 
					/>

					<ProjectCard title="DevsFood" technologies="Typescript, React"type="React App"
						link="https://github.com/Paulovct/DevsFood" 
						image="projects/food.png" 
					/>
					
					<ProjectCard title="Jogo da Velha" technologies="HTML, CSS, Javascript"type="Landing Page"
						link="https://github.com/Paulovct/Jogo-da-Velha" 
						image="projects/velha.png" 
					/>

					<ProjectCard title="Quiz" technologies="HTML, CSS, Javascript"type="Landing Page"
						link="https://github.com/Paulovct/Quiz"
						image="projects/quiz.png" 
					/>

					<ProjectCard title="Pizzas Template" technologies="HTML, CSS, Javascript"type="Landing Page"
						link="https://github.com/Paulovct/Pizzas-Template" 
						image="projects/pizzas.png" 
					/>


					<ProjectCard title="Clima" technologies="HTML, CSS, Javascript"type="Landing Page"
						link="https://github.com/Paulovct/Clima-CY" 
						image="projects/clima.png" 
					/>

					<ProjectCard title="Starbucks" technologies="HTML, CSS"type="Landing Page"
						link="https://github.com/Paulovct/Starbucks" 
						image="projects/starbucks.png" 
					/>

					<ProjectCard title="Awax" technologies="HTML, CSS"type="Landing Page"
						link="https://github.com/Paulovct/Awax" 
						image="projects/awax.png" 
					/>

					<ProjectCard title="MediCenter" technologies="HTML, CSS"type="Landing Page"
						link="https://github.com/Paulovct/Medicenter/" 
						image="projects/medicenter.png" 
					/>

					<ProjectCard title="FlexTurismo" technologies="HTML, CSS"type="Landing Page"
						link="https://github.com/Paulovct/Flex-Turismo" 
						image="projects/flex.png" 
					/>

					<ProjectCard title="WebPage-old" technologies="HTML, CSS, Javascript"type="Landing Page"
						link="https://github.com/Paulovct/webpage-old" 
						image="projects/page.png" 
					/>


				</div>

			</div>
		</Layout>
	);
}

export default ProjectsPage;