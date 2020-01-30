const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/User');
const Job = require('../../models/Job');

const validateJobInput = require('../../validation/job');

router.get('/', (req, res) => {
  Review.find()
    .sort({ date: -1 })
    .then(jobs => res.json(jobs))
    .catch(err => res.status(404).json({ reviewsnotfound: 'No jobs to display' }))
});

router.get('/:id', (req, res) => {
  Review.findById(req.params.id)
    .then(job => res.json(job))
    .catch(err =>
      res.status(404).json({ reviewnotfound: 'No application with that id' }))
})

router.post('/jobs/:job_id/:user_id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatejobInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newJob = new Job({
      user_id: req.params.user_id,
      company: req.body.company,
      title: req.body.title,
      outcome: req.body.outcome,
      date: req.body.date
    });

    newjob.save()
      .then(job => {
            User.findOneAndUpdate(
              { _id: req.params.user_id },
              { $addToSet: { jobs: job._id } },
              { new: true })
              .then(user => {
                res.json(job)
              }
              )
          .catch(err => {
            res.json(err)
          });
      })
      .catch(err => res.json(err));
  }
);