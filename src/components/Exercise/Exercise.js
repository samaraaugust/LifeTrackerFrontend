import NotAuthorized from "../NotAuthorized/NotAuthorized"
import { Link } from "react-router-dom"
import SingleExercise from "../SingleExercise/SingleExercise"
import apiClient from "../../services/apiClient"
import { useEffect, useState } from "react"
import "./Exercise.css"
export default function Exercise({user, setUser})
{
    const [exercise, setExercise] = useState([])

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const data = await apiClient.getAllExercise()
                const exercises = data.data.exercise
                if (exercises)
                {
                    setExercise(exercises)
                }

            }
            catch(error)
            {
                console.log(error)
            }
        }
        fetchExercises()
    }, [])


    const showActivity = () =>
    {
        if (!user?.email) {
            return <NotAuthorized user={user} setUser={setUser}/>
        }
        return (
            <div className="Exercise">
                <div className="headerExercise">
                    <h1>Exercise</h1>
                </div>
                <Link to="/createExercise"><button className="buttonCreate">Add Exercise</button></Link>
            </div>
        )
    }
    


    return (
        <div className="ExercisePage">
            {showActivity()}
            <SingleExercise exercise={exercise}/>

        </div>
    )
}