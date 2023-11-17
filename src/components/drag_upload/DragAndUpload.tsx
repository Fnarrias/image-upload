import uploadImage from './assets/uploadImage.jpeg'
function DragAndUpload() {
  return (
    <div>
        <div><img src={uploadImage} style={{ width: "20%"}} alt='upload image'></img></div>
    </div>
  )
}

export default DragAndUpload