import React, { useState } from 'react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import {
  Grid,
  Typography,
  IconButton,
  Button,
  MenuItem,
  Select,
  Dialog,
  DialogContent,
  TextField,
} from '@mui/material'
import { RiEdit2Fill } from 'react-icons/ri'
import { AiFillDelete } from 'react-icons/ai'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import girl1 from './Images/girl-1.jpg'
import girls3 from './Images/girls-3.jpg'
import girls5 from './Images/girls-5.jpg'
import mens1 from './Images/mens-1.jpg'
import mens2 from './Images/mens-2.jpg'
import mens4 from './Images/mens-4.jpg'
import { IoCalendarClearOutline } from 'react-icons/io5'

const data = [
  { id: 101, name: 'John', mobile: '123-456-7890', image: girl1, totalAssignShop: 10 },
  { id: 102, name: 'Dom', mobile: '123-456-7449', image: mens1, totalAssignShop: 11 },
  { id: 103, name: 'Paul', mobile: '123-456-7449', image: girls3, totalAssignShop: 20 },
  { id: 104, name: 'Whick', mobile: '123-456-7449', image: mens2, totalAssignShop: 51 },
  { id: 105, name: 'Kavin', mobile: '123-456-7449', image: mens4, totalAssignShop: 33 },
  { id: 106, name: 'Olive', mobile: '123-456-7449', image: girls5, totalAssignShop: 29 },
]

const Accordion = () => {
  const [attendanceData, setAttendanceData] = useState(data)
  const [calendarOpen, setCalendarOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)
  const [open, setOpen] = useState(false)

  // Function to handle image click (for zoom)
  const handleImageClick = (image) => {
    setSelectedImage(image)
    setOpen(true)
  }

  // Function to close the modal
  const handleClose = () => {
    setOpen(false)
    setSelectedImage(null)
  }

  const handleCalendarOpen = () => {
    setCalendarOpen(true)
  }

  const handleCalendarClose = () => {
    setCalendarOpen(false)
  }

  const handleDateChange = (date) => {
    setSelectedDate(date)
    setCalendarOpen(false)
  }

  const handleDropdownChange = (id, value) => {
    const updatedData = attendanceData.map((item) => {
      if (item.id === id) {
        return { ...item, selectedOption: value }
      }
      return item
    })
    setAttendanceData(updatedData)

    if (value === 'Choose from Calendar') {
      handleCalendarOpen()
    }
  }

  const handleTotalAssignShopChange = (id, value) => {
    const updatedData = attendanceData.map((item) => {
      if (item.id === id) {
        return { ...item, totalAssignShop: value }
      }
      return item
    })
    setAttendanceData(updatedData)
  }

  return (
    <div>
      <CCardHeader>
        <strong>Visit Shop</strong>
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
                    backdropFilter: 'blur(10px)',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleImageClick(item.image)} // Handle image click
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
                <Typography variant="body1" color="textPrimary">
                  Total Shop Visit: {item.totalAssignShop}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Select
                  value={item.selectedOption || 'Today'}
                  onChange={(e) => handleDropdownChange(item.id, e.target.value)}
                  fullWidth
                  displayEmpty
                >
                  <MenuItem value="Today">Today</MenuItem>
                  <MenuItem value="Yesterday">Yesterday</MenuItem>
                  <MenuItem value="Tomorrow">Tomorrow</MenuItem>
                  <MenuItem value="Choose from Calendar">
                    Choose from Calendar <IoCalendarClearOutline />
                  </MenuItem>
                </Select>
              </Grid>

              <Grid item xs={2} container alignItems="center" justifyContent="center">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: 'rgba(253, 227, 167);, 1',
                    color: 'black', // Setting the background color
                    '&:hover': {
                      backgroundColor: 'rgba(242, 120, 75, 0.7)', // Optional: Darken on hover
                    },
                  }}
                >
                  View Progress
                </Button>
              </Grid>
              <Grid
                item
                xs={10}
                container
                alignItems="center"
                justifyContent="flex-end"
                spacing={1}
              >
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

      {/* Image Zoom Modal */}
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
        <DialogContent>
          <img
            src={selectedImage}
            alt="Zoomed Image"
            style={{
              borderRadius: '50%',
              width: '400px', // Set width for zoomed image
              height: '400px', // Set height for zoomed image
            }}
            onClick={handleClose} // Close modal on image click
          />
        </DialogContent>
      </Dialog>

      {/* Calendar Modal */}
      <Dialog open={calendarOpen} onClose={handleCalendarClose}>
        <DialogContent>
          <DatePicker
            label="Choose Date"
            value={selectedDate}
            onChange={handleDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default Accordion
