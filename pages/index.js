import styles from '../styles/Home.module.css'
import Tabuleiro from '../components/Tabuleiro'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Tabuleiro/>
    </div>
  )
}


// function desenhaFileira(){

//   let fileira = []
//   let cont = 0
  
//   for (let i=0; i<=8; i++){
//     fileira.push(
//       <div>        
//         <Escaque color={cont++}/>
//         <Escaque color={cont++}/>
//         <Escaque color={cont++}/>
//         <Escaque color={cont++}/>
//         <Escaque color={cont++}/>
//         <Escaque color={cont++}/>
//         <Escaque color={cont++}/>
//         <Escaque color={cont++}/>
//       </div>
//     )
//     cont++;
//   }
  
//   return fileira
// }