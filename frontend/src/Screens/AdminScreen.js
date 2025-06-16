// import React, { useContext, useState } from 'react'
// import { Form, Button } from 'react-bootstrap'
// import axios from 'axios'
// import { UserContext } from '../App'
// import Message from '../components/Message'
// import Loader from '../components/Loader'

// const AdminScreen = () => {
//   const { state } = useContext(UserContext)

//   const [link, setLink] = useState()
//   const [address, setAddress] = useState('')
//   const [status, setStatus] = useState('')
//   const [image, setImage] = useState('')
//   const [isTop, setIsTop] = useState(false)
//   const [uploading, setUploading] = useState(false)
//   const [success, setSuccess] = useState(false)

//   const uploadImageHandler = async (e) => {
//     const file = e.target.files[0]
//     const formData = new FormData()
//     formData.append('image', file)

//     setUploading(true)

//     try {
//       const config = {
//         headers: {
//           'Content-Type': 'application/json'
//         },
//       }

//       const { data } = await axios.post('/upload', formData, config)

//       setImage(data)
//       setUploading(false)
//     } catch (err) {
//       console.log(err)
//       setUploading(false)
//     }
//   }

//   const submitHandler = () => {
//     fetch('/create', {
//       method: 'post',
//       headers: {
//         'Content-Type': 'application/json',
//         "Authorization": "Bearer " + localStorage.getItem("jwt")
//       },
//       body: JSON.stringify({
//         link,
//         address,
//         status,
//         image,
//         isTop,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setSuccess(true)
//       })
//       .catch((err) => {
//         console.log(err)
//         setSuccess(false)
//       })
//   }

//   return (
//     <div style={{ height: '70vh' }}>
//     <h2 className='text-center'>Admin Page</h2>
//     <div style={{ display: 'flex', justifyContent: 'center' }}>
//       {!state ? (
//         <Message variant='primary'>Only Admin can access this Resource</Message>
//       ) : (
//         <>
//         <Form onSubmit={submitHandler}>
//           <Form.Group controlId='link'>
//             <Form.Label>Link</Form.Label>
//             <Form.Control
//               type='link'
//               placeholder='Enter link'
//               value={link}
//               onChange={(e) => setLink(e.target.value)}
//             ></Form.Control>
//           </Form.Group>

//           <Form.Group controlId='address'>
//             <Form.Label>Address</Form.Label>
//             <Form.Control
//               type='address'
//               placeholder='Enter address'
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//             ></Form.Control>
//           </Form.Group>

//           <Form.Group controlId='status'>
//             <Form.Label>Status</Form.Label>
//             <Form.Control
//               type='status'
//               placeholder='Enter status'
//               value={status}
//               onChange={(e) => setStatus(e.target.value)}
//             ></Form.Control>
//           </Form.Group>
//           <Form.Group controlId='image'>
//           <Form.Label>Image</Form.Label>
//               <Form.Control
//                 type='text'
//                 placeholder='Enter Image'
//                 value={image}
//                 onChange={(e) => setImage(e.target.file)}
//               ></Form.Control>
//         </Form.Group>
//         <Form.File
//             id='image_file'
//             label='Choose Image'
//             custom
//             onChange={uploadImageHandler}
//         >
//           {uploading && <Loader />}
//         </Form.File>
//           <Form.Group controlId='istop'>
//             <Form.Check
//               type='checkbox'
//               label='Top'
//               checked={isTop}
//               onChange={(e) => setIsTop(e.target.checked)}
//             ></Form.Check>
//           </Form.Group>
//           <Button className='btn btn-block' type='submit' variant='primary'>
//             Add
//           </Button>
//         </Form>
//         {success && <Message variant='success'>Project Added Successfully..!!!</Message>}
//       </>
//       )}
//     </div>
//     </div>
//   )
// }

// export default AdminScreen


import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import { UserContext } from '../App'
import Message from '../components/Message'
import Loader from '../components/Loader'

const AdminScreen = () => {
  const { state } = useContext(UserContext)

  const [link, setLink] = useState('')
  const [address, setAddress] = useState('')
  const [status, setStatus] = useState('')
  const [order, setOrder] = useState('');
  const [image, setImage] = useState('')
  const [isTop, setIsTop] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [success, setSuccess] = useState(false)

  const submitHandler = async (e) => {
    e.preventDefault();
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append('image', image);

      const uploadResponse = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // console.log(uploadResponse.data.secure_url);

      const projectResponse = await axios.post('/create', {
        link,
        address,
        status,
        order,
        img: uploadResponse.data.secure_url,
        top: isTop,
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
      });

      if (projectResponse.status === 200) {
        setSuccess(true);
        setLink('');
        setAddress('');
        setStatus('');
        setOrder('');
        setImage('');
        setIsTop(false);
      } else {
        // setError('Error creating project');
        console.log('Error creating project')
      }
    } catch (err) {
      console.log(err);
      // setError('Error uploading image');
      console.log('Error uploading image')
    } finally {
      setUploading(false);
    }
  };

  // const uploadImageHandler = async (e) => {
  //   const file = e.target.files[0]
  //   const formData = new FormData()
  //   formData.append('image', file)

  //   setUploading(true)

  //   try {
  //     const { data } = await axios.post('/upload', formData)

  //     setImage(data.secure_url)
  //     setUploading(false)
  //   } catch (err) {
  //     console.log(err)
  //     setUploading(false)
  //   }
  // }

  // const submitHandler = () => {
  //   axios.post('/create', {
  //     link,
  //     address,
  //     status,
  //     img: image, // Sending image URL instead of file
  //     top: isTop,
  //   }, {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer ' + localStorage.getItem('jwt')
  //     }
  //   })
  //     .then(() => {
  //       setSuccess(true)
  //       // Clear form fields
  //       setLink('')
  //       setAddress('')
  //       setStatus('')
  //       setImage('')
  //       setIsTop(false)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setSuccess(false)
  //     })
  // }

  return (
    <div style={{ height: '70vh' }}>
      <h2 className='text-center'>Admin Page</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* {!state ? (
          <Message variant='primary'>Only Admin can access this Resource</Message>
        ) : ( */}
          <>
            <Form onSubmit={submitHandler}>
              <Form.Group controlId='link'>
                <Form.Label>Link</Form.Label>
                <Form.Control
                  type='link'
                  placeholder='Enter link'
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='address'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type='address'
                  placeholder='Enter address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='status'>
                <Form.Label>Status</Form.Label>
                <Form.Control
                  type='status'
                  placeholder='Enter status'
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                ></Form.Control>
              </Form.Group>

              <Form.Group controlId='order'>
                <Form.Label>Order</Form.Label>
                <Form.Control
                  type='order'
                  placeholder='Enter order'
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                ></Form.Control>
              </Form.Group>

              {/* <Form.Group controlId='image'>
                <Form.Label>Image</Form.Label>
                <Form.File
                  id='image_file'
                  label='Choose Image'
                  custom
                  onChange={uploadImageHandler}
                />
                {uploading && <Loader />}
              </Form.Group> */}

              <Form.Group controlId='image'>
                <Form.Label>Image</Form.Label>
                <Form.File
                  id='image_file'
                  label='Choose Image'
                  custom
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {uploading && <Loader />}
              </Form.Group>

              <Form.Group controlId='istop'>
                <Form.Check
                  type='checkbox'
                  label='Top'
                  checked={isTop}
                  onChange={(e) => setIsTop(e.target.checked)}
                ></Form.Check>
              </Form.Group>

              <Button className='btn btn-block' type='submit' variant='primary'>
                Add
              </Button>
            </Form>
            {success && <Message variant='success'>Project Added Successfully..!!!</Message>}
          </>
        {/* )} */}
      </div>
    </div>
  )
}

export default AdminScreen