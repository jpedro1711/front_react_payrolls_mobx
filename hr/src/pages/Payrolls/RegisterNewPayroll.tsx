import { Button } from '@mui/material'
import useStores from '../../stores/BaseStore';
import { observer } from 'mobx-react-lite';

const RegisterNewPayroll = () => {
  const { payrollStore, userStore } = useStores();

  return (
    <div>
        <Button variant="contained" color="success" onClick={() => payrollStore.registerNew(userStore.user?.username)}>
            Register new 
        </Button>
    </div>
  )
}

export default observer(RegisterNewPayroll)