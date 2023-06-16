import { useEffect, useState } from "react";

function CheckNumber() {

  const [number, setNumber] = useState(0)
  const [result, setResult] = useState("")

  useEffect(() => {
    handleCheckNumber()
  }, [number])

  const handleCheckNumber = () => {
    const value = parseInt(number)

    if(isNaN(value)){
      setResult("O número não é válido")
      return
    }

    if(value % 2 == 0){
      setResult("PAR")
    } else {
      setResult("ÍMPAR")
    }

  }

  return ( 
    <div style={{display: 'flex', flexDirection: "column"}}>
      <h1>Verificador de número</h1>
      <input type="text" name="numero" value={number} placeholder="Digite um número" onChange={(e) => setNumber(e.target.value)} />

      <span>{result}</span>
    </div>
  );
}

export default CheckNumber;