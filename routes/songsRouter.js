const express = require("express");

const songs = require("./songsModel");

const router = express.Router();

router.post("/:userid", (req, res) => {
  const song = {
    song: req.body.song,
    artist: req.body.artist,
    user_id: req.params.userid
  };

  songs
    .add(song)
    .then(song => {
      res.status(201).json(song);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to create new song" });
    });
});

router.delete("/:songid", (req, res) => {
  const { songid } = req.params;

  songs
    .remove(songid)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find scheme with given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete scheme" });
    });
});

router.get("/:userid", (req, res) => {
  const { userid } = req.params;
  songs
    .findById(userid)
    .then(songs => {
      res.status(200).json(songs);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching songs", error: err });
    });
});

router.put("/:songid", (req, res) => {
  const { songid } = req.params;
  const changes = req.body;

  songs
    .update(changes, songid)
    .then(updated => {
      res.json(updated);
    })

    .catch(err => {
      res.status(500).json({ message: "Failed to update scheme" });
    });
});

module.exports = router;
