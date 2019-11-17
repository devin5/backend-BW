const express = require("express");
const db = require("../data/dbConfig");

const add = song => {
  return db("songs").insert(song, "id");
};

const remove = id => {
  return db("songs")
    .where({ id })
    .delete();
};

const findById = user_id => {
  return db("songs").where({ user_id });
};

const update = (changes, id) => {

    return db("songs").where({id}).update(changes);

}


module.exports = {
  add,
  remove,
  findById,
  update
};
