
/**
 * 
 * @param {String|Number} id 
 */

export const deleteUserById= async (id) =>{

    const url = `${import.meta.env.VITE_URL_BASE}/users/${id}`;
    const rep = await fetch(url,{
        method: 'DELETE'
    });


    const data = await rep.json();

    console.log({data})
    return true;
}