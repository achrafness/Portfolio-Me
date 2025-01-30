import Project from "@/components/Project";
import Link from "next/link";
import projectsData from "@/data/projects.json"; 

const FeaturedProjects = () => {
    const featuredProjects = projectsData.slice(0, 2); 

    return (
        <div className="projects bg-mirage text-center borders-gray">
            <div className="custom-container">
                <p className="text-6xl text-white py-16">
                    Featured <span className="text-purple-heart">Projects</span>
                </p>
                <div className="flex col-span-6 flex-wrap gap-8 justify-center items-center">
                    {featuredProjects.map((project, index) => (
                        <Project
                            key={index}
                            title={project.title}
                            description={project.description}
                            images={project.images}
                            interval={2000} 
                        />
                    ))}
                </div>  
                <Link href="/projects">
                    <button className="m-10 bg-purple-heart py-4 px-8 text-2xl text-white rounded-xl">
                        ALL PROJECTS
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedProjects;
