const Addtocart=require("../model/addtocart")
const add = async (req, res) => {
    const { email, items } = req.body;
    try {
      const add1 = await Addtocart.findOne({ email });
      if (add1) {
        const existingItem = add1.items.find(
          (item) => item.productid === items.productid
        );
        if (existingItem) {
          const res1 = await Addtocart.findOneAndUpdate(
            { email, 'items.productid': items.productid },
            { $inc: { 'items.$.need': 1 } },
            { new: true }
          );
          res.send(res1);
        } else {
          const res1 = await Addtocart.findOneAndUpdate(
            { email },
            { $push: { items } },
            { new: true }
          );
          res.send(res1);
        }
      } else {
        const res1 = await Addtocart.create({ email, items });
        res.send(res1);
      }
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: 'Internal server error' });
    }
  };
  
  const cart = async (req,res)=>{
    try{
    const email = req.params.email
    const item =await Addtocart.findOne({"email":email})
  //  console.log(item)
    res.send(item)
    }
    catch(error)
    {
        console.log(error)
        res.send(error)
    }
}
const change = async (req,res)=>{
    try{
    const {email,flag,productid} = req.body
    const updateQuery={$inc:{'items.$.need':flag}}
    console.log(email,flag,productid)
    const item =await Addtocart.findOneAndUpdate({email,"items.productid":productid},updateQuery,{new:true})
    res.send(item)
    }
    catch(error)
    {
        console.log(error)
        res.send(error)
    }
}
module.exports={add,cart,change}
