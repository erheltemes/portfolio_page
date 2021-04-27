const highlight = {
    title: "Study Session Planning Site",
    discription: "MVC file structure, SQL database connection, Handlebars",
    link: "https://mysterious-bayou-93387.herokuapp.com/",
    img: "assets/img/study_buddy.jpg",
}


const workSamples = [
    {
        title: "Employee Tracker",
        discription: "SQL Database, CRUD features using Inquirer",
        link: "https://github.com/erheltemes/employee_tracker.git",
        img: "assets/img/employee_tracker.PNG",
    },
    {
        title: "Weather Dashboard",
        discription: "Server-side APIs, Javascript/jQuery, CSS, Local Storage",
        link: "https://erheltemes.github.io/weather_dashboard/",
        img: "assets/img/weather_dashboard.PNG",
    },
    {
        title: "Day Planner",
        discription: "3rd-Party API, Javascript/jQuery, Local Storage",
        link: "https://erheltemes.github.io/work_day_scheduler/",
        img: "assets/img/scheduler_1.PNG",
    },
    {
        title: "Comic Sans Quiz",
        discription: "Javascript, Local Storage, CSS",
        link: "https://erheltemes.github.io/code_quiz/",
        img: "assets/img/Code_quiz.PNG",
    },
    {
        title: "Password Generator",
        discription: "Javascript",
        link: "https://erheltemes.github.io/password_generator/",
        img: "assets/img/password_generator.PNG",
    },
] 

//propagate highlight
$(".ws-flex")
.append($("<a>").attr("href", highlight.link).attr("target", "_blank").attr("style", `background-image: url(${highlight.img})`).addClass("work-sample-highlight")
    .append($("<h5>").addClass("ws-title").text(highlight.title)
    )
    .append($("<p>").addClass("ws-dis").text(highlight.discription)
    )
)

//propagate work-samples
workSamples.forEach(object => {   
    $(".ws-flex")
    .append($("<a>").attr("href", object.link).attr("target", "_blank").attr("style", `background-image: url(${object.img})`).addClass("work-sample")
        .append($("<h5>").addClass("ws-title").text(object.title)
        )
        .append($("<p>").addClass("ws-dis").text(object.discription)
        )
    )
})

$("#send-email").click(function(){
    window.alert("Email Sent")
})
