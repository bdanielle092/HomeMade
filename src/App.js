import React, {useSate}  from 'react';
import './App.css';



function App() {
  const [image, setImage] = useState('')
  const [loading, isLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
      data.append('file', flie-[0])
      data.append('upload_preset', "icecream")
      setLoading(true)
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/dszckhcld/image/upload', 
        {
          method: 'POST',
          body: data
        }
      )
    const file = await res.json()
    
    setImage(file.secure_url)
    setLoading(false)
  }
  return (
    <div className="App">
      <h1>Upload Image</h1>
      <input type="file"
      name="file"
      placeholder="upload an image"
      onChange={uploadImage}/>
      {loading ? (
       <h3>Loading...</h3>
      ): (
        <img src={image} style={{width: '300'}} />
      )}
    </div>
  );
}

export default App;
