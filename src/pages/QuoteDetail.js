import { Route ,Routes} from "react-router-dom"
import { Link, useParams,useMatch } from "react-router-dom"
import HighlightedQuote from "../components/quotes/HighlightedQuote"
import Comments from "../components/comments/Comments"
import useHttp from "../hooks/use-http"
import { getSingleQuote } from "../lib/api"
import { useEffect } from "react"
import LoadingSpinner from "../components/UI/LoadingSpinner"

const QuoteDetail=()=>{
    const params=useParams()
    const match = useMatch(`/quotes/${params.quoteId}/comments`);
    const {quoteId}=params
   const{sendRequest,status,data:loadedQuotes,error}= useHttp(getSingleQuote,true)
useEffect(()=>{
  sendRequest(quoteId)
},[sendRequest,quoteId])
if(status==='pending'){
  return <div className="centered">
    <LoadingSpinner/>
  </div>
}
if(error){
  return <p className="centered">{error}</p>
}
   if(!loadedQuotes.text){
        return <p>No Quote found!</p>
    }
    return(
        <div>
         <HighlightedQuote text={loadedQuotes.text} author={loadedQuotes.author}/>
         {!match && (
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Load Comments
          </Link>
        </div>
      )}
     <Routes>
        <Route path="comments" element={<Comments/>}/>
        
     </Routes>
    
        </div>
    )
    }
    export default QuoteDetail