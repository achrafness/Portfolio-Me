import Project from "@/components/Project"
const Projects = () => {
    const projectImages = [
        'https://picsum.photos/384/896', // Red image
        'https://picsum.photos/384/895', // Green image
        'https://picsum.photos/384/894', // Blue image
    ];
    return (
        <div className="bg-mirage text-center py-12 borders-gray-top">
            <div className="custom-container">
                <div className="flex col-span-6 flex-wrap gap-8 justify-center items-center">
                    <Project
                        title="Project #2 Title"
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
                    <Project
                        title="Project #2 Title"
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
            </div>
        </div>
    )
}
export default Projects