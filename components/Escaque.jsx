import styles from '../styles/Escaque.module.css'

export default function Escaque(props) {
  return (
    <div 
    className={styles.escaque} 
    style={{backgroundColor: props.preta ? "#000" : "#fff" }} 
    />
  )
}