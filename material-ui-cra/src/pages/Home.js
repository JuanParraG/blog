import AcercaBlog from "../components/AcercaBlog";
import Carousel from "../components/Carousel";
import Contacto from "../components/Contacto";
import Header from "../components/Header";
import Comentarios from "../components/Comentarios";

import { Grid } from "@mui/material";
import { Children } from "react";
const Margin = () => (
        <Grid item xs={1}/>
  )
function Home() {
    return (
        <Grid   
            container 
            spacing={2} 
            rowSpacing={1} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="space-evenly"
            alignItems="center"
        >
            <Margin/>
            <Grid item md={10}>
                <Header/>
            </Grid>
            <Margin/>
            <Margin/>
            <Grid item md={7}>
                <AcercaBlog/>
            </Grid>
            <Grid item md={3}>
                <Contacto/>             
            </Grid>
            <Margin/>
            <Margin/>
            <Grid item md={7}>
                <Carousel/>
            </Grid>
            <Grid item md={3}>
                <Comentarios/>            
            </Grid>         
            <Margin/>
        </Grid>
    )
}
export default Home;