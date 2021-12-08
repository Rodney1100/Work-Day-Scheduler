var rightNow = moment().format("MMMM Do, YYYY - hh:mm a") + " ";
var hrNow = moment().format("h");
$("#currentDay").append(rightNow);

var time9 = document.getElementById("9time")
var time11 = document.getElementById("11time")
var time10 = document.getElementById("10time")
var time12 = document.getElementById("12time")
var time13 = document.getElementById("13time")
var time14 = document.getElementById("14time")
var time15 = document.getElementById("15time")
var time16 = document.getElementById("16time")
var time17 = document.getElementById("17time")

function calTime(hour) {
    var bt = hour
    if (bt < 9) {
        time17.classList.remove("present")
        time9.classList.remove("past")
        time10.classList.remove("past")
        time11.classList.remove("past")
        time12.classList.remove("past")
        time13.classList.remove("past")
        time14.classList.remove("past")
        time15.classList.remove("past")
        time16.classList.remove("past")
        time17.classList.remove("past")
        console.log("under 9")
    }
    if (bt == 9) {
        time9.classList.remove("future")
        time9.classList.add("present")
        console.log("9")
    }
    if (bt == 10) {
        console.log("10")
        time9.classList.add("past")
        time9.classList.remove("future")
        time10.classList.remove("future")
        time10.classList.add("present")
    } else if (bt == 11) {
        console.log("11")
        time9.classList.add("past")
        time9.classList.remove("future")
        time11.classList.remove("future")
        time10.classList.remove("future")
        time10.classList.add("past")
        time11.classList.add("present")
    } else if (bt == 12) {
        console.log("12")
        time9.classList.add("past")
        time10.classList.add("past")
        time11.classList.add("past")
        time9.classList.remove("future")
        time10.classList.remove("future")
        time11.classList.remove("future")
        time12.classList.remove("future")
        time11.classList.remove("present")
        time12.classList.add("present")
    } else if (bt == 13) {
        console.log("13")
        time9.classList.add("past");
        time10.classList.add("past");
        time11.classList.add("past");
        time12.classList.add("past");
        time9.classList.remove("future");
        time10.classList.remove("future");
        time11.classList.remove("future");
        time12.classList.remove("future");
        time13.classList.remove("future");
        time11.classList.remove("present");
        time12.classList.remove("present");
        time13.classList.add("present");

    } else if (bt == 14) {
        time9.classList.add("past");
        time10.classList.add("past");
        time11.classList.add("past");
        time12.classList.add("past");
        time13.classList.add("past");
        time9.classList.remove("future");
        time10.classList.remove("future");
        time11.classList.remove("future");
        time12.classList.remove("future");
        time13.classList.remove("future");
        time14.classList.remove("future");
        time11.classList.remove("present");
        time12.classList.remove("present");
        time13.classList.remove("present");
        time14.classList.add("present");
    } else if (bt == 15) {
        console.log("15")
        time9.classList.add("past");
        time10.classList.add("past");
        time11.classList.add("past");
        time12.classList.add("past");
        time13.classList.add("past");
        time14.classList.add("past");
        time9.classList.remove("future");
        time10.classList.remove("future");
        time11.classList.remove("future");
        time12.classList.remove("future");
        time13.classList.remove("future");
        time14.classList.remove("future");
        time15.classList.remove("future");
        time11.classList.remove("present");
        time12.classList.remove("present");
        time13.classList.remove("present");
        time14.classList.remove("present");
        time15.classList.add("present");
    } else if (bt == 16) {
        console.log("16")
        console.log("15");
        time9.classList.add("past");
        time10.classList.add("past");
        time11.classList.add("past");
        time12.classList.add("past");
        time13.classList.add("past");
        time14.classList.add("past");
        time15.classList.add("past");
        time9.classList.remove("future");
        time10.classList.remove("future");
        time11.classList.remove("future");
        time12.classList.remove("future");
        time13.classList.remove("future");
        time14.classList.remove("future");
        time15.classList.remove("future");
        time11.classList.remove("present");
        time12.classList.remove("present");
        time13.classList.remove("present");
        time14.classList.remove("present");
        time15.classList.remove("present");
        time16.classList.add("present");
    } else if (bt == 17) {
        console.log("17")
    }

}
calTime(16)
    // console.log(hrNow)

$("#9x").on("click", function() {

    var inTime = time9.value;
    saveList(inTime)

    function saveList(timeValIn) {
        var timeValOut = timeValIn;
        localStorage.setItem("timeValOut", JSON.stringify(timeValOut));
    }
})
$("#10x").on("click", function() {
    var inTime1 = time10.value;
    saveList1(inTime1);

    function saveList1(timeValIn1) {
        var timeValOut2 = timeValIn1;
        localStorage.setItem("timeValOut2", JSON.stringify(timeValOut2));
    }
})
$("#11x").on("click", function() {
    var inTime2 = time11.value;
    saveList(inTime2);

    function saveList(timeValIn2) {
        var timeValOut3 = timeValIn2;
        localStorage.setItem("timeValOut3", JSON.stringify(timeValOut3));
    }
})
$("#12x").on("click", function() {
    var inTime3 = time12.value;
    saveList(inTime3);

    function saveList(timeValIn3) {
        var timeValOut4 = timeValIn3;
        localStorage.setItem("timeValOut4", JSON.stringify(timeValOut4));
    }
})
$("#13x").on("click", function() {
    var inTime4 = time13.value;
    saveList(inTime4);

    function saveList(timeValIn) {
        var timeValOut5 = timeValIn;
        localStorage.setItem("timeValOut5", JSON.stringify(timeValOut5));
    }
})
$("#14x").on("click", function() {
    var inTime5 = time14.value;
    saveList(inTime5);

    function saveList(timeValIn) {
        var timeValOut6 = timeValIn;
        localStorage.setItem("timeValOut6", JSON.stringify(timeValOut6));
    }
})
$("#15x").on("click", function() {
    var inTime6 = time15.value;
    saveList(inTime6);

    function saveList(timeValIn) {
        var timeValOut7 = timeValIn;
        localStorage.setItem("timeValOut7", JSON.stringify(timeValOut7));
    }
})
$("#16x").on("click", function() {
    var inTime7 = time16.value;
    saveList(inTime7);

    function saveList(timeValIn) {
        var timeValOut8 = timeValIn;
        localStorage.setItem("timeValOut8", JSON.stringify(timeValOut8));
    }
})
$("#17x").on("click", function() {
    var inTime8 = time17.value;
    saveList(inTime8);

    function saveList(timeValIn) {
        var timeValOut9 = timeValIn;
        localStorage.setItem("timeValOut9", JSON.stringify(timeValOut9));
    }
})

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