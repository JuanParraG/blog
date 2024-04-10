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
            <Grid item 
            md={6} 
            xs={10} 
            sx={{display:"flex",
                flexDirection: "column",
                gap: 10, }}>
                <AcercaBlog/>
                <Carousel/>
            </Grid>
            
            <Grid item md={4} gap={3} xs={10}>
                <Contacto/>       
            <Paper elevation={3} sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 3,
                marginBottom: 3,
                boxShadow: "0 0 5px rgb(85, 108, 214)"
            }}>
                      
                <Comentarios/>  
                </Paper>      
            </Grid>
            
            
            <Margin/>     
        </Grid>
    )
}
export default Home;