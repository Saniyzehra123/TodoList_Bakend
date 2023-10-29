const asyncHandler = require('express-async-handler');
const TodoSchema = require('../Modal/TodoSchema');


const getTodoList=asyncHandler(async(req, res)=>{
 const todoList=await TodoSchema.find();
 res.status(200).json(todoList)

})

//post
const setTodoList = asyncHandler (
    async (req, res)=>{
        //    console.log(req.body)
        if(!req.body) {
        res.status(400) 
        throw new Error( "Add your todo")
        }
        
        const  todoList  = await  TodoSchema.create(req.body)
        res.status(201).json({ status: 'ok', data: todoList})
        } 
)

// put
const updateTodoList  = asyncHandler( async (req, res)=>{
    const todo  = await TodoSchema.findById(req.params.id)
        if(!todo ){
            res.status(400)
            throw new Error("TodoList not found")
        }
    //    todo.title = req.body?.title; // Example update
    //    todo.description = req.body?.description; // Example update
    //    todo.description = req.body?.isActive;
 
    const udateTodos= await TodoSchema.findByIdAndUpdate(req.params.id, req.body,{new:true})
       // Save the updated document
   
        res.status(200).json( udateTodos)
})

// GET a TodoList by ID
const getTodoListById = asyncHandler(async (req, res) => {
    const TodoList = await TodoSchema.findById(req.params.id);
    if (!TodoList) {
    res.status(404).json({ error: 'TodoList not found' });
    } else {
    res.status(200).json(TodoList);
    }
});

//delete
const deleteTododList  = async (req, res)=>{
    const  TododList =await TodoSchema.findById(req.params.id)
    if(!TododList){
        res.status(400)
        throw new Error("TododList not found")
     }

     await  TodoSchema.findByIdAndDelete(req.params.id)
    res.status(200).json({id: req.params.id})

}

module.exports = {
    getTodoList,
    setTodoList,
    updateTodoList,
    getTodoListById,
    deleteTododList
}

