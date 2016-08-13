var greeting = "Hello World";

            var displayText = document.getElementById("displayText");
            var goButton = document.getElementById("goButton");

            goButton.addEventListener("click", function(){
               var location = document.getElementById("inputText").value;
               displayText.innerHTML = "Hello, " + location + "!";
            });