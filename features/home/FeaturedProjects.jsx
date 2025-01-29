import Project from "@/components/Project"
const FeaturedProjects = () => {
    return (
        <div className="projects bg-mirage text-center borders-gray">
            <div className="custom-container">
                <p className="text-6xl text-white py-16">Featured <span className="text-purple-heart">Projects</span></p>
                <div className="flex col-span-6 flex-wrap gap-8 justify-center items-center">
                    <Project />
                    <Project />
                </div>
                <button className="m-10 bg-purple-heart py-4 px-8 text-2xl text-white rounded-xl">ALL PROJECTS</button>
            </div>
        </div>
    )
}
export default FeaturedProjects