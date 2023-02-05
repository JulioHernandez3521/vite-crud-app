import modalHTML from './render-modal.html?raw';
import './render-modal.css'
import { User } from '../../models/user';
import { getUserById } from '../../use-cases/get-user-by-id';
let modal, form;
let loadedUser = {};
/**
 * 
 * @param {Strinf | Number} id 
 */
export const showModal = async ( id ) =>{
    modal?.classList.remove('hiden-modal');
    loadedUser= {};

    if(!id ) return;
    const user = await getUserById(id);
    setFormValues(user);
}

export const hideModal = () =>{
    modal?.classList.add('hiden-modal');
    form?.reset();

} 

/**
 * 
 * @param {User} user 
 */
const setFormValues = ( user )=>{
    form.querySelector('[name="firstName"]').value = user.firstName
    form.querySelector('[name="lastName"]').value = user.lastName
    form.querySelector('[name="balance"]').value = user.balance
    form.querySelector('[name="isActive"]').checked = user.isActive
    loadedUser = user;
}




/**
 * 
 * @param {HTMLDivElement} element 
 * @param {(userLike) => Promise<void>} callback
 */
export const renderModal = (element, callback) =>{

    if(modal) return;

    modal = document.createElement('div');
    modal.innerHTML = modalHTML;
    modal.className = 'modal-container hiden-modal';
    form = modal.querySelector('form');

    modal.addEventListener('click', (e) =>{
        if(e.target.className !== 'modal-container') return;
        hideModal();
    });

    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        // const data = Object.fromEntries(
        //     new FormData(e.target)
        // );
        const form1Data = new FormData(form);
        const userLike = {...loadedUser};

        for (let [key, value] of form1Data){
            if(key === 'balance'){
                userLike[key] = +value; //+value en el caso de poner como numero es igual  a poner Number(value);
                continue;
            }
            
            if(key === 'isActive'){
                userLike[key] = (value === 'on') ? true : false;
                continue;
            }

            userLike[key] = value;
        }

        modal.querySelector('button').innerText = 'Guardando...';

        callback(userLike)
            .then(user=>{
                hideModal();
            }).catch(console.log)
        // console.log(userLike)
        
        
    })

    element.append(modal);
}
