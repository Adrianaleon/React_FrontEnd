import React, { useState } from "react";
//Onsubmit -Onclick - Onchange
const Select = () => {
  const [color, setColor] = useState("");
  const [talla, setTalla] = useState("no hay Seleccion ");
  const colores = ["crimson","yellow","steelblue","green"];  
  const tallas =[35,36,37,38,39,40];
  
  const handleSubmit =(e)=>{
    e.preventDefault()
  }
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <select
          style={{
            width: "350px",
            height: "30px",
            fontSize: "0.9rem",
          }}
          value={color}
          onChange={(e) => setColor(e.target.value)}
        >
          <option value=""default> Seleccione el color </option>
          {
            colores.map((color)=>{
                return <option value={color} key={color}>{color}</option>
            })
          }
        </select>

<select style={{
    width: "350px",
    height: "30px",
    fontSize: "0.9rem"
}}

value={tallas}
onChange={(e)=>setTalla(e.target.value)}
>
<option value="" default disabled>
    Seleccione la talla
</option>
{tallas.map((talla) =>{
    return (
        <option value={talla} key{talla}>{talla}</option>
    )
})}
<option value=""></option>
</select>

      </form>
      <div style={{
        width:"500px",
        height:"300px",
        border:"3px solide red",
        background:"color",
      }} 
      >

      </div>
    </div>
  );
};

export default Select;
