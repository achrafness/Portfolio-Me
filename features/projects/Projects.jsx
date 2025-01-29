import Project from "@/components/Project"
const Projects = () => {
  return (
      <div className="bg-mirage text-center py-12 borders-gray-top">
          <div className="custom-container">
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
export default Projects