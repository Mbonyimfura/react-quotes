import { Link,useLocation } from "react-router-dom";
import classes from './MainNavigation.module.css'
const MainNavigation=()=>{
    const location=useLocation()
return(
  
    <header className={classes.header}>
          <div className={classes.logo}>Great Quotes</div>
        <nav  className={classes.nav}>
            <ul>
                <li><Link to='/quotes' className={location.pathname==='/quotes'?classes.active:''}>All Quote</Link></li>
                {/* <li><Link to='/quotes/quoteId'className={location.pathname==='/quotes/quoteId'?classes.active:''}>Detail Quote</Link></li> */}
                <li><Link to='/new-quote'className={location.pathname==='/new-quote'?classes.active:''}>Add New Quote</Link></li>
            </ul>
        </nav>
    </header>
)
}
export default MainNavigation