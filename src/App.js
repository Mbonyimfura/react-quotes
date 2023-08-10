import React from "react";
import { Route,Routes,useNavigate } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import Layout from "./components/layout/Layout";
import { useEffect } from "react";
import { Suspense } from "react/cjs/react.production.min";
import LoadingSpinner from "./components/UI/LoadingSpinner";
const NewQuote=React.lazy(()=>import('./pages/NewQuotes'));
const QuoteDetail=React.lazy(()=>import('./pages/QuoteDetail'));
const NotFound=React.lazy(()=>import('./pages/NotFound'));
function App() {
  return (
    <Layout>
      <Suspense fallback={<div className="centered"><LoadingSpinner/></div>}>
<Routes>
  <Route path="/" element={<RedirectToAllQuote/>}/>
  <Route path='/quotes' element={<AllQuotes/>}/>
  <Route path="quotes/:quoteId/*" element={<QuoteDetail />}>
    
    </Route>
  <Route path='/new-quote' element={<NewQuote/>}/>
  <Route path="*" element={<NotFound/>}/>
</Routes>
</Suspense>
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
