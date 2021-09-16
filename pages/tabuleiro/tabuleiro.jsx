import Quadrado from "../../components/Quadrado"

export default function tabuleiro() {
  
  return (
    <div style={{
      backgroundColor: "gray",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }} >
      {desenhaFileira()}
    </div>
  )
}


function desenhaFileira(){

  let fileira = []
  let cont = 0
  
  for (let i=0; i<=8; i++){
    fileira.push(
      <div>        
        <Quadrado color={cont++}></Quadrado>
        <Quadrado color={cont++}></Quadrado>
        <Quadrado color={cont++}></Quadrado>
        <Quadrado color={cont++}></Quadrado>
        <Quadrado color={cont++}></Quadrado>
        <Quadrado color={cont++}></Quadrado>
        <Quadrado color={cont++}></Quadrado>
        <Quadrado color={cont++}></Quadrado>
      </div>
    )
    cont++;
  }
  
  return fileira
}