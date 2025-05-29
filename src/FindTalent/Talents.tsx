

import { talents } from '../Data/TalentData';
import Sort from '../FindJobs/Sort'
import TalentCard from './TalentCard';


const Talents = () => {
  return (
    <div className="px-5 py-5">
        <div className="flex justify-between mt-5">
            <div className="text-2xl font-semibold">
                Talents</div>
            <Sort/>
        </div>
        <div className="mt-10 flex flex-wrap gap-5 justify-evenly">   
            {
                talents.map((talent,index) => <TalentCard kry={index} {...talent} />)
            }     
          <TalentCard/>
        </div>
     
      
    </div>
  )
}

export default Talents;
