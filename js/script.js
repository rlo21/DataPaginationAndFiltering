/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
Author of script.js: Rosa Lopez
*/
/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create an event listener to listen for clicks on the link-list variable that you created earlier.
*/


/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list,page) {
    // Variables
    let itemsPerPage = 9;
    //const linkList = document.querySelector('link-list');
    const studentList = document.querySelector('.student-list'); //or querySelector('.student-list')  OR document.querySelector("ul.student-list");
    studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      const indexStart = (page * itemsPerPage) - itemsPerPage;
      const indexEnd = page * itemsPerPage;

      //loop over list parameter
      while ( i >= indexStart &&  i <= indexEnd) {
         let studentItem = `  
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">Joined ${list[i].registered.date}</span>
            </div>
         </li>`;

      studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
};


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
   const numOfPages = Math.ceil( list.length / itemsPerPage )
   const linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   for ( let i = 1; i <= numOfPages; i++ ) {
      let button = `
         <li>
            <button type="button">${i}</button>
         </li>
      `;
      linkList.insertAdjacentHTML('beforeend', button);
   }
   const firstButton = linkList.querySelector('button');
   firstButton.className = 'active';
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName === "BUTTON" ) {
         let activeButton = document.querySelector('.active');
         activeButton.className = '';
         e.target.className  = 'active';
         showPage(list, e.target.textContent);
      }
   });
   
}




// Call functions
console.log (showPage(data, 1));
console.log(addPagination(data));
