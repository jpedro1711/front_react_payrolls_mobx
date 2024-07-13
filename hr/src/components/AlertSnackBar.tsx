import { observer } from 'mobx-react-lite';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import useStores from '../stores/BaseStore';


const AlertSnackBar = observer(() => {
    const { alertStore} = useStores();

    const handleClose = () => {
        alertStore.clearAlert();
    };

    return (
        <Snackbar
            open={alertStore.open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
            <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '150%' }}>
                {alertStore.message}
            </Alert>
        </Snackbar>
    );
});

export default AlertSnackBar;