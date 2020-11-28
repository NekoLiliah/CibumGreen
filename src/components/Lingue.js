import { texts } from '../texts';

function Lingue(props) {

    return (
      <>
        <h2>{texts[props.lingua].titolo}</h2>
        <p className="paragrafo">{texts[props.lingua].corpo}</p>
      </>
    )
}

// function Lingue(props) {
//     if (props.lingua==="it") {
//       return (
//       <>
//         <h2>Titolo della pagina</h2>
//         <p className="paragrafo">In una terra lontana, dietro le montagne Parole, lontani dalle terre di Vocalia e Consonantia, vivono i testi casuali. Vivono isolati nella cittadina di Lettere, sulle coste del Semantico, un immenso oceano linguistico. Un piccolo ruscello chiamato Devoto Oli attraversa quei luoghi, rifornendoli di tutte le regolalie di cui hanno bisogno. È una terra paradismatica, un paese della cuccagna in cui golose porzioni di proposizioni arrostite volano in bocca a chi le desideri. Non una volta i testi casuali sono stati dominati dall’onnipotente Interpunzione, una vita davvero non ortografica.</p>
//       </>    
//     )} else if (props.lingua==="en") {
//       return (
//         <>
//           <h2>Page Title</h2>
//           <p className="paragrafo">In a distant land, behind the Parole mountains, far from the lands of Vocalia and Consonantia, random lyrics live. They live isolated in the town of Lettere, on the shores of the Semantic, an immense linguistic ocean. A small stream called Devoto Oli runs through those places, supplying them with all the regulations they need. It is a paradismatic land, a land of plenty where greedy portions of roasted propositions fly into the mouth of those who want them. Not once have random texts been dominated by the almighty punctuation, a truly non-spelling life.</p>
//         </>    
//       )} else if (props.lingua==="es") {
//         return (
//         <>
//           <h2>Título de la página</h2>
//           <p className="paragrafo">En una tierra lejana, detrás de las montañas Parole, lejos de las tierras de Vocalia y Consonantia, viven letras al azar. Viven aislados en el pueblo de Lettere, a orillas de la Semántica, un inmenso océano lingüístico. Un pequeño arroyo llamado Devoto Oli atraviesa esos lugares, proporcionándoles todas las regulaciones que necesitan. Es una tierra paradisíaca, una tierra de abundancia donde porciones codiciosas de propuestas asadas vuelan a la boca de quienes las quieren. Ni una sola vez los textos aleatorios han estado dominados por la puntuación todopoderosa, una vida verdaderamente sin ortografía.</p>
//         </>    
//       )}
//   }
  
  export default Lingue;