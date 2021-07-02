import NotAuthorized from "../NotAuthorized/NotAuthorized"
import "./Nutrition.css"
export default function Nutrition({user, setUser})
{ 
    const showActivity = () =>
    {
        if (!user?.email) {
            return <NotAuthorized user={user} setUser={setUser}/>
        }
        return (
            <div className="Nutrition">
                <h1>Sorry but this page is </h1>
                <img src="https://static8.depositphotos.com/1380093/1054/v/600/depositphotos_10542950-stock-illustration-under-construction-sign.jpg" alt="Under Contruction Icon"></img>
            </div>
        )
    }
    return (
        <div className="NutritionPage">
            {showActivity()}
        </div>
    )
}
