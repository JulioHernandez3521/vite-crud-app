import { User } from "../models/user"


/**
 * 
 * @param {Like<User>} localUser 
 * @returns {User}
 */
export const localhostUserToModel = (localUser) =>{
    const  {
        avatar,
        balance,
        first_name,
        gender,
        id,
        isActive,
        last_name,
    } = localUser;
    return new User({
        avatar,
        balance,
        firstName: first_name,
        gender,
        id,
        isActive,
        lastName: last_name,
    });
}