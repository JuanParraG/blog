import AcercaBlog from "../components/AcercaBlog";
import Carousel from "../components/Carousel";
import Contacto from "../components/Contacto";
import Header from "../components/Header";
import Comentarios from "../components/Comentarios";

import { Grid, Paper} from "@mui/material";
const Margin = () => (
        <Grid item xs={1}/>
  )
function Home() {
    return (
        <Grid  
        container
        columnSpacing={5}
        >
            <Margin/>
            <Grid item md={10}  marginTop={5} marginBottom={3}>
                <Header/>
            </Grid>
            <Margin/>
            <Margin/>
            <Grid item md={7} xs={10}>
                <AcercaBlog/>
                <Carousel/>
            </Grid>
            
            <Grid item md={3} gap={3} xs={10}>
            <Paper elevation={10} padding={3} marginBottom={3}>
                <Contacto/>             
                <Comentarios/>      
                </Paper>      
            </Grid>
            
            
            <Margin/>     
        </Grid>
    )
}
export default Home;