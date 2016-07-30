

//Array of wrestler names

var wwf = ['Hulk Hogan', 'Mr. Perfect', 'Andre the Giant', 'Shawn Michaels','Dusty Rhodes', 'Bret Hart', 'Ric Flair','The Ultimate Warrior', 'The Undertaker', 'Macho Man'];

// Function to generate the buttons
    
    function newWrestler() {

    // Div wwfButtons is empty when page loads
    $("#wwfButtons").empty();

    // Loop through array of WWF names 
    for (i = 0; i < wwf.length; i++) {

    // Dynamicaly generates buttons for superstar names in the array

            var nameButton = $('<button>'); 

            nameButton.addClass('btn btn-info nameButtonClass'); 

            nameButton.attr('data-name', wwf[i]); 

            nameButton.text(wwf[i]); // Names that appear in the buttons

            $("#wwfButtons").append(nameButton); // Add the buttons to HTML
        }
    }

    newWrestler(); 

    // Used on click function to add new wrestlers when user types into input box

    $('#addWrestler').on('click', function() {
        
    // Takes text from input box and adds to wwf array above
        var wwf = $("#wwf-input").val().trim();

        wwf.push(addWrestler);

    // Then we display the new button
          newWrestler(); 

          display();
        

    // The user can just hit enter after typing text into the input box, rather than clicking on the button.
        return false;
    });


    
    // On click function for API of Giphy
            $("button").on("click", function() {

            var wwfSuperstar = $(this).attr("data-name");

            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + wwfSuperstar + "&api_key=dc6zaTOxFJmzC&limit=10";


    // AJAX method to get gifs

            $.ajax({
                    url: queryURL,
                    method: 'GET'
    })

            .done(function(response) {

            console.log(queryURL);

            console.log(response);

            var results = response.data;

            

            for (var i = 0; i < results.length; i++) {

            var wwfDiv = $('<div>'); 
                            
            var p = $('<p>').text("Rating: " + results[i].rating);

            // Create a new image 
            var wrestlerImg = $('<img>');
            wrestlerImg.attr('src', results[i].images.fixed_height.url);
            // wrestlerImg.attr('data-still', results[i].images.original_still.url);
            // wrestlerImg.attr('data-animate', results[i].images.original.url);
            // wrestlerImg.attr('data-state', 'still');

            wwfDiv.append(p);
            wwfDiv.append(wrestlerImg);
                          
            $('#wrestlerGif').append(wwfDiv);               
        }
  });
});


        // $('#wrestlerGif').on('click', function(){

        //     // Created a variable named state then referenced buttons data-state
        // var state = $(this).attr('data-state'); 

        //     // If statement for gif state. If data is 'still', when clicked it will animate
        //   if ( state == 'still'){
        //         $(this).attr('src', $(this).data('animate'));
        //         $(this).attr('data-state', 'animate');
        //     // Else data will go to 'still' if it is currently in animate
        //     }else{
        //         $(this).attr('src', $(this).data('still'));
        //         $(this).attr('data-state', 'still');
        //     }
//     });
// });






    


