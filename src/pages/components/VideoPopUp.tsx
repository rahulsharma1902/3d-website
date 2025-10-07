import React from 'react';
import { Modal, Box } from '@mui/material';

const VideoModal = () => {
  return (
    <Modal open={true} onClose={() => console.log('Modal closed')}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'black',
          padding: 2,
          width: '80%',
          height: '80%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          outline: 'none', // Prevent default outline
        }}
      >
        <video controls autoPlay loop style={{ width: '100%', height: '100%' }}>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </Modal>
  );
};

export default VideoModal;
