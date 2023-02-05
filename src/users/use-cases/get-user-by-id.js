import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { User } from "../models/user";

/**
 * 
 * @param {Number|String} id 
 * @returns {Promise<User>}
*/
export const getUserById = async (id) => {

    if(!id) throw Error("EL id es obligatorio");

    const url = `${import.meta.env.VITE_URL_BASE}/users/${ id }`;
    const res = await fetch(url);
    const data = await res.json();

    const user = localhostUserToModel(data);
    
    return user;

}