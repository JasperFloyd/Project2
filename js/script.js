/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const studentsList = document.querySelector('.student-list').children;
const numPerPage = 10;
/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage(list, page){
   const pageMin = (page * numPerPage) - numPerPage;
   const pageMax =  page * numPerPage;
  
   for(let i = 0; i<list.length; i++){
      let li = list[i];
      if(pageMin <= i && i < pageMax){
         li.style.display = '';
      } else {
         li.style.display = 'none';
      }
   }
}

console.log(showPage(studentsList, 2));

function createElement(elementName){
   const element = document.createElement(elementName);
   return element;
}

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
function appendPageLinks(list){
   const pages = Math.ceil(list.length/numPerPage);
   const mainDiv = document.querySelector('.page');
      const div = createElement('div');
         const ul = createElement('ul');
          
      div.appendChild(ul);
      div.className = 'pagination';
      mainDiv.appendChild(div);

      for(let i = 0; i < pages.length; i++){
         const li = createElement('li');
         const a = createElement('a');
         li.appendChild(a);
         ul.appendChild(li);
         a.href = '#';
         a.textContent = i + 1;
      }
   
   const pageButtons = document.querySelectorAll('a');
   if(pageButtons[0] != undefined) {
      pageButtons[0].className = 'active';}
   
   for(let i = 0; i<pageButtons.length; i++){
      
      pageButtons[i].addEventListener('click', (e) => {
         
         for(let i = 0; i < pageButtons.length; i++){
            pageButtons[i].className = '';
         
         let pageSelected = e.target.textContent;
         let pageIndex = i;
         pageSelected[pageIndex].className = 'active'
         showPage(studentsList, pageSelected);
      }
   })
}
}

showPage(studentsList, 1);
appendPageLinks(studentsList);


// Remember to delete the comments that came with this file, and replace them with your own code comments.