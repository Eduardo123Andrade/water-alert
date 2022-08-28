import './App.css';
import { WaterAlertProvider } from './providers';
import { Home } from './screens';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WaterAlertProvider>
          <Home />
        </WaterAlertProvider>
      </header>
      {/* <body>
        <Home />
      </body> */}
    </div>
  );
}

export default App;
