import Project from "@/components/Project"
import Link from "next/link";
const FeaturedProjects = () => {
    const projectImages = [
        'https://picsum.photos/384/896', // Red image
        'https://picsum.photos/384/895', // Green image
        'https://picsum.photos/384/894', // Blue image
    ];
    return (
        <div className="projects bg-mirage text-center borders-gray">
            <div className="custom-container">
                <p className="text-6xl text-white py-16">Featured <span className="text-purple-heart">Projects</span></p>
                <div className="flex col-span-6 flex-wrap gap-8 justify-center items-center">
                    <Project
                        title="Project #1 Title"
                        description="This is a shortened description that gives an overview of the project and the tools used. It captures the interest and links to the repo."
                        images={projectImages}
                        interval={2000} // Optional: Change image every 2 seconds
                    />
                    <Project
                        title="Project #2 Title"
                        description="This is a shortened description that gives an overview of the project and the tools used. It captures the interest and links to the repo."
                        images={projectImages}
                        interval={2000} // Optional: Change image every 2 seconds
                    />
                </div>  
                <Link href="/projects">
                    <button className="m-10 bg-purple-heart py-4 px-8 text-2xl text-white rounded-xl">ALL PROJECTS</button>
                </Link>
            </div>
        </div>
    )
}
export default FeaturedProjects