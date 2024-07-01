import React from 'react'
import Navbar from './components/Navbar'
import NewsComponents from './components/NewsComponents'
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
// export default class App extends Component {
const App=()=>{
   const pageSize=12;
  // render() {
   

    return (

     <>
     <LoadingBar
        color='#f11946'
        progress={100}//initial progress
        onLoaderFinished={() => 100}
      />
    <BrowserRouter>
<Navbar />
{/* <div className="container my-3">
<TextForm alertmessg={showalert}heading="Enter the text to analyze"/>

</div> */}


<Routes>
<Route path="/" element={<NewsComponents pageSize={pageSize} country="in" category='general'/>}/>
</Routes>
<Routes>
  <Route path="/business" element={<NewsComponents pageSize={pageSize} country="in" category='business'/>}/>
</Routes><Routes>
  <Route path="/entertainment" element={<NewsComponents pageSize={pageSize} country="in" category='entertainment'/>}/>
</Routes><Routes>
  <Route path="/general" element={<NewsComponents pageSize={pageSize} country="in" category='general'/>}/>
</Routes><Routes>
  <Route path="/health" element={<NewsComponents pageSize={pageSize} country="in" category='health'/>}/>
</Routes><Routes>
  <Route path="/science" element={<NewsComponents pageSize={pageSize} country="in" category='science'/>}/>
</Routes><Routes>
  <Route path="/sports" element={<NewsComponents pageSize={pageSize} country="in" category='sports'/>}/>
</Routes><Routes>
  <Route path="/technology" element={<NewsComponents pageSize={pageSize} country="in" category='technology'/>}/>
</Routes>
</BrowserRouter> 

     </> 
     
    )
}
export default App;