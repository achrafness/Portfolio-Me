import Project from "@/components/Project"
const FeaturedProjects = () => {
    return (
        <div className="bg-mirage text-center">
            <div className="custom-container">
                <p className="text-6xl text-white py-16">Featured <span className="text-purple-heart">Projects</span></p>
                <div className="flex col-span-6 flex-wrap gap-8 justify-center items-center">
                    <Project />
                    <Project />
                    <Project />
                    <Project />
                </div>
            </div>
        </div>
    )
}
export default FeaturedProjects