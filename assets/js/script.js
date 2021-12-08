var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a") + " ";
$("#currentDay").append(rightNow);

var time9 = document.getElementById("9time")
var time10 = document.getElementById("10time")
var time11 = document.getElementById("11time")
var time12 = document.getElementById("12time")
var time13 = document.getElementById("13time")
var time14 = document.getElementById("14time")
var time15 = document.getElementById("15time")
var time16 = document.getElementById("16time")
var time17 = document.getElementById("17time")

function calTime(hour, mins) {
    var format = "HH:mm";
    var bt = moment().add(hour, "h").add(mins, "m");
    if (bt.isAfter(moment("10:00", "HH:mm"))) {
        // bt = bt.add(15, "m");
        console.log("no")
    } else {
        console.log("yes")
    }

    // return bt.format(format);
}
calTime(11, 0)
$("#9x").on("click", function() {

    var inTime = time9.value;
    saveList(inTime)

    // function saveList(timeValIn) {
    //     var timeValOut = timeValIn;
    //     localStorage.setItem("timeValOut", JSON.stringify(timeValOut));
    // }
})
$("#10x").on("click", function() {
    var inTime1 = time10.value;
    saveList1(inTime1);

    // function saveList1(timeValIn1) {
    //     var timeValOut2 = timeValIn1;
    //     localStorage.setItem("timeValOut2", JSON.stringify(timeValOut2));
    // }
})
$("#11x").on("click", function() {
    var inTime2 = time11.value;
    saveList(inTime2);

    // function saveList(timeValIn2) {
    //     var timeValOut3 = timeValIn2;
    //     localStorage.setItem("timeValOut3", JSON.stringify(timeValOut3));
    // }
})
$("#12x").on("click", function() {
    var inTime3 = time12.value;
    saveList(inTime3);

    // function saveList(timeValIn3) {
    //     var timeValOut4 = timeValIn3;
    //     localStorage.setItem("timeValOut4", JSON.stringify(timeValOut4));
    // }
})
$("#13x").on("click", function() {
    var inTime4 = time13.value;
    saveList(inTime4);

    // function saveList(timeValIn) {
    //     var timeValOut5 = timeValIn;
    //     localStorage.setItem("timeValOut5", JSON.stringify(timeValOut5));
    // }
})
$("#14x").on("click", function() {
    var inTime5 = time14.value;
    saveList(inTime5);

    // function saveList(timeValIn) {
    //     var timeValOut6 = timeValIn;
    //     localStorage.setItem("timeValOut6", JSON.stringify(timeValOut6));
    // }
})
$("#15x").on("click", function() {
    var inTime6 = time15.value;
    saveList(inTime6);

    // function saveList(timeValIn) {
    //     var timeValOut7 = timeValIn;
    //     localStorage.setItem("timeValOut7", JSON.stringify(timeValOut7));
    // }
})
$("#16x").on("click", function() {
    var inTime7 = time16.value;
    saveList(inTime7);

    // function saveList(timeValIn) {
    //     var timeValOut8 = timeValIn;
    //     localStorage.setItem("timeValOut8", JSON.stringify(timeValOut8));
    // }
})
$("#17x").on("click", function() {
    var inTime8 = time17.value;
    saveList(inTime8);

    // function saveList(timeValIn) {
    //     var timeValOut9 = timeValIn;
    //     localStorage.setItem("timeValOut9", JSON.stringify(timeValOut9));
    // }
})


function saveList(timeValIn) {
    var timeValOut = timeValIn;
    localStorage.setItem("timeValOut", JSON.stringify(timeValOut));
}
loadSaveList1()

function loadSaveList1() {
    var savedTask = localStorage.getItem("timeValOut");
    $("#9time").text(JSON.parse(savedTask))
}

loadSaveList2()

function loadSaveList2() {
    var savedTask = localStorage.getItem("timeValOut2");
    $("#10time").text(JSON.parse(savedTask))
}

loadSaveList3()

function loadSaveList3() {
    var savedTask = localStorage.getItem("timeValOut3");
    $("#11time").text(JSON.parse(savedTask))
}

loadSaveList4()

function loadSaveList4() {
    var savedTask = localStorage.getItem("timeValOut4");
    $("#12time").text(JSON.parse(savedTask))
}

loadSaveList5()

function loadSaveList5() {
    var savedTask = localStorage.getItem("timeValOut5");
    $("#13time").text(JSON.parse(savedTask))
}

loadSaveList6()

function loadSaveList6() {
    var savedTask = localStorage.getItem("timeValOut6");
    $("#14time").text(JSON.parse(savedTask))
}

loadSaveList7()

function loadSaveList7() {
    var savedTask = localStorage.getItem("timeValOut7");
    $("#15time").text(JSON.parse(savedTask))
}

loadSaveList8()

function loadSaveList8() {
    var savedTask = localStorage.getItem("timeValOut8");
    $("#16time").text(JSON.parse(savedTask))
}

loadSaveList9()

function loadSaveList9() {
    var savedTask = localStorage.getItem("timeValOut9");
    $("#17time").text(JSON.parse(savedTask))
}



// function saveList(timeValIn) {
//     var timeValOut = timeValIn
//     localStorage.setItem("timeValOut", JSON.stringify(timeValOut));
// }



// $("#9x").on("click", function() {
//     console.log(time9.value);
// })

// var flash = 0;
// var timeInterval = setInterval(function() {
//     // $("#currentDay").remove(rightNow);
//     if ((flash % 2) == 0) {
//         // document.getElementById("currentDay").classList.add("hide");
//         // var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a") + " ";
//         console.log("1")
//     } else {
//         // var rightNow = moment().format("MMMM Do, YYYY - hh:mm:ss a") + " ";
//         // document.getElementById("currentDay").classList.remove("hide");
//         console.log("0")
//     }
//     flash++
// }, 1000);
// $("document").ready(timeInterval)