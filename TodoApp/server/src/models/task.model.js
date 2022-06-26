'use strict'

const db = require('../../config/db.config')

const Task = function (task) {
  this.title = task.title ? task.title : ''
  this.description = task.description ? task.description : ''
  this.status = task.status ? task.status : 0
  this.color = task.color ? task.color : '#ffffff'
}

Task.findAll = function (result) {
  db.query('SELECT * FROM tasks', function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      console.log('tasks : ', res)
      result(null, res)
    }
  })
}

Task.findByStatus = function (status, result) {
  db.query('SELECT * FROM tasks WHERE status = ?', status, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

Task.findById = function (id, result) {
  db.query('SELECT * FROM tasks WHERE id = ?', id, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      result(null, res)
    }
  })
}

Task.create = function (newTask, result) {
  db.query('INSERT INTO tasks SET ?', newTask, function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(err, null)
    } else {
      console.log(res.insertId)
      result(null, res.insertId)
    }
  })
}

Task.update = function (id, task, result) {
  db.query('UPDATE tasks SET title = ?, description = ?, status = ?, color = ? WHERE id = ?', [task.title, task.description, task.status, task.color, id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

Task.delete = function (id, result) {
  db.query('DELETE FROM tasks WHERE id = ?', [id], function (err, res) {
    if (err) {
      console.log('error: ', err)
      result(null, err)
    } else {
      result(null, res)
    }
  })
}

module.exports = Task
