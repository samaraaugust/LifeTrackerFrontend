import "../Home/Home.css"
export default function Home()
{
    return (
        <div className="Home">
            <div className="AboutPic">
                <div className="About">
                    <h1>LifeTracker</h1>
                    <p>Helping you take back control of your world.</p>
                </div>
                <div className="picture">
                    <img src="https://images.unsplash.com/photo-1510017803434-a899398421b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Health Watch"></img>
                </div>
            </div>
            <div className="info">
                <div className="fitness">
                    <h1>Fitness</h1>
                    <img src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Person Running Up Stairs"></img>
                </div>
                <div className="food">
                    <h1>Food</h1>
                    <img src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Platters of Food Such As Vegetables"></img>
                </div>
                <div className="rest">
                    <h1>Rest</h1>
                    <img src="https://images.unsplash.com/photo-1550534791-2677533605ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Person Holding Up Alarm Clock"></img>
                </div>
                <div className="planner">
                    <h1>Planner</h1>
                    <img src="https://images.unsplash.com/photo-1588453251771-cd919b362ed4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Planner and Coffee"></img>
                </div>
            </div>
        </div>
    )
}