
  function  initialize() {
       console.log("in initialize");

      // Here we are provided an initial array of letters.
      // Use this array to dynamically create buttons on the screen.
      var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

      for (i = 0; i < letters.length; i ++ ) {
          console.log("in for loop")
          letters[i];

          var letterBtn = $("<button>");

          letterBtn.addClass("letter-button letter letter-button-color");
          letterBtn.data("data-letter", letters[i]);
          letterBtn.text(letters[i]);
          $("#buttons").append(letterBtn);
        }
          $("#clear").on("click", function() {
          $('.fridge-color').remove();
          console.log("was clicked");
         });
         $(".letter-button").on("click", function() {
      var value = $(this).data("data-letter");
      var fridgeMagnet = $("<div>").html(value);
      fridgeMagnet.addClass ("letter fridge-color" );
      fridgeMagnet.text(value);
     $('#display').append(fridgeMagnet);
      }); 
      }
      

      
