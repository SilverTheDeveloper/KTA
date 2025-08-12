import { API } from "@/constants"

export   const getEmailApi = ()=>{
    return `${API}/api/contact/sendEmail`
}

export const getAllProductsApi = ()=> {
    return `${API}/api/product/getall`
}

export const getProductById = (id)=>{
    return `${API}/api/product/${id}`
}