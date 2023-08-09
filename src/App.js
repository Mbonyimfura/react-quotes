import { Route,Routes,useNavigate } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";
import { useEffect } from "react";
//import Comments from "./components/comments/Comments";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <Layout>
<Routes>
  <Route path="/" element={<RedirectToAllQuote/>}/>
  <Route path='/quotes' element={<AllQuotes/>}/>
  <Route path="quotes/:quoteId/*" element={<QuoteDetail />}>
    
    </Route>
  <Route path='/new-quote' element={<NewQuote/>}/>
  <Route path="*" element={<NotFound/>}/>
</Routes>
    </Layout>
  );
}
const RedirectToAllQuote=()=>{
const navigate=useNavigate();
useEffect(()=>{
  navigate('/quotes')
},[navigate])
return null
}

export default App;
