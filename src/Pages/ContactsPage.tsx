import Layout from "../layout/Layout";


const ContactsPage = ()=>{
	return (
		<Layout active="contacts">
			<div className="w-full h-full flex flex-col justify-center bg-black pb-20">
				<a href="https://github.com/Paulovct" 
					className=" mx-auto p-4 sm:p-6 sm:hover:p-8 rounded-3xl bg-purple-400 hover:p-6 transition-all duration-300 ease-in-out"
					target="_blank">
					<img className="mx-auto w-28 sm:w-32 h-28 sm:h-32" src="/github.png" alt="" />
				</a>

				<a href="https://www.linkedin.com/in/paulo-victor-alves-216327211?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BLsCRQ1tpQsKvfDl88CjRxg%3D%3D" 
					className=" mx-auto mt-20 p-4 sm:p-6 sm:hover:p-8 rounded-3xl bg-purple-400 hover:p-6 transition-all duration-300 ease-in-out"
					target="_blank">
					<img className="mx-auto  w-28 sm:w-32 h-28 sm:h-32" src="/linkedin.png" alt="" />
				</a>

				<a href="mailto:paulovictorpintoalves@gmail.com" 
					className=" mx-auto mt-20 p-4 sm:p-6 sm:hover:p-8 rounded-3xl bg-purple-400 hover:p-6 transition-all duration-300 ease-in-out"
					target="_blank">
					<img className="mx-auto  w-28 sm:w-32 h-28 sm:h-32" src="/email.png" alt="" />
				</a>

			</div>
		</Layout>
	);
}

export default ContactsPage;