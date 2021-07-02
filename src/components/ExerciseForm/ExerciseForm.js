import "./ExerciseForm.css"
import apiClient from "../../services/apiClient"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function ExerciseForm({ user })
{   
    const navigate = useNavigate()
    const [isProcessing, setIsProcessing] = useState(false)
    const [errors, setErrors] = useState({})
    const [form, setForm] = useState({
        name: "",
        category: "",
        duration: 1,
        intensity: 1
    })

    const handleOnInputChange = (event) => {
        if (event.target.name === "intensity")
        {
            if (event.target.value < 1 || event.target.value > 10)
            {
                setErrors((e) => ({ ...e, intensity: "Please enter a valid intensity." }))
            }
            else {
                setErrors((e) => ({ ...e, intensity: null }))
            }

        }
        if (event.target.name === "duration")
        {
            if (event.target.value < 1)
            {
                setErrors((e) => ({ ...e, duration: "Please enter a valid duration." }))
            }
            else {
                setErrors((e) => ({ ...e, duration: null }))
            }

        }
        setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const handleOnSubmit = async () => {
        setIsProcessing(true)
        setErrors((e) => ({ ...e, form: null }))
        const { data, error } = await apiClient.addExercise({
            name: form.name,
            category: form.category,
            duration: form.duration,
            intensity: form.intensity
          })
          if (error) {
            setErrors((e) => ({ ...e, form: error }))
          }
          if (data)
          {
              console.log(data)
          }
          if (errors)
          {
              console.log(errors)
          }

          setIsProcessing(false)

          navigate("/Exercise")
    }

    return (
        <div className="Form">
            <div className="Back">
                <Link to="/Exercise"><button className="backBtn">Back</button></Link>
            </div>
            <div className="header">
                <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Person Lifting Weights"></img>
                <h2>Add Exercise</h2>
            </div>
            <div className="inputs">
            <div className="inputF">
                <label htmlFor="name">Name</label>
                    <input
                    type="name"
                    name="name"
                    placeholder="Exercise Name"
                    value={form.name}
                    onChange={handleOnInputChange}
                    />
            </div>
            <div className="inputF">
                <label htmlFor="category">Category</label>
                    <input
                    type="category"
                    name="category"
                    placeholder="Exercise Category"
                    value={form.category}
                    onChange={handleOnInputChange}
                    />
            </div>
            <div className="inputF">
                <label htmlFor="duration">Duration (min)</label>
                    <input
                    type="duration"
                    name="duration"
                    value={form.duration}
                    onChange={handleOnInputChange}
                    />
            </div>
            <div className="inputF">
                <label htmlFor="intensity">Intensity (1-10)</label>
                    <input
                    type="intensity"
                    name="intensity"
                    value={form.intensity}
                    onChange={handleOnInputChange}
                    />
            </div>
            <div className="SubmitSec">
            <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
                {isProcessing ? "Loading..." : "Save"}
             </button>
            </div>
            </div>
        </div>
    )
}