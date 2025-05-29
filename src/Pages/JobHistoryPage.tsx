import { Divider } from "@mantine/core"
import JobHistory from "../JobHistory/JobHistory"


const JobHistoryPage = () => {
  return (
    <div className="min-h-[90vh] p-4 bg-mine-shaft-950 font-['poppins']">
      <Divider size="xs"/>
      <div className="my-5">
       <JobHistory/>
      </div>
    </div>
  )
}

export default JobHistoryPage
