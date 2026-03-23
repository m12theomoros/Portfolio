import { Timeline } from "../components/Timeline"
import { experiences } from "../constants/Index"

const Experiences = () => {
  return <div id="experience" className="w-full scroll-mt-24">
    <Timeline  data={experiences}/>
  </div>
}

export default Experiences