export default function Header(){

    //call an API to get a random motivational thought to display in header
    const todaysThought = "Food is just a FUEL";
    return (
        <div className='container'>
            {todaysThought}
        </div>
    )
}