import { Grid, Radio,Button} from '@mui/material';
import { pink } from '@mui/material/colors';
import * as React from 'react';
import CardPost from './CardPost';

function Carousel(){
    return(
        <Grid 
            container 
            spacing={5} 
            rowSpacing={2} 
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            justifyContent="space-evenly"
            alignItems="center">

                <Button aria-label="delete" color="primary" variant='contained'>
                    {"<"}
                </Button>
                <Grid item md={3}>
                    <CardPost/>
                </Grid>
                <Grid item md={3}>
                    <CardPost/>
                </Grid>   
                <Button aria-label="delete" color="primary" variant='contained'>
                    {">"}
                </Button>
                <Grid  container justifyContent='center' md={12}>
                <ColorRadioButtons/>
                </Grid>  
                
        </Grid>
    )
}
export default Carousel;

function ColorRadioButtons() {
    const [selectedValue, setSelectedValue] = React.useState('a');
  
    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
  
    const controlProps = (item) => ({
      checked: selectedValue === item,
      onChange: handleChange,
      value: item,
      name: 'color-radio-button-demo',
      inputProps: { 'aria-label': item },
    });
  
    return (
      <div>
        <Radio {...controlProps('a')} />
        <Radio {...controlProps('b')} color="secondary" />
        <Radio {...controlProps('c')} color="success" />
        <Radio {...controlProps('d')} color="default" />
        <Radio
          {...controlProps('e')}
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      </div>
    );
  }