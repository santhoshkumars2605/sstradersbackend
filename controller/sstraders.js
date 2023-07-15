const Todo = require('../model/sstraders')

exports.getAllTodoList = async (req,res)=>{
    try{
        const list = await Todo.find();
        return res.status(200).send(list)
        
    }catch(err){
        return res.status(500).json({
            msg:'Internel sever error'
        })
    }
}

exports.createTodo = async (req,res)=>{
    try{
        const newProd = await Todo.create(req.body);
        return res.status(200).json({
            data:newProd
        })
        
    }catch(err){
        return res.status(500).json({
            msg:'Internel sever error'
        })
    }
}
exports.deteleTodoById = async (req,res)=>{
    console.log(req.params._id)
    try{
        const todo = await Todo.findById(req.params._id);
        if(todo){
            await Todo.findByIdAndDelete(req.params._id);
            return res.status(200).json({
                msg:'Deleted'
            })
        }else{
            return res.status(404).json({
                msg:'Not found'
            })
        }
        // await Todo.findByIdAndDelete(req.params.id);

    }catch(err){
        return res.status(500).json({
            msg:'Internel sever error'
        })
    }
}
exports.updateTodoByID = async (req,res)=>{
    try{
        const todo = await Todo.findById(req.params._id)
        console.log(req.body)
        if(todo){
            await Todo.findByIdAndUpdate(req.params._id,req.body)
            return res.status(200).json({
                msg:'Updated'
            })
        }
        else{
            return res.status(404).json({
                msg:'Not founded'
            })
        }
    }catch(err){
        return res.status(500).json({
            msg:'Internel sever error'
        })
    }
}

exports.updateTodoByID = async (req,res)=>{
    try{
        const todo = await Todo.findById(req.params._id)
        console.log(req.body)
        if(todo){
            await Todo.findByIdAndUpdate(req.params._id,req.body)
            return res.status(200).json({
                msg:'Updated'
            })
        }
        else{
            return res.status(404).json({
                msg:'Not founded'
            })
        }
    }catch(err){
        return res.status(500).json({
            msg:'Internel sever error'
        })
    }
}
