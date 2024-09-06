import React, { useState } from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { Grid, Typography, IconButton, Dialog, DialogContent } from '@mui/material'
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
    status: 'Present',
    statu: 'Absent',
    image: girl1,
  },
  {
    id: 102,
    name: 'Dom',
    mobile: '90451161554',
    status: 'Present',
    statu: 'Absent',
    image: mens1,
  },
  {
    id: 103,
    name: 'Paul',
    mobile: '9045886165',
    status: 'Present',
    statu: 'Absent',
    image: girls3,
  },
  {
    id: 104,
    name: 'Whick',
    mobile: '9045116165',
    status: 'Present',
    statu: 'Absent',
    image: mens2,
  },
  {
    id: 105,
    name: 'Kavin',
    mobile: '909996165',
    status: 'Present',
    statu: 'Absent',
    image: mens4,
  },
  {
    id: 106,
    name: 'Olive',
    mobile: '9088116165',
    status: 'Present',
    statu: 'Absent',
    image: girls5,
  },
]

const Accordion = () => {
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

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

  return (
    <div>
      <CCardHeader>
        <strong>Attendance</strong>
      </CCardHeader>
      {data.map((item, index) => (
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
                <Typography variant="body1" color="textPrimary">
                  {item.mobile}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Typography
                  variant="body1"
                  style={{
                    backgroundColor: 'green', // Conditional background color for text
                    color: 'white',
                    padding: '4px',
                    borderRadius: '4px',
                    textAlign: 'center',
                    width: '70px',
                    marginBottom: '10px',
                  }}
                >
                  {item.status}
                </Typography>

                <Typography
                  variant="body1"
                  style={{
                    backgroundColor: 'red', // Conditional background color for text
                    color: 'white',
                    padding: '4px',
                    borderRadius: '4px',
                    textAlign: 'center',
                    width: '70px',
                  }}
                >
                  {item.statu}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <IconButton aria-label="edit">
                  <RiEdit2Fill style={{ fontSize: '25px' }} />
                </IconButton>
                <IconButton aria-label="delete">
                  <AiFillDelete style={{ fontSize: '25px' }} />
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
