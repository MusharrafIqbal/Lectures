

    

    let sampledata = fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(allData => {
    // Select the target container once to improve performance
    const demoElement = document.getElementById('demo');
    if (!demoElement) {
      console.error('Element with ID "demo" not found.');
      return;
    }

    // Use map to generate an array of HTML strings
    const htmlOutput = allData.map((post, index) => {
      // Index starts at 0, so add 1 for a serial number starting at 1
      const serialNumber = index + 1;
      return `
        <div class="inner">
          <h1>${serialNumber}. ${post.title}</h1>
          <h2>${post.body}</h2>
        </div>
      `;
    }).join(''); // Join the array of strings into a single string

    // Insert all the HTML into the DOM in a single operation
    demoElement.innerHTML = htmlOutput;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
// document.getElementById('displayDate').onclick = function() {
//         const now = new Date().toUTCString(); // Create a new Date object for the current date and time
//         const currentDate = now.slice(5, 16); // Format the date and time as a human-readable string

        
//         document.getElementById('displayDate').innerHTML = currentDate; // Update the HTML element
//     };
    

    



//     // Get references to the button and the content div
// const toggleButton = document.getElementById('toggleButton');
// const contentToToggle = document.getElementById('contentToToggle');

// // Add an event listener to the button
// toggleButton.addEventListener('click', function() {
//   // Check the current display style of the content
//   if (contentToToggle.style.display === 'none') {
//     // If hidden, show it (e.g., using 'block' for a div)
//     contentToToggle.style.display = 'block';
//     toggleButton.textContent = 'Hide Content'; // Update button text
//   } else {
//     // If visible, hide it
//     contentToToggle.style.display = 'none';
//     toggleButton.textContent = 'Show Content'; // Update button text
//   }
// });

// Optionally, hide the content initially using CSS or JavaScript
// contentToToggle.style.display = 'none'; // Uncomment to hide initially
// function showData() {
//     document.getElementById("date").innerHTML =  data();
//   }
  


// Lecture 29



// let day = prompt("Enter The Day")

// switch (day) {
//     case 'a':
//         document.writeln("Today is Monday");
//         break
//     case 'b':
//         document.writeln('Today is Tuesday')
//         break
//     case 'c':
//         document.writeln("Today is Wednesday");
//         break
//     case 'd':
//         document.writeln('Today is Thursday')
//         break
//     case 'e':
//         document.writeln("Today is Friday");
//         break
//     case 'f':
//         document.writeln('Today is Saturday')
//         break
//     case 'g':
//         document.writeln("Today is Sunday");
//         break
//     default:
//         document.writeln("Please Enter Correct Number")
//         break    
// }

// let num =+ prompt("Enter The Number")

// let even = num%2==0
// let odd = num%2==1



// switch(even){
//     case even:
//         document.writeln("This is Even Number")
//         break
//         case odd:
//             document.writeln("It is Odd Number")
//             break
// }

// document.getElementById('demo').innerHTML = 'hellow world'
// document.getElementById('headline').innerHTML = 'hellow again'


// let num = prompt("Enter The Number")

// if(num%2==0){

//  document.getElementById('box').innerHTML = '<img src="https://www.shutterstock.com/image-vector/icons-even-numbers-on-white-260nw-282248162.jpg" alt="">'
// }

// else if(num%2==1){
//     document.getElementById('box').innerHTML ='<img src="https://www.shutterstock.com/image-photo/colorful-odd-number-on-white-260nw-1602605152.jpg" alt="">'
// }

// let num =prompt("enter num")
//  let text =  (num%2==0) ? "It is even": (num%2==1) ? 'it is odd' : 'Enter Correct Number'

//  document.writeln(text)


//  Lecture  30

// let d = new Date()
// let d = new Date().getDay()
// let d = new Date().getMonth() 
// let d = new Date().getFullYear()
// let d = new Date().getDate()
// let d = new Date().getHours()
// let d = new Date().getMinutes()
// let d = new Date().getSeconds()
// document.writeln(d)

// let date = new Date()
// let hours = date.getHours()
// let min = date.getMinutes()
// let sec = date.getSeconds()


// let year = date.getFullYear()
// let month = date.getMonth()+1
// let d = new Date().getDate()

//    document.getElementById('time').innerHTML =  hours +":" + min +":" + sec + "<br>"

//   document.getElementById('date').innerHTML = year +"/" + month +"/" + d
// let myDate = new Date(year , month , date , hours , min , sec)


// let myDate = new Date(2003 , 10 , 18 , 14 , 35 ,45)

// document.writeln(myDate)



// let num1 = 12
// let num2=32

// document.writeln("The addition is" +"<mark>" + (num1+num2) + "</mark>"+ "The subtraction is " + (num1-num2))
// document.writeln(`The addition is <mark> ${num1+num2} </mark> . The sub is <del> ${num1-num2} </del>  `)



// let total = prompt("Enter The Total Number")
// let obt  = prompt("Enter The Obtained Number")

// let percentage = obt / total * 100

// document.writeln(Math.round(percentage))

// let num = 2.4 

// let num1 = 2.4



// document.writeln(Math.ceil(num))
// document.writeln(Math.ceil(num) + Math.ceil(num1))


// let num = 3.9

// document.writeln(Math.floor(num))