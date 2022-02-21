// create three elements for each family, one for the whole family, one to hold the name, and one to hold the bunnies
        // your HTML Element should look like this:
        // <div class="family">
        //    <div class="bunnies">
        //    <h3>the Garcia family</h3>
        //        <div class="bunny">Fluffy</div>
        //        <div class="bunny">Bob</div>
        //    </div>
        // </div>
        // add the bunnies css class to the bunnies el, and family css class to the family el
        // put the family name in the name element
        // for each of this family's bunnies
        //    make an element with the css class 'bunny', and put the bunny's name in the text content
        //    add an event listener to the bunny el. On click, delete the bunny, then refetch and redisplay all families.
        // append this bunnyEl to the bunniesEl

import { displayFamilies } from './families/families.js';
import { deleteBunny } from './fetch-utils.js';

export async function renderFamily(family) {
    const famDiv = document.createElement('div');
    famDiv.classList.add('family');
    
    const famName = document.createElement('h3');
    famName.textContent = family.name;

    const bunniesDiv = document.createElement('div');
    bunniesDiv.classList.add('bunnies');

    const bunnies = family.fuzzy_bunnies;
    bunnies.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('bunny');
        div.textContent = element.name;
        div.addEventListener('click', async () => {
            // console.log(`clicked ${element.name} id: ${element.id}`);
            await deleteBunny(element.id);
            displayFamilies();
        });
        bunniesDiv.append(div);
    });   

    famDiv.append(famName, bunniesDiv);

    return famDiv;
}
