import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { userModelToLocalhost } from "../mappers/user-to-localhost.mapper";
import { User } from "../models/user"

/**
 * 
 * @param {Like<User>} userLike 
 */

export const saveUser = async (userLike) =>{
    const user = new User(userLike);

    if(!user.firstName || !user.lastName)
        throw 'First & Last Name are required';

    //TODO:MAPPER
    const userToSave = userModelToLocalhost(user);
    let userUpdated;

    if(user.id){
        userUpdated = updateUser(userToSave);
    }else
    {
        userUpdated = await createUser(userToSave);
    }
    return localhostUserToModel(userUpdated);
} 

/**
 * 
 * @param {Like<User>} user 
 */

const createUser = async (user) =>{

    const url = `${import.meta.env.VITE_URL_BASE}/users`;
    const rep = await fetch(url,{
        method: 'POST',
        body:JSON.stringify(user),
        headers:{
            'Content-Type':'application/json'
        }
    });


    const data = await rep.json();

    console.log({data})
    return data;
}

/**
 * 
 * @param {Like<User>} user 
 */

const updateUser = async (user) =>{

    const url = `${import.meta.env.VITE_URL_BASE}/users/${user.id}`;
    const rep = await fetch(url,{
        method: 'PATCH',
        body:JSON.stringify(user),
        headers:{
            'Content-Type':'application/json'
        }
    });


    const data = await rep.json();

    console.log({data})
    return data;
}