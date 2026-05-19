
import instance from "./axios";


const Register = async (formData) =>{
    try {
        const result = await instance.post("https://api.freeapi.app/api/v1/users/register", formData);
        console.log(result);
        return result;
    } catch (error) {
        console.log(error);
    }
};
const loginUser=async(formData)=>{
    try {
        const result=await instance.post("https://api.freeapi.app/api/v1/users/login",formData);
    
        return result
    } catch (error) {
       return error
    }
}
        
export {Register, loginUser};