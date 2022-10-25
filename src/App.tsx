import { Suspense, useState } from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Header from './components/navbar';
import { AppRoutes, routes } from './routes'

function App() {

  return (
    <Suspense fallback={null}>
      <Router>
         <Header />
      <Routes>
         {routes.map((route:AppRoutes, index) => {
        const { component: Component, path, exact } = route;
        return (
          <Route key={index} path={path} element={<Component />} />
        )
     
      })

      }
      </Routes>
      </Router>
     
    </Suspense>
  )
}

export default App
