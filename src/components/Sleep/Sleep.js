import NotAuthorized from "../NotAuthorized/NotAuthorized"
import "./Sleep.css"
export default function Sleep({user, setUser})
{
    const showActivity = () =>
    {
        if (!user?.email) {
            return <NotAuthorized user={user} setUser={setUser}/>
        }
        return (
            <div className="Sleep">
                <h1>Sorry but this page is  </h1>
                <img src="https://static8.depositphotos.com/1380093/1054/v/600/depositphotos_10542950-stock-illustration-under-construction-sign.jpg" alt="Under Contruction Icon"></img>
            </div>
        )
    }

    return (
        <div className="SleepPage">
            {showActivity()}
        </div>
    )
}