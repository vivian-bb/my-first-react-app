import { useRef} from 'react';
import { signOutUser } from "../../firebase";


const DashboardHome = () => {

    const form = useRef([]);
    console.log(form);

    const itemName = form.current[0]?.value;
    const itemDescription = form.current[1]?.value;
    const itemURL = form.current[2]?.value;
    const image = form.current[3]?.files[0];

    const submitPortfolio = (event) => {
        event.preventDefault();
        console.log(form);
    }
    return(
    <div>
        <h1>You are logged in</h1>
        
        <form ref={form} onSubmit={submitPortfolio}>
            <input type="text" placeholder="Name" /><br />
            <textarea placeholder="Description"></textarea><br />
            <input type="text" placeholder="URL" /><br />
            <input type="text" placeholder="Image" /><br />
            <input type = "submit" value='Sign out' />
        </form>
        <br />
        <br />
        <button onClick={signOutUser}>Sign out</button>
    </div>)
};

export default DashboardHome;