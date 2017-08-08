
    $(document).ready(function() {

      // Here we are provided an initial array of letters.
      // Use this array to dynamically create buttons on the screen.
      var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

      for (i = 0; i < letters.length; i ++ ) {
          letters[i];

          var letterBtn = $("<button>");

          letterBtn.addClass("letter-button letter letter-button-color");
          letterBtn.data("data-letter", letters[i]);
          letterBtn.text(letters[i]);
          $("#buttons").append(letterBtn);
        }
       }); 
