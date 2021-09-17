import styles from '../styles/Linha.module.css'
import Escaque from "./Escaque";

export default function Linha(props) {
  return (
    <div className={styles.linha}>
      <Escaque preta={props.preta}/>
      <Escaque preta={!props.preta}/>
      <Escaque preta={props.preta}/>
      <Escaque preta={!props.preta}/>
      <Escaque preta={props.preta}/>
      <Escaque preta={!props.preta}/>
      <Escaque preta={props.preta}/>
      <Escaque preta={!props.preta}/>
    </div>
  )
}