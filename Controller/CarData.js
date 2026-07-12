const Cars = require("../Data")

const CarData = async(req,res)=>
{
    console.log(Cars)
    res.status(200).json(
        {
            Data:Cars
        }
    )
}
module.exports= CarData