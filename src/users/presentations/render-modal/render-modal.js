import modalHTML from './render-modal.html?raw';
import './render-modal.css'
let modal, form;

export const showModal = () =>{
    modal?.classList.remove('hiden-modal');
}

export const hideModal = () =>{
    modal?.classList.add('hiden-modal');
    form?.reset();

} 
/**
 * 
 * @param {HTMLDivElement} element 
 */
export const renderModal = (element) =>{

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
        const userLike = {};

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
        setTimeout(()=>{
            hideModal();
        },2000);
        // console.log(userLike)
        
        
    })

    element.append(modal);
}