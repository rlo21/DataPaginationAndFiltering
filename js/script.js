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

// Global Variables //
let itemsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage (list,page) {
   
   for (let i = 0; i < list.length; i++) {
      // Variables
      const indexStart = (page * itemsPerPage) - itemsPerPage;
      const indexEnd = page * itemsPerPage;
      const linkList = document.querySelector(link-list);
      let studentList = document.selectElementByClassName(studnet-list);
      studentList.document.innerHTML = '';

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
function showPage();

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
