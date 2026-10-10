import Parallax from "@/components/Parallax";
import Project from "@/components/Project"
import projectsData from "@/data/projects.json"; 

const Projects = () => {
    return (
        <div className="bg-mirage text-center py-12 borders-gray-top">
            <div className="custom-container">
                <div className="flex md:col-span-6 col-span-12 flex-wrap gap-8 justify-center items-stretch">
                {projectsData.map((project, index) => (
                        <Parallax key={index} offset={index % 2 ? 40 : 15} delay={(index % 2) * 0.15} className="w-full sm:w-auto flex">
                        <Project
                            title={project.title}
                            description={project.description}
                            images={project.images}
                            date={project.date}
                            tech={project.tech}
                            interval={2000} 
                        />
                        </Parallax>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Projects