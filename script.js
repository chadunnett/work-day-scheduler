$("#currentDay").text(moment().format("dddd [,] MMMM Do"))

$(".saveBtn").on("click", function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id")
    localStorage.setItem(time, text)
})

function timeOfDay() {
    var currentTime = moment().hour();
    $(".time-block").each(function () {
        var timeBlock = parseInt($(this).attr("id").split("hour")[1]);
        if (timeBlock < currentTime) {
            $(this).addClass("past");
            // $(this).removeClass("present")
            // $(this).removeClass("future");
        } else if (timeBlock === currentTime) {
            // $(this).removeClass("past");
            $(this).addClass("present");
            // $(this).removeClass("furure")
        } else {
            // $(this).removeClass("past");
            // $(this).removeClass("present");
            $(this).addClass("future")
        }
    })
}
timeOfDay()

