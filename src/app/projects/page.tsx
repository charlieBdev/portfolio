import ProjectsList from "../Components/ProjectsList";

export default function Projects() {
	return (
		<div className="mt-24 p-6 xl:px-24 space-y-1 xl:flex xl:flex-col min-h-screen">
			<section className="">
				<h2 className="text-lg text-pink-400">Projects</h2>
			</section>
			<ProjectsList />
		</div>
	);
}
