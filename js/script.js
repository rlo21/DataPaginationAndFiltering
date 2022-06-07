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
//global variable(s)
let itemsPerPage = 9;


function showPage (list,page) {
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      const indexStart = (page * itemsPerPage) - itemsPerPage;
      const indexEnd = page * itemsPerPage;

      //Display informaiton for each student over loop 
      if ( i >= indexStart &&  i <= indexEnd) {
         let studentInfo = `  
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

      studentList.insertAdjacentHTML("beforeend", studentInfo);
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
   
   //create pagination buttons
   for ( let i = 1; i <= numOfPages; i++ ) {
      const btn = `
         <li>
            <button type="button">${i}</button>
         </li>
      `;
      linkList.insertAdjacentHTML('beforeend', btn);
   }
      const firstBtn = linkList.querySelector('button');
      firstBtn.className = 'active';
      
      //make button active when clicked
      linkList.addEventListener('click', (e) => {
      if (e.target.tagName === "BUTTON" ) {
         let activeBtn = document.querySelector('.active');
         activeBtn.className = '';

         e.target.className  = 'active';
         showPage(list, e.target.textContent);
      }
   });
   
}

// Call functions
showPage(data, 1);
addPagination(data);