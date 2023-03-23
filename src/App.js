import Defaulayout from "./Components/Layouts/Defaulayout"

import { publicRouter } from "./Routers";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Defaulayout>
        <Routes>
          {publicRouter.map((route) =>
            <Route 
              key={route.Path} 
              path={route.Path} 
              element={<route.Page/>}
            />
          )}
        </Routes>
      </Defaulayout>
     </BrowserRouter>
    </div>
  );
}

export default App;
