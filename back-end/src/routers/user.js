const express = require('express')

const multer = require('multer')

const sharp = require('sharp')

const User = require('../models/User')

const auth = require('../middleware/auth')

const router = new express.Router()


const upload = multer({

  limits: { fileSize: 1000000 },

  fileFilter(req, file, cb) {

    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) cb(new Error('Please upload an image'))

    cb(undefined, true)

  }

})

// Sends post request to create new user
router.post('/api/users', async (req, res) => {

  const newUser = User(req.body)

  try {

    await newUser.save()

    const token = await newUser.generateAuthToken()

    res.status(201).send({ user: newUser, token })

  } catch (error) {

    res.status(400).send(error)

  }

})


// Sends post request to log user in
router.post('/api/users/login', async (req, res) => {

  const userData = User(req.body)

  try {

    const user = await User.findbyCredentials(userData.email, userData.password)

    const token = await user.generateAuthToken()

    res.status(200).send({ user, token })

  } catch (error) {

    res.status(400).send(error)

  }

})


// Sends post request to log user out
router.post('/api/users/logout', auth, async (req, res) => {

  try {

    req.user.tokens = req.user.tokens.filter(item => item.token != req.token)

    await req.user.save()

    res.status(200).send()

  } catch (error) {

    res.status(500).send(error)

  }

})


// Sends post request to log user out
router.post('/api/users/logout/all', auth, async (req, res) => {

  try {

    req.user.tokens = []

    await req.user.save()

    res.status(200).send()

  } catch (error) {

    res.status(500).send(error)

  }

})


// sends get request to fetch auth user
router.get('/api/users/user', auth, async (req, res) => {

  res.send(req.user)

})


// sends get request to fetch user by id
router.get('/api/users/id/:id', async (req, res) => {

  const _id = req.params.id

  try {

    const user = await User.findById(_id)

    if (!user) return res.status(404).send()

    res.send(user.toPublicJSON())

  } catch (e) {

    res.status(500).send()

  }

})


// Sends patch request to update users
router.patch('/api/users/user', auth, async (req, res) => {

  const updates = Object.keys(req.body)

  const allowedUpdate = ['name', 'email', 'password', 'age']

  const isValidOp = updates.every(item => allowedUpdate.includes(item))

  if (!isValidOp) return res.status(400).send({ error: 'Invalid Updates', allowedUpdates: allowedUpdate })

  try {

    // Because of password middleware
    const user = req.user

    updates.forEach(item => user[item] = req.body[item])

    await user.save()

    // const user = await User.findByIdAndUpdate(_id, req.body, { new: true, runValidators: true })

    res.status(201).send(user)

  } catch (error) {

    res.status(400).send(error)

  }

})


// Sends delete request to delete users
router.delete('/api/users/user', auth, async (req, res) => {

  try {

    const user = req.user

    await user.remove()

    res.send(user)

  } catch (error) {

    res.status(500).send()

  }

})


// Sends post request to create and upload the users profile avatar
router.post('/api/users/user/avatar', auth, upload.single('avatar'), async (req, res) => {

  const buffer = await sharp(req.file.buffer).png().toBuffer()

  req.user.avatar = buffer

  await req.user.save()

  res.send({ message: 'Image Saved' })

}, (error, req, res, next) => res.status(400).send({ error: error.message }))


// Sends delete request to delete the users profile avatar
router.delete('/api/users/user/avatar', auth, async (req, res) => {

  try {

    const user = req.user

    user.avatar = undefined

    await user.save()

    res.send(user)

  } catch (error) {

    res.status(500).send()

  }

})


// Sends get request to render profile avatar
router.get('/api/users/pic-id/:id/avatar', async (req, res) => {

  try {

    const user = await User.findById(req.params.id)

    if (!user || !user.avatar) throw new Error()

    res.set('Content-Type', 'image/png')

    res.send(user.avatar)

  } catch (error) {

    res.status(404).send()

  }

})

module.exports = router
