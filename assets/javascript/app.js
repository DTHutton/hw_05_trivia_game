$(document).ready(function () {

    //question and answer arrays
    //----------------------------------------------------------------------------------------
    let questions = [
        "What did Gretchen Weiner's dad invent?", //0
        "Which character is almost too gay to function?", //1
        "Where does Damian claim that Gretchen hides her secrets?", //2
        "What costume was Karen wearing at the Halloween party?", //3
        "Where did Cady transfer from?", //4
        "What is the punishment for not following the mean girl dress code?", //5
        "What day to The Plastics wear pink?", //6
        "Who receives four candy canes?", //7
        "What are the bars called that Cady gives Regina to cause weight gain?", //8
        "What song do The Plastics dance to at the talent show?" //9
    ]

    let answers = new Array();
    answers[0] = new Array("The Toaster Strudel", "Poptarts", "The Rotisserre Chicken", "Cabbage Patch Kids");
    answers[1] = new Array("Cady", "Coach Carr", "Damian", "Janice");
    answers[2] = new Array("Her hair", "Her purse", "At home", "Her locker");
    answers[3] = new Array("A mouse costume", "A maid outfit", "A tracksuit", "Vanilla Ice cosplay");
    answers[4] = new Array("Africa", "Chicago", "Sweden", "Thailand");
    answers[5] = new Array("Not sitting with the plastics at lunch", "Not being able to ride in Regina's car", "Having Tina Fey write a SNL skit about you", "Doing the Macrena on the morning announcements");
    answers[6] = new Array("Wednesdays", "Every day that ends in 'y'", "Saturdays", "Thursday");
    answers[7] = new Array("Glen Coco", "Regina George", "Gretchen Weiners", "Janice Ian");
    answers[8] = new Array("Kalteen", "Mars", "Snickers", "Heath");
    answers[9] = new Array("Jingle Bell Rock", "Rocking Around the Christmas Tree", "Frosty the Snowman", "Grandma Got Run Over by a Reindeer");

    //----------------------------------------------------------------------------------------

    //timer
    //----------------------------------------------------------------------------------------
    let intervalId;
    let time = 300;

    run = () => {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    }

    decrement = () => {
        time--;
        $('.timer').html('<h2>' + time + '</h2>');
        if (time === 0) {
            stop();
            alert('Time Up!');
        }
    }

    stop = () => {
        clearInterval(intervalId);
    }

    run();

    //----------------------------------------------------------------------------------------


   //submit button function
   //----------------------------------------------------------------------------------------
    $('.doneButton').on('click', function() {



    });

   //----------------------------------------------------------------------------------------


});
