import './App.css';

function upload(e) {
  console.warn(e.target.files);
  const files = e.target.files;
  const formData = new FormData();
  formData.append('user_file', files[0]);
  fetch('http://localhost:5000/upload', {
    method: "POST",
    body: formData
  }).then((resp)=>{
    resp.json().then((result)=>{
      console.warn("result ",result);
    })
  });
}
function App() {

  return (
    <div>
      <center><h1>Upload File in React JS</h1></center>
      <input type="file" name='user_file' onChange={(e) => upload(e)} />
    </div>
  );
}

export default App;
