import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';

import DragAndUpload from '../components/drag_upload/DragAndUpload';
import UploadButton from '../components/upload_button/UploadButton';

function Upload() {
  return (
    <Card sx={{padding: '2%'}}>
        <h1>Upload your image</h1>
        <p>File should be jpeg, png ...</p>
        <Paper elevation={0} sx={{backgroundColor: '#f6f8fb', border:'1px dashed black', padding: '2%'}} >
            <DragAndUpload></DragAndUpload>
            <p>Drag and Drop your image here</p>
        </Paper>
        <p>Or</p>
        <UploadButton></UploadButton>
    </Card>
  )
}

export default Upload