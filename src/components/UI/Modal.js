import classes from './Modal.module.css'
const Modal=(props)=>{
    let show=true
    if(show){
        return null
    }
    return(
        <div className={classes.modal}>{props.children}</div>
    )

}
export default Modal