import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import Project from "@/components/Project";
import Link from "next/link";
import projectsData from "@/data/projects.json";

const FeaturedProjects = () => {
    const featuredProjects = projectsData.slice(0, 2);

    return (
        <div className="projects bg-mirage text-center borders-gray">
            <div className="custom-container">
                {/* Heading */}
                <Reveal>
                <p className="md:text-6xl text-4xl text-white py-8 md:py-16">
                    Featured <span className="text-purple-heart">Projects</span>
                </p>
                </Reveal>

                {/* Projects Grid */}
                <div className="flex flex-wrap gap-8 justify-center items-stretch">
                    {featuredProjects.map((project, index) => (
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

                {/* All Projects Button */}
                <Link href="/projects">
                    <button className="m-6 md:m-10 bg-purple-heart py-3 md:py-4 px-6 md:px-8 text-xl md:text-2xl text-white rounded-xl hover:bg-purple-700 transition-colors">
                        ALL PROJECTS
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedProjects;