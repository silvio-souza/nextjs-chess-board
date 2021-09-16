export default function Quadrado(props) {
  return (
    <div style={{
      height: "10vh",
      width: "10vh",
      backgroundColor: props.color%2 === 0 ? "#fff" : "#000"
    }}>

    </div>
  )
}