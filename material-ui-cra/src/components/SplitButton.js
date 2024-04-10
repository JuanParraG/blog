import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function SplitButton({children}) {
  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="text" {...bindTrigger(popupState)}>
            {children}
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>Leidy Cardozo</MenuItem>
            <MenuItem onClick={popupState.close}>Juan Parra</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default SplitButton;