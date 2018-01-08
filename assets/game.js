
        $(document).ready(function () {




            {/* Global Variables */ }
            var wins = 0;
            var loses = 0;
            var totalscore = 0;
            var randomnumber = Math.floor((Math.random() * 50) + 30);
            var crystalnumberone = "";
            var crystalnumbertwo = "";
            var crystalnumberthree = "";
            var crystalnumberfour = "";           
            var crystalnumbers = [1, 2, 3, 5];
            $("#totalscore").text(totalscore);
            $("#randomnumber").text(randomnumber);

            

            var randomNumberOne = Math.floor(Math.random() * crystalnumbers.length);
            var crystalnumberone = crystalnumbers[randomNumberOne];
            crystalnumbers.splice(randomNumberOne,1);
          
            
            var randomNumbertwo = Math.floor(Math.random() * crystalnumbers.length);
            var crystalnumbertwo = crystalnumbers[randomNumbertwo];
            crystalnumbers.splice(randomNumbertwo,1);
         

            var randomnumberthree = Math.floor(Math.random() * crystalnumbers.length);
            var crystalnumberthree = crystalnumbers[randomnumberthree];
            crystalnumbers.splice(randomnumberthree,1);
         

           var randomnumberfour = Math.floor(Math.random() * crystalnumbers.length);
            var crystalnumberfour = crystalnumbers[randomnumberfour];
            crystalnumbers.splice(randomnumberfour,1);
          
            
            function reset() {
            randomNumberOne = Math.floor(Math.random() * crystalnumbers.length);
            crystalnumberone = crystalnumbers[randomNumberOne];
            crystalnumbers.splice(randomNumberOne,1);
            randomNumbertwo = Math.floor(Math.random() * crystalnumbers.length);
            crystalnumbertwo = crystalnumbers[randomNumbertwo];
            crystalnumbers.splice(randomNumbertwo,1);
            randomnumberthree = Math.floor(Math.random() * crystalnumbers.length);
            crystalnumberthree = crystalnumbers[randomnumberthree];
            crystalnumbers.splice(randomnumberthree,1);
            randomnumberfour = Math.floor(Math.random() * crystalnumbers.length);
            crystalnumberfour = crystalnumbers[randomnumberfour];
            crystalnumbers.splice(randomnumberfour,1);}

        

         


            $("#picone").click(function () {
                totalscore = crystalnumberone + totalscore;
                $("#totalscore").empty(); $("#totalscore").append(totalscore);
                console.log(totalscore);
            })
            $("#pictwo").click(function () {
                totalscore = crystalnumbertwo + totalscore;
                $("#totalscore").empty(); $("#totalscore").append(totalscore);
            })
            $("#picthree").click(function () {
                totalscore = crystalnumberthree + totalscore;
                $("#totalscore").empty(); $("#totalscore").append(totalscore);
            })
            $("#picfour").click(function () {
                totalscore = crystalnumberfour + totalscore;
                $("#totalscore").empty(); $("#totalscore").append(totalscore);
            })

           
        
            $(".crystalpics").click(function () {
                if (
                totalscore === randomnumber) {
                wins += 1;
                $("#winNumber").html(wins);
                crystalnumbers.push(crystalnumberone, crystalnumbertwo, crystalnumberthree, crystalnumberfour);
                $("#randomnumber").empty();
                $("#totalscore").empty();
                totalscore = 0;
                randomnumber = Math.floor((Math.random() * 50) + 30);
                $("#randomnumber").text(randomnumber);
                reset();               
                
                }
                else if(
                    totalscore > randomnumber) {
                loses += 1;
                crystalnumbers.push(crystalnumberone, crystalnumbertwo, crystalnumberthree, crystalnumberfour);
                $("#randomnumber").empty();
                $("#totalscore").empty();
                $("#loseNumber").html(loses);
                totalscore = 0;
                $("#totalscore").text(totalscore);
                randomnumber = Math.floor((Math.random() * 50) + 30);
                $("#randomnumber").text(randomnumber);      
                reset(); 
                
               }

               console.log("Wins: " + wins);
               console.log("Loses: " + loses);
               console.log(crystalnumberone);
               console.log(crystalnumbertwo);
               console.log(crystalnumberthree);
               console.log(crystalnumberfour);

            })

       
        });

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

