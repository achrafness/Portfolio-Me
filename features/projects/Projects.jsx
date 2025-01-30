import Project from "@/components/Project"
import projectsData from "@/data/projects.json"; 

const Projects = () => {
    return (
        <div className="bg-mirage text-center py-12 borders-gray-top">
            <div className="custom-container">
                <div className="flex col-span-6 flex-wrap gap-8 justify-center items-center">
                {projectsData.map((project, index) => (
                        <Project
                            key={index}
                            title={project.title}
                            description={project.description}
                            images={project.images}
                            interval={2000} 
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Projects