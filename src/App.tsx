import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Cate from './components/cate/Cate';
import CateItem from './components/cateItem/CateItem';
import CateList from './components/cateList/CateList';






function App() {
  return (
<BrowserRouter>

<Routes>

  <Route path='/' element={<Cate />}>
  
  
    
  <Route path='/:id' element={<CateItem />} />
    </Route>

 

</Routes>




</BrowserRouter>
  );
}

export default App;
