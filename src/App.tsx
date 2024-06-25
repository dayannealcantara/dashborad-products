import GlobalStyle from "./GlobalStyle";
import Dashboard from "./pages/dashboard";


function App() { 
  return (
    <div style={{display:'flex', minHeight:'100vh', justifyContent:'center', alignItems:'center', marginTop:'56px'}}> 
     <GlobalStyle />   
     <Dashboard />
    </div>
  );
}

export default App;
