import React, { useState } from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import {
  Grid,
  Typography,
  IconButton,
  Dialog,
  DialogContent,
  Button,
  TextField,
} from '@mui/material'
import girl1 from './Images/girl-1.jpg'
import girls3 from './Images/girls-3.jpg'
import girls5 from './Images/girls-5.jpg'
import mens1 from './Images/mens-1.jpg'
import mens2 from './Images/mens-2.jpg'
import mens4 from './Images/mens-4.jpg'
import { RiEdit2Fill } from 'react-icons/ri'
import { AiFillDelete } from 'react-icons/ai'

const data = [
  {
    id: 101,
    name: 'John',
    mobile: '9045116165',
    toTill: '2024-09-01 to 2024-09-15',
    totalDays: 15,
    description: 'Vacation',
    approved: true,
    image: girl1,
  },
  {
    id: 102,
    name: 'Dom',
    mobile: '90451161554',
    toTill: '2024-08-05 to 2024-08-25',
    totalDays: 20,
    description: 'Medical Leave',
    approved: false,
    image: mens1,
  },
  {
    id: 103,
    name: 'Paul',
    mobile: '9045886165',
    toTill: '2024-07-01 to 2024-07-10',
    totalDays: 10,
    description: 'Conference',
    approved: null,
    image: girls3,
  },
  {
    id: 104,
    name: 'Whick',
    mobile: '9045116165',
    toTill: '2024-06-10 to 2024-06-20',
    totalDays: 10,
    description: 'Personal',
    approved: true,
    image: mens2,
  },
  {
    id: 105,
    name: 'Kavin',
    mobile: '909996165',
    toTill: '2024-05-15 to 2024-05-30',
    totalDays: 15,
    description: 'Family Event',
    approved: false,
    image: mens4,
  },
  {
    id: 106,
    name: 'Olive',
    mobile: '9088116165',
    toTill: '2024-09-10 to 2024-09-20',
    totalDays: 10,
    description: 'Business Trip',
    approved: null,
    image: girls5,
  },
]

const Accordion = () => {
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [attendanceData, setAttendanceData] = useState(data)

  // Function to handle image click
  const handleImageClick = (image) => {
    setSelectedImage(image)
    setOpen(true)
  }

  // Function to close the modal
  const handleClose = () => {
    setOpen(false)
    setSelectedImage(null)
  }

  // Handle approve/reject click
  const handleApprovalClick = (id, status) => {
    const updatedData = attendanceData.map((item) => {
      if (item.id === id) {
        return { ...item, approved: status }
      }
      return item
    })
    setAttendanceData(updatedData)
  }

  return (
    <div>
      <CCardHeader>
        <strong>Attendance</strong>
      </CCardHeader>
      {attendanceData.map((item, index) => (
        <CCard key={index} style={{ marginBottom: '10px', background: 'rgba(255, 255, 255, 0.5)' }}>
          <CCardBody>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={2}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    display: 'block',
                    margin: '0 auto',
                    cursor: 'pointer', // Pointer cursor to indicate clickability
                  }}
                  onClick={() => handleImageClick(item.image)} // On image click
                />
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1" color="textPrimary">
                  ID: {item.id}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography variant="body1" color="textPrimary">
                  Name: {item.name}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  style={{ marginLeft: '5px', gap: '0' }}
                >
                  {item.mobile}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  style={{ marginLeft: '5px', width: '250px' }}
                >
                  To Till: {item.toTill}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  color="textPrimary"
                  style={{ marginLeft: '50px', width: '250px' }}
                >
                  Total Days: {item.totalDays}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  label="Description"
                  variant="outlined"
                  value={item.description}
                  fullWidth
                  multiline
                  disabled
                  style={{ marginLeft: '70px', width: '120%' }}
                />
              </Grid>
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                    boxShadow: '0 0 10px green',
                    marginLeft: '200%',
                  }}
                  onClick={() => handleApprovalClick(item.id, true)}
                >
                  Approved
                </Button>
              </Grid>
              <Grid item xs={2}>
                <Button
                  // variant="contained"
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    marginLeft: '160%',
                    boxShadow: '0 0 10px red',
                  }}
                  onClick={() => handleApprovalClick(item.id, false)}
                >
                  Rejected
                </Button>
              </Grid>
              <Grid item xs={2}>
                <IconButton aria-label="edit">
                  <RiEdit2Fill style={{ fontSize: '25px', marginLeft: '280px' }} />
                </IconButton>
              </Grid>
            </Grid>
          </CCardBody>
        </CCard>
      ))}

      {/* Modal for zoomed image */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            overflow: 'hidden', // Prevent scroll
            borderRadius: '50%', // Ensure dialog itself is round
            maxWidth: 'none', // No fixed size for dialog
          },
        }}
      >
        <DialogContent style={{ padding: 0 }}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Zoomed"
              style={{
                width: '400px', // Set width for zoomed image
                height: '400px', // Set height for zoomed image
                borderRadius: '50%', // Make the image round
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Accordion
