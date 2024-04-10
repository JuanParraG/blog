import { Box, Avatar, Button, Link , ButtonGroup} from "@mui/material";
import imagen from '../assets/1.jpg';
import { FaLinkedin } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import SplitButton from "./SplitButton";
function Contacto (){
    return(
        <Box
        display="flex"
        flexDirection="row"
        justifyContent="center">
        
        <Box
          display="flex"
          flexDirection="column"
          gap={2}
        >
            <img
              alt="Remy Sharp"
              src={imagen}
              width={150}
              height={150}
              style={{ borderRadius: "25%" }}
            />
            <Button variant="contained">Saber más</Button>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            flexDirection="column"
          >
            <SplitButton>
                <FaLinkedin size={30} />
            </SplitButton>
            <SplitButton>
                <FaMailBulk size={30} />
            </SplitButton>  
          </Box>
      </Box>
      
    )
}
export default Contacto;

