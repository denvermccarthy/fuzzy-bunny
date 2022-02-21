import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async (e) => {
    // prevent default
    e.preventDefault();
    // get the name and family id from the form
    const data = new FormData(form);

    const bunny = {
        name: data.get('bunny-name'),
        family_id: data.get('family-id')
    };
    // use createBunny to create a bunny with this name and family id

    await createBunny(bunny);
    form.reset();
    location.replace('/families');
});

window.addEventListener('load', async () => {
    // let's dynamically fill in the families dropdown from supabase
    // grab the select HTML element from the DOM
    const famSelect = document.getElementById('family-select');
    // go get the families from supabase
    const families = await getFamilies();
    // for each family
    families.forEach(element => {
        const option = document.createElement('option');
        option.value = element.id;
        option.textContent = element.name;
        famSelect.append(option);
    });
    // create an option tag

    // set the option's value and text content

    // and append the option to the select
});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
