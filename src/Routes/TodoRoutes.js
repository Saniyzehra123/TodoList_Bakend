const express = require('express')
const { getTodoList, setTodoList, updateTodoList, getTodoListById, deleteTododList } = require('../Controller/TodoController')

const dotenv = require("dotenv").config()

const router=express.Router()

router.route("/").get(getTodoList);
router.route("/").post(setTodoList);
router.route("/:id").put(updateTodoList);
router.route("/:id").get(getTodoListById);
router.route("/:id").delete(deleteTododList);

module.exports=router;
 