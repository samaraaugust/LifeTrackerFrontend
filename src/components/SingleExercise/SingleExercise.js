import React from "react"
import ExerciseLayout from "../ExerciseLayout/ExerciseLayout"

export default function SingleExercise({ exercise = []})
{
    return (
        <div className="content">
            <div className="seperateExercise">
                    {
                        exercise.map(element => (
                            <>
                            <div className="element">
                            <ExerciseLayout element={element} />
                            </div>
                            </>
                        ))
                    }
            </div>
        </div>
    )
}