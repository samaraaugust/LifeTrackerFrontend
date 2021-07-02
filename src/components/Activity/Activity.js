import "./Activity.css"
import { Link } from "react-router-dom"
import NotAuthorized from "../NotAuthorized/NotAuthorized"
import { useEffect, useState } from "react"
import apiClient from "../../services/apiClient"
import ActExercise from "../ActExercise/ActExercise"

export default function Activity({ user, setUser })
{
    const [exerciseVal, setExerciseVal] = useState(0)

    useEffect(() => {
        const fetchExerciseVal = async () => {
            try {
                const data = await apiClient.getActInfo()
                const dataVar = data.data.total.total
                if (dataVar)
                {
                    setExerciseVal(+dataVar)
                }

            }
            catch(error)
            {
                console.log(error)
            }
        }
        fetchExerciseVal()
    }, [])
    const showActivity = () =>
    {
        if (!user?.email) {
            return <NotAuthorized user={user} setUser={setUser}/>
        }
        return (
            <div className="Activity">
                <div className="headerSec">
                    <h1>Activity Feed</h1>
                    <div className="buttonsAct">
                        <Link to="/createExercise"><button>Add Exercise</button></Link>
                        <button>Log Sleep</button>
                        <button>Record Nutrition</button>
                    </div>
                </div>
                <div className="ExerciseSec">
                    <ActExercise exerciseVal={exerciseVal} setExerciseVal={setExerciseVal} />
                </div>
                <div className="SleepSec">

                </div>
                <div className="NutritionSec">

                </div>
            </div>
        )
    }

    return (
        <div className="Page">
            {showActivity()}
        </div>
    )
    
}