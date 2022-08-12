import './assets/sass/App.scss'
import Header from './components/header';
import routes from './routes';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Footer from './components/footer';
function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <Router>
      <div className="App">
        <Header routes={routes} />
        <Routes>
          {getRoutes(routes)};
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
