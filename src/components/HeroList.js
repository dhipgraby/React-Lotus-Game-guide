import React from 'react'
import Card from '../components/Card'

function HeroList(props){
    return (
        <div>
{
      props.HeroList.map((exercise) => {
        return (
             <Card
                  title={exercise.title}
                  description={exercise.description}                  
                  leftColor={exercise.leftColor}
                  rightColor={exercise.rightColor}
             />
        )
   })
}
        </div>
    )
}

export default HeroList