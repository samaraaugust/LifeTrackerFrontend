import "./ExerciseLayout.css"
import moment from "moment"
export default function ExerciseLayout({ element })
{
    const name = moment(element.created_at).format("MMM Do, YYYY HH:mm A")
    return (
        <div className="SepElement">
            <div className="eleTime">
                <p>{name}</p>
            </div> 
            <div className="content">
                <div className="eleName">
                    <h1>{element.name}</h1>
                </div>
                
                <div className="sideBy">
                    <div className="eleDuration">
                        <h1>Duration</h1>
                        <p>{element.duration}</p>
                    </div>
                    <div className="eleInten">
                        <h1>Intensity</h1>
                        <p>{element.intensity}</p>
                    </div>
                    <div className="eleCategory">
                        <p>{element.category}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}