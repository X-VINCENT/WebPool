'use strict'

const Task = require('../models/task.model')

exports.findAll = function (req, res) {
  Task.findAll(function (err, task) {
    console.log('controller')
    if (err) res.send(err)
    console.log('res', task)
    res.send(task)
  })
}

exports.findByStatus = function (req, res) {
  Task.findByStatus(req.params.status, function (err, task) {
    if (err) res.send(err)
    res.json(task)
  })
}

exports.findById = function (req, res) {
  Task.findById(req.params.id, function (err, task) {
    if (err) res.send(err)
    res.json(task)
  })
}

exports.create = function (req, res) {
  const newTask = new Task(req.body)

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' })
  } else {
    Task.create(newTask, function (err, task) {
      if (err) res.send(err)
      res.json({ error: false, message: 'Task added successfully !', data: task })
    })
  }
}

exports.update = function (req, res) {
  const updatedTask = new Task(req.body)

  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' })
  } else {
    Task.update(req.params.id, updatedTask, function (err, task) {
      if (err) res.send(err)
      res.json({ error: false, message: 'Task successfully updated !', data: task })
    })
  }
}

exports.delete = function (req, res) {
  Task.delete(req.params.id, function (err, task) {
    if (err) res.send(err)
    res.json({ error: false, message: 'Task successfully deleted' })
  })
}
