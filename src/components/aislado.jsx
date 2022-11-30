import React, { memo } from 'react'


/* Usamos la funcion o Hook memo para bloquerar todo */


export default  memo(function aislado() {
    console.log("Render de la ISLA");

  return (
    <div>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
        <p>algo</p>
    </div>  
  )
}
)