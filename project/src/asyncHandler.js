//const asyncHandler = () => {}

export  {asyncHandler}


// const asyncHandler = (fn)=> async (req , res, next) => {
//     try {

//         await fn(req, res, next);
//     }catch (error) {
//        res.status(error.code || 400).jason ({ 
//        sucess: false,
//        message: error.message || "Internal Server Error"});
//     }
// }
