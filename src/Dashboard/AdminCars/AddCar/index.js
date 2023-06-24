import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { TextField, Grid, Divider, useMediaQuery, useTheme } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import { Select } from '@mui/material'
import { FormControl } from '@mui/material'
import { InputLabel } from '@mui/material'
import { useDispatch } from 'react-redux'
import { addCar } from '../../../redux/actions'
import { toast } from 'react-toastify'

const steps = ['General', 'Specs', 'Description', 'Extra']

import { customAlphabet } from 'nanoid'

const nanoid = customAlphabet('1234567890', 6)

export default function AddCar({ onClose }) {
  const [activeStep, setActiveStep] = useState(0)
  const [skipped, setSkipped] = useState(new Set())
  const [open, setOpen] = useState(true)
  const [carInfo, setCarInfo] = useState({
    carName: '',
    originalPrice: '',
    discountedPrice: '',
    description: '',
    images: ['', '', '']
  })
  const handleChange = (e) => {
    const { name, value } = e.target
    setCarInfo((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const handleImageChange = (index, imageUrl) => {
    setCarInfo((prevState) => {
      const newImages = [...prevState.images]
      newImages[index] = imageUrl
      return { ...prevState, images: newImages }
    })
  }
  const [formData, setFormData] = useState({
    Condition: '',
    Type: '',
    Make: '',
    'Max Seating': '',
    Year: '',
    'Transmission Type': '',
    'Fuel Type': '',
    Mileage: ''
  })

  const [features, setFeatures] = useState([])
  const [newFeature, setNewFeature] = useState('')

  const handleAddFeature = () => {
    if (newFeature.trim() !== '') {
      setFeatures((prevFeatures) => [...prevFeatures, newFeature])
      setNewFeature('')
    }
  }

  const [extraInfo, setExtraInfo] = useState({
    Length: '',
    Width: '',
    Height: '',
    Wheelbase: '',
    'Curb Weight': '',
    'Trunk Capacity': ''
  })

  const isStepOptional = (step) => {
    return step === 1
  }

  const isStepSkipped = (step) => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    p: 4,
    width: '90%',
    maxWidth: '600px',
    maxHeight: '800px'
  }
  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (
      !carInfo.carName ||
      !carInfo.originalPrice ||
      !carInfo.discountedPrice ||
      !carInfo.description ||
      !carInfo.images ||
      !formData.Condition ||
      !formData.Type ||
      !formData.Make ||
      !formData['Max Seating'] ||
      !formData.Year ||
      !formData['Transmission Type'] ||
      !formData['Fuel Type'] ||
      !formData.Mileage ||
      !extraInfo.Length ||
      !extraInfo.Width ||
      !extraInfo.Height ||
      !extraInfo.Wheelbase ||
      !extraInfo['Curb Weight'] ||
      !extraInfo['Trunk Capacity']
    ) {
      toast.error('Please fill in all the fields. !', {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      return
    } else {
      const data = {
        car_id: nanoid(),
        carName: carInfo.carName,
        price: {
          originalPrice: carInfo.originalPrice,
          discountedPrice: carInfo.discountedPrice
        },
        description: carInfo.description,
        images: carInfo.images,
        tabOne: [
          {
            label: 'Condition',
            value: formData.Condition
          },
          {
            label: 'Type',
            value: formData.Type
          },
          {
            label: 'Make',
            value: formData.Make
          },
          {
            label: 'Max Seating',
            value: formData['Max Seating']
          },
          {
            label: 'Year',
            value: formData.Year
          },
          {
            label: 'Transmission Type',
            value: formData['Transmission Type']
          },
          {
            label: 'Fuel Type',
            value: formData['Fuel Type']
          },
          {
            label: 'Mileage',
            value: formData.Mileage
          }
        ],
        tabTwo: features,
        tabThree: [
          {
            label: 'Length',
            value: extraInfo.Length
          },
          {
            label: 'Width',
            value: extraInfo.Width
          },
          {
            label: 'Height',
            value: extraInfo.Height
          },
          {
            label: 'Wheelbase',
            value: extraInfo.Wheelbase
          },
          {
            label: 'Curb Weight',
            value: extraInfo['Curb Weight']
          },
          {
            label: 'Trunk Capacity',
            value: extraInfo['Trunk Capacity']
          }
        ],
        tabFour: [
          { label: 'Name', value: 'Chetan Kochiyaniya' },
          { label: 'Phone', value: '+91 6353074971' },
          { label: 'Mobile phone', value: '+19 6353074971' },
          { label: 'Email', value: 'chetan@carhouse.com' }
        ]
      }
      dispatch(addCar(data))
      toast.success('car successfull added', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      })
      setOpen(false)
    }
  }
  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography variant="h6" sx={{ display: 'flex', justifyContent: 'center' }}>
            Add New Car
          </Typography>
          <Box sx={{ width: '100%', marginTop: 2 }}>
            <Stepper activeStep={activeStep} alternativeLabel={isSmallScreen}>
              {steps.map((label, index) => {
                const stepProps = {}
                const labelProps = {}
                if (isStepSkipped(index)) {
                  stepProps.completed = false
                }
                return (
                  <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                  </Step>
                )
              })}
            </Stepper>
            <Divider sx={{ marginBottom: '20px', marginTop: '15px' }} />
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography sx={{ mt: 2, mb: 1 }}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}>
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  <Button onClick={handleSubmit}>Submit</Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {activeStep === 0 && (
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        label="Car Name"
                        name="carName"
                        value={carInfo.carName}
                        onChange={handleChange}
                        required
                        fullWidth
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Original Price"
                        name="originalPrice"
                        value={carInfo.originalPrice}
                        onChange={handleChange}
                        type="number"
                        required
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Discounted Price"
                        name="discountedPrice"
                        value={carInfo.discountedPrice}
                        onChange={handleChange}
                        type="number"
                        required
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Description"
                        name="description"
                        value={carInfo.description}
                        onChange={handleChange}
                        multiline
                        required
                        fullWidth
                        rows={2}
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Image URL 1"
                        name="image1"
                        value={carInfo.images[0]}
                        onChange={(event) => handleImageChange(0, event.target.value)}
                        required
                        fullWidth
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Image URL 2"
                        name="image2"
                        value={carInfo.images[1]}
                        onChange={(event) => handleImageChange(1, event.target.value)}
                        required
                        fullWidth
                        size="small"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Image URL 3"
                        name="image3"
                        value={carInfo.images[2]}
                        onChange={(event) => handleImageChange(2, event.target.value)}
                        required
                        fullWidth
                        size="small"
                      />
                    </Grid>
                  </Grid>
                )}

                {activeStep === 1 && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Type"
                        name="type"
                        value={formData.Type}
                        onChange={(e) =>
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            Type: e.target.value
                          }))
                        }
                        required
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Condition</InputLabel>
                        <Select
                          value={formData.Condition}
                          label="Condition"
                          onChange={(e) =>
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              Condition: e.target.value
                            }))
                          }
                          size="small">
                          <MenuItem value="new">New</MenuItem>
                          <MenuItem value="used">Used</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Make"
                        name="make"
                        value={formData.Make}
                        onChange={(e) =>
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            Make: e.target.value
                          }))
                        }
                        required
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Fuel Type</InputLabel>
                        <Select
                          value={formData['Fuel Type']}
                          label="Fuel Type"
                          onChange={(e) =>
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              'Fuel Type': e.target.value
                            }))
                          }
                          size="small">
                          <MenuItem value="Diesel">Diesel</MenuItem>
                          <MenuItem value="Petrol">Petrol</MenuItem>
                          <MenuItem value="Electric"> Electric</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Year"
                        name="year"
                        value={formData.Year}
                        onChange={(e) =>
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            Year: e.target.value
                          }))
                        }
                        type="number"
                        required
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Max Seating</InputLabel>
                        <Select
                          value={formData['Max Seating']}
                          label="Max Seating"
                          onChange={(e) =>
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              'Max Seating': e.target.value
                            }))
                          }
                          size="small">
                          <MenuItem value="2">2</MenuItem>
                          <MenuItem value="4">4</MenuItem>
                          <MenuItem value="5">5</MenuItem>
                          <MenuItem value="5">6</MenuItem>
                          <MenuItem value="5">7</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Mileage"
                        name="mileage"
                        value={formData.Mileage}
                        onChange={(e) =>
                          setFormData((prevFormData) => ({
                            ...prevFormData,
                            Mileage: e.target.value
                          }))
                        }
                        required
                        type="number"
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel>Transmission Type</InputLabel>
                        <Select
                          value={formData['Transmission Type']}
                          label="Transmission Type"
                          onChange={(e) =>
                            setFormData((prevFormData) => ({
                              ...prevFormData,
                              'Transmission Type': e.target.value
                            }))
                          }
                          size="small">
                          <MenuItem value="Automatic">Automatic</MenuItem>
                          <MenuItem value="Manual">Manual</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                )}
                {activeStep === 2 && (
                  <>
                    <Grid container spacing={2} mt={2}>
                      {features.map((feature, index) => (
                        <Grid item xs={12} key={index}>
                          <Typography>
                            {feature}{' '}
                            <Button
                              size="small"
                              sx={{ color: 'var(--red-color)', fontSize: '11px' }}
                              onClick={() =>
                                setFeatures((prevFeatures) =>
                                  prevFeatures.filter((_, i) => i !== index)
                                )
                              }>
                              Remove
                            </Button>
                          </Typography>
                        </Grid>
                      ))}
                    </Grid>
                    <Grid container>
                      <Grid item xs={12} sm={8}>
                        <TextField
                          value={newFeature}
                          onChange={(e) => setNewFeature(e.target.value)}
                          label="New Feature"
                          size="small"
                          sx={{ marginRight: 2 }}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" size="small" onClick={handleAddFeature}>
                          Add Feature
                        </Button>
                      </Grid>
                    </Grid>
                  </>
                )}
                {activeStep === 3 && (
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Length"
                        name="Length"
                        value={extraInfo.Length}
                        onChange={(e) =>
                          setExtraInfo((prev) => ({
                            ...prev,
                            Length: e.target.value
                          }))
                        }
                        type="number"
                        required
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Width"
                        name="Width"
                        value={extraInfo.Width}
                        onChange={(e) =>
                          setExtraInfo((prev) => ({
                            ...prev,
                            Width: e.target.value
                          }))
                        }
                        type="number"
                        required
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Height"
                        name="Height"
                        value={extraInfo.Height}
                        onChange={(e) =>
                          setExtraInfo((prev) => ({
                            ...prev,
                            Height: e.target.value
                          }))
                        }
                        type="number"
                        required
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Wheelbase"
                        name="Wheelbase"
                        value={extraInfo.Wheelbase}
                        onChange={(e) =>
                          setExtraInfo((prev) => ({
                            ...prev,
                            Wheelbase: e.target.value
                          }))
                        }
                        type="number"
                        required
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Curb Weight"
                        name="CurbWeight"
                        value={extraInfo['Curb Weight']}
                        onChange={(e) =>
                          setExtraInfo((prev) => ({
                            ...prev,
                            'Curb Weight': e.target.value
                          }))
                        }
                        type="number"
                        required
                        size="small"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Trunk Capacity"
                        name="TrunkCapacity"
                        value={extraInfo['Trunk Capacity']}
                        onChange={(e) =>
                          setExtraInfo((prev) => ({
                            ...prev,
                            'Trunk Capacity': e.target.value
                          }))
                        }
                        type="number"
                        required
                        size="small"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                )}
                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                  <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}>
                    Back
                  </Button>
                  <Box sx={{ flex: '1 1 auto' }} />
                  {isStepOptional(activeStep) && (
                    <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                      Skip
                    </Button>
                  )}
                  <Button onClick={handleNext}>Next</Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Box>
      </Modal>
    </>
  )
}
