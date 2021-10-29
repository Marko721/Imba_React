const router = require("express").Router();
const Job = require("../models/Job");

// CREATE NEW JOB
router.post("/", async (req, res) => {
  const newJob = new Job((req, body));
  try {
    const savedJob = await newJob.save();
    res.status(200).json(savedJob);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE JOB
router.put("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    try {
      const updatedJob = await Job.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedJob);
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE JOB
router.delete("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    try {
      await job.delete();
      res.status(200).json("Job has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET JOB
router.get("/:id", async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET JOBS
router.get("/", async (req, res) => {
  const proffesion = req.query.proffesion;
  const specialty = req.query.specialty;
  const location = req.query.location;
  const shift = req.query.shift;
  const length = req.query.length;

  try {
    let jobs;

    if (proffesion) {
      jobs = await Job.find({ proffesion: proffesion });
    } else if (specialty) {
      jobs = await Job.find({ specialty: specialty });
    } else if (location) {
      jobs = await Job.find({ location: location });
    } else if (shift) {
      jobs = await Job.find({ shift: shift });
    } else if (length) {
      jobs = await Job.find({ length: length });
    } else {
      posts = await Post.find();
    }
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
