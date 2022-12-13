import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Login from '../../pages/Login/Login';
import DashboardHome from './dashboard-home';


const Dashboard = () => {

    const [user, setUser] = useState(null);
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    })
    return(
        <div>
            {user ? <DashboardHome /> : <Login />}
        </div>
    );
} 

export default Dashboard;