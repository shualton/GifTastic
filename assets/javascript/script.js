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
});