import styles from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
        <nav className={styles.nav}>
            <div><NavLink style={{textDecoration: 'none'}} className={({isActive}) =>
                isActive ? styles.active : undefined
            } to='/profile'>Profile</NavLink></div>
            <div><NavLink style={{textDecoration: 'none'}} className={({isActive}) => isActive ? styles.active : undefined}
                          to='/dialogs'>Messages</NavLink></div>
            <div className={styles.item}><NavLink style={{textDecoration: 'none'}} to='*'>News</NavLink></div>
            <div className={styles.item}><NavLink style={{textDecoration: 'none'}} to='*'>Music</NavLink></div>
            <div className={styles.item}><NavLink style={{textDecoration: 'none'}} to='*'>Settings</NavLink></div>
        </nav>
            <div className={styles.friends}>
                <h2>Friends</h2>
                <div>
                    {props.friends.map(x=><div><img src={x.image} alt="" width={30}/>{x.name}</div>)}
                    {/*<div><img src={props.friends.image} alt="" width={30}/>{props.friends.name}</div>*/}
                    {/*<div><img src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="" width={30}/>Nurs</div>*/}
                    {/*<div><img src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg" alt="" width={30}/>Nurs</div>*/}
                </div>
            </div>
        </div>
    )
}
export default Navbar;
