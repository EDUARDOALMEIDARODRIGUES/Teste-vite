import { useState } from "react";

const Buttom = () => { 
      const [count, setCount] = useState(0);

      const haadleClick = () => {
                  setCount(count + 1);
                  alert(" morram " + count + " africanos")
            }
            
            return (
            <button type="button" onClick={haadleClick}>
                  me apete
            </button> 
      );
}

export default Buttom;