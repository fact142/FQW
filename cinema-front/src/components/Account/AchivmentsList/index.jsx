import { useState } from 'react';
import Achievement from '../Achievement';

const AchievementsList = () => {
  const [achievements] = useState([{title: 1, progress: [1, 1], description: 'asd'}, {title: 2, progress: [1, 1], description: 'asd'}, {title: 3, progress: [1, 1], description: 'asd'}, {title: 4, progress: [1, 1], description: 'asd'}]);
  return(
    <ul style={{listStyle: "none"}}>
      {achievements.map((item, index) => (
        <Achievement title={item.title} progress={item.progress} description={item.description} key={index} />
      ))
      }
    </ul>
  )
}

export default AchievementsList;
