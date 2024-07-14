import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useStores from '../stores/BaseStore';
import { observer } from 'mobx-react-lite';
import { Typography } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const BaseModal = () => {
  const { modalStore } = useStores();

  return (
    <div>
      <Modal
        open={modalStore.isOpen}
        onClose={() => modalStore.closeModal()}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalStore.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {modalStore.message}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default observer(BaseModal)