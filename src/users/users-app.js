import { renderButtons } from "./presentations/render-buttons/render-buttons";
import { RenderTable } from "./presentations/render-table/render-table";
import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersApp = async (element) =>{

    element.innerHTML = `Loading....`;
    await usersStore.loadNextPage();
    element.innerHTML = ``;
    
    RenderTable(element);
    renderButtons(element);
}