$(document).ready(function(){
    let i, l, button="", toDoCount=0;
    let topics=["dog","cat","rabbit","hamster","skunk","goldfish","bird","ferret","turtle","sugar glider"];
    let loopCounter = sessionStorage.getItem("count");
    console.log(loopCounter)
    for(l=0;l <= loopCounter;l++){     
      if(loopCounter!=null){
        topics.push(sessionStorage.getItem("topic-" + l));
        console.log(topics);
      }
    }
    renderButtons();

   
    function renderButtons(){
        $("#animalbuttons").empty();
        $("#animal-input").val("");
        for (i in topics){
            button = `<button type="button" class="animalButtons col-md-1 col-sm-2 col-xs-3 btn btn-primary" value= "${topics[i]}" >${topics[i]}</button>`;
            $("#animalbuttons").append(button);
         }
    }
    $("#addAnimal").on("click", function(event) {
        event.preventDefault();
        let topic = $("#animal-input").val().trim(); 
        if (topic!==""){        
            topics.push(topic);
            renderButtons();

        }
    });

    

    $(document).on("click",".animalButtons", function(){
        $("#animals").empty();
        let animalName = $(this).val();
        let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalName + "&api_key=FNSlJ3B5F3zJwMZdPxfukk7N8aZPgZjZ&limit=10"
        let j, images=""
        let x = "480w_still";
        $.ajax({
            url:queryURL,
            method: "GET"
            }).then(function(response){
                for (j in response.data){
                    console.log(response.data[j].images[x].url);
                    images =`<div class="panel panel-primary col-md-4 col-sm-4 col-xs-6">
                                <img class="staticImage col-md-12 " data-name="${j}" src="${response.data[j].images[x].url}" alt="${animalName}" width="250px" height="250px">
                                <h3>Rating:  ${response.data[j].rating}</span></h3>
                            </div>`
                            console.log(animalName)
                    $("#animals").append(images);
                    
                }
                $(document).on("click",".staticImage", function(){
                    let dataNumber = $(this).attr("data-name");
                    $(this).attr("src",response.data[dataNumber].images.downsized.url);
                    $(this).removeClass("staticImage");
                    $(this).addClass("animatedImage");
                });  
                    $(document).on("click",".animatedImage", function(){
                    let dataNumber = $(this).attr("data-name");
                    $(this).attr("src",response.data[dataNumber].images[x].url); 
                    $(this).removeClass("animatedImage");
                    $(this).addClass("staticImage");
                });  

            });
    });

   c
});