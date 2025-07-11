import {Router} from "express";
import {deleteProduct, getAllProducts, getProduct, saveProduct, updateProduct} from "../controllers/product.controller";

const productRoutes :Router= Router();

//Handle Requests
productRoutes.get("/all",getAllProducts);//GetAll
productRoutes.post("/save",saveProduct); //save
productRoutes.get("/:id",getProduct);
productRoutes.put("/update/:id",updateProduct);
 productRoutes.delete("/delete/:id",deleteProduct); //delete


export default productRoutes;