import { checkAuth, getFamilies, logout } from '../fetch-utils.js';
import { renderFamily } from '../render-utils.js';

checkAuth();

const familiesEl = document.querySelector('.families-container');
const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

export async function displayFamilies() {
    // fetch families from supabase
    const families = await getFamilies();
    // clear out the familiesEl
    familiesEl.textContent = '';
    for (let family of families) {
        familiesEl.append(await renderFamily(family));
    }
}

window.addEventListener('load', async () => {
    const families = await getFamilies();
    displayFamilies(families);
});
