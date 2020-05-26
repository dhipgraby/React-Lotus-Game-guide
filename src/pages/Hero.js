import React from 'react'
import HeroList from '../components/HeroList'
import Wellcome from '../components/Wellcome'
import blackbg from '../images/blackbg.png'


class Hero extends React.Component {

     constructor(props) {
          super(props)
          this.state = {
               data: [{
                    "id": 1,
                    "title": "Hero Guides",
                    "description": "Learn how to level up",                    
                    "leftColor": "#A74CF2",
                    "rightColor": "#617BFB"
               }, {
                    "id": 2,
                    "title": "Skills Training",
                    "description": "Learn skill and techniques",                    
                    "leftColor": "#17EAD9",
                    "rightColor": "#6078EA"
               }, {
                    "id": 3,
                    "title": "Strength Training",
                    "description": "Train to become a superhero!",                    
                    "leftColor": "#FAD961",
                    "rightColor": "#F76B1C"
               }]


          }
     }

     render() {
          return (
               <div>
                    <Wellcome />
                    <HeroList
                     HeroList = {this.state.data                         
                     }
                     />

               </div>
          )
     }


}

export default Hero