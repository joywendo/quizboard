
  $(document).ready(function(){
      $(".form-group2,.form-group3,.form-group4,.form-group5").hide();

      var answer1 = $("input:radio[name=question1]").val();

      if(answer1 == "CSS"){
        $(".form-group2").show();
        console.log("Good Work!");
      }
      else{
        console.log("You have answered incorrectly.Try again")
      };
      var answer2 =$("input:radio[name=question2]").val();
        if(answer2 == "Git remote add"){
          $(".form-group3").show();
          console.log("You're doing good proceed");
        }
        else{
          console.log("Error.Try again")
        };
        var answer3 =("input:[name=question3]").val();
        if(answer3 == "For"){
          $(".form-group3").show();
          console.log("You're doing good proceed");
        }
        else{
          console.log("Error.Try again")
        };
        var answer4 =("input:[name=question4]").val();
        if(answer4 == "2020"){
          $(".form-group4").show();
          console.log("You're doing good proceed");
        }
        else{
          console.log("Error.Try again")
        };
        var answer5 =("input:[name=question5]").val();
        if(answer5 == "Yes"){
          $(".form-group3").show();
          console.log("You're doing good proceed");
        }
        else{
          console.log("Error.Try again")
        };

  });
