"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMiddlewareCategory = void 0;
class categoryMiddleware {
    async createCategoryMiddleware(res, req) {
        try {
            // const { categoryName } = req.body;
            // console.log('d');
            // if (!categoryName) {
            //   return res.status(401).json({ status: 401, errorMsg: "invalid body",error:true });
            // }
            // const find = await categoryModel.find(categoryName)
            // console.log('df');
            // // if(find){
            // //   return res.status(302).json({status:302,errorMsg:"such a category already exists",error:true})
            // // }
        }
        catch (error) {
            return res
                .status(500)
                .json({ status: 500, errorMsg: error.message, error: true });
        }
    }
}
exports.createMiddlewareCategory = new categoryMiddleware();
