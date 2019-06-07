# GifTastic
[!Screenshot](assets/images/screenshot.png)

I first created the general structure of the page with html using a premade set from Bootstrap. I created an array of topic in javascript and then also made a loop that would traverse the array and make a labeled button of each element in the topics array. The renderButtons function takes the input from the user in the search bar and then creates a new button of that input. I then used the ajax function to grab the topic from each button on every click and produce gifs of that topic from the giphy api. A loop will then go through all the results produced from giphy and then append the gifs to my html page. Two click functions were created to pause and unpause the gif.

# Tool Used
html, javascript, jquery, css, bootstrap, giphy 

# Authors 
Alton Shu
