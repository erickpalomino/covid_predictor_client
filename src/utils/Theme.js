import { red } from '@mui/material/colors';
import { createTheme} from '@mui/material/styles';

const CustomTheme = createTheme({
    palette: {
      primary: {
        main: red[900],
      },
    },
  });

export default CustomTheme;