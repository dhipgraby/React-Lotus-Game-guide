import React from 'react'
import idle from '../images/idle1.png'
import attack from '../images/a2.png'
import './style/bootstrap.css'
import './style/mystyles.css'
import './style/colors.css'



class Card extends React.Component {


    render() {
        const { title, description, leftColor,rightColor } = this.props
        return (
            <div className="card mx-auto Fitness-Card light-b-shadow mb-5 mt-5" style={{
                backgroundImage: `linear-gradient(to right,${leftColor},${rightColor})`
             }}
             >
                <div className="card-body">
                    <div className="row">
                        <div className="col-2">
                            <img src={idle} className="minw-70 mb-4 pj-img" />
                        </div>
                        <div className="col-8 pl-4">
                            <div className="ml-2">
                            <h3 className="c-white">{title}</h3>
                            <p className="c-white">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                      
        )
    }

}

export default Card