import {Card,CardContent,Typography} from '@mui/material';
import CardComentario from './CardComentario';
import { Directions, Margin, Padding } from '@mui/icons-material';
const EstiloDiv = {
    height: '250px',
    alignItems:"center",
    overflowY: 'scroll',
    // Agrega cualquier otro estilo que necesites
  };

 const data ={
    letterName: "D",
    title: " Domina los Patrones Prompt",
     date: "Abril 1, 2024", 
     post: <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7178792644330881027?compact=1" height="180" width="300" frameborder="0" allowfullscreen="" title="Publicación integrada"/>,
      ShortText: "¿Quieres mejorar tus interacciones con la inteligencia artificial? ¡Descubre cómo dominar los patrones Prompt puede llevarte al siguiente nivel! 💡", 
      text: "En Este documento de 7 páginas, exploramos en detalle cuatro patrones clave: Meta Language Creation, Output Automater, Flipped Interaction y Persona Pattern. Con ejemplos prácticos y esquemas claros, te ayudaremos a entender cómo aplicar estos patrones para obtener resultados óptimos en tus proyectos de IA.", 
      link: "https://www.linkedin.com/posts/juan-david-parra-g%C3%B3mez-188b72205_domina-los-patrones-prompt-activity-7178792646226718720-LJqy?utm_source=share&utm_medium=member_desktop"
    
}
function comentarios(){
    return(
        <>
        <Typography 
        variant='h5' 
        textAlign="start" >
            Publicaciones linkedin
        </Typography>
        
        <div style={EstiloDiv} >
        <CardComentario letterName={data.letterName} title={data.title} date={data.date} post={data.post} ShortText={data.ShortText} text={data.text} link={data.link} />
        <CardComentario letterName={data.letterName} title={data.title} date={data.date} post={data.post} ShortText={data.ShortText} text={data.text} link={data.link} />
        </div>
        </>     
    )
}
export default comentarios;