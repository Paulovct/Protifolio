type Props = {
	title:string
	image:string
	type:string
	technologies:string
	link:string
}

export const ProjectCard = ({ title, image, technologies, type, link }:Props)=>{
	return (
		<div className="container mx-auto my-20 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl border border-gray-800 rounded-lg">

			<img className="w-full max-h-80" src={image}  />		

			<div className="flex justify-between">
				
				<div className="p-4">
					<h2 className="text-lg text-gray-200">{title}</h2>
					<p className="text-sm text-gray-400">Technologies: {technologies}</p>
					<p className="text-sm text-gray-400">{type}</p>
				</div>
			
				<div className="self-center bg-gray-900 hover:bg-white transition-all duration-500 ease-in-out p-2">
					<a href={link} target="_blank"><img className="w-20 h-20" src="github.png" alt="Link do Repositorio" /></a>
				</div>
				
			</div>

			

		</div>
	);
}