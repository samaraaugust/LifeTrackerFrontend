import "./ActExercise.css"
export default function ActExercise({ exerciseVal})
{
    return (
        <div className="contentS">
            <h1 className="Title">Total Exercise Minutes</h1>
            <h1 className="Number">{exerciseVal}</h1>
        </div>
    )
}