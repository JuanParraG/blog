import {Card,Typography} from '@mui/material';
const EstiloDiv = {
    height: '200px',
    overflowY: 'scroll',
    // Agrega cualquier otro estilo que necesites
  };
function comentarios(){
    return(
        <>
        <Typography variant='h5' textAlign="center" marginTop={3}>Publicaciones linkedin</Typography>
        <div style={EstiloDiv} >
        <Comentario/>
        <Comentario/>
        <Comentario/>
        </div>
        </>     
    )
}
export default comentarios;

function Comentario(){
    return(
        <Card sx={{ maxWidth: 345, maxHeight: 200}}>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7178792644330881027?compact=1" height="399" width="300" frameborder="0" allowfullscreen="" title="Publicación integrada"/>
       </Card>
    )
}