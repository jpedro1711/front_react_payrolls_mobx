import { Backdrop, CircularProgress } from '@mui/material'
import { observer } from "mobx-react-lite"
import useStores from '../stores/BaseStore'

const Loading = () => {
  const { loadingStore } = useStores();

  return (
    <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loadingStore.isLoading}
    >
        <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default observer(Loading)