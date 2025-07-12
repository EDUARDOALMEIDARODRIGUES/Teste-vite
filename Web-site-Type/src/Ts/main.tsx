import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/App.css'
import App from './App.tsx'
import Buttom from "./components/Button.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <header className="bg-amber-50 grid grid-cols-3 gap-5 ">
      <div className=" col-span-1 col-end-3">
        <h1 className="text-center font-bold font-mono text-black">
          LOS POLLOS HERMANOS
        </h1>
      </div>
      <Buttom>
        <div className="conaie">
          <div className="cubo">
            <div className="s1"></div>
            <div className="s2"></div>
            <div className="s3"></div>
            <div className="s4"></div>
            <div className="s5"></div>
            <div className="s6"></div>
          </div>
        </div>
      </Buttom>    
    </header>
    <main>
    <App />
    </main>
  </StrictMode>
);
