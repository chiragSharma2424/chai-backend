export const asyncHandler = (requestHandler) => {
  return (req, res, next) => [
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err)),
  ];
};











// export const asyncHandler = () => {
//     try {

//     } catch(error) {
//         resizeBy.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }