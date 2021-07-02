import './App.css';
import NavBar from "../NavBar/NavBar"
import Home from "../Home/Home"
import Activity from "../Activity/Activity"
import Exercise from "../Exercise/Exercise"
import Login from "../Login/Login"
import Nutrition from "../Nutrition/Nutrition"
import Register from "../Register/Register"
import Sleep from "../Sleep/Sleep"
import ExerciseForm from '../ExerciseForm/ExerciseForm';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import apiClient from "../../services/apiClient"

function App() {
  const [user, setUser] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await apiClient.fetchUserFromToken()
      if (data) {
        setUser(data.user)
      }
    }

    const token = localStorage.getItem("life_tracker_token")
    if (token) {
      apiClient.setToken(token)
      fetchUser()
    }
  }, [])

  const handleLogout = async () => {
    await apiClient.logoutUser()
    setUser({})
    setError(null)
  }

  return (
    <div className="App">
      
      <BrowserRouter>
        <NavBar user={user} setUser={setUser} handleLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Activity" element={<Activity user={user} setUser={setUser} error={error}/>} />
          <Route path="/Exercise" element={<Exercise user={user} setUser={setUser}/>} />
          <Route path="/Login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/Nutrition" element={<Nutrition user={user} setUser={setUser}/>} />
          <Route path="/Register" element={<Register user={user} setUser={setUser} />} />
          <Route path="/Sleep" element={<Sleep user={user} setUser={setUser}/>} />
          <Route path="/createExercise" element={<ExerciseForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
