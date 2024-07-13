import { AllRoutes } from './routes/AllRoutes';
import './App.css';
import { Footer, Header } from './components';

function App() {
  return (
    <div className="App dark:bg-darkBG">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
