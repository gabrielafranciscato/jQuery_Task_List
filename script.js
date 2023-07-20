$(document).ready(function() {
    $("#taskForm").submit(function(event) {
        event.preventDefault();
        const taskInput = $("#taskInput").val().trim();
        if (taskInput !== "") {
            const listItem = $("<li>").text(taskInput);

            listItem.click(function() {
                $(this).toggleClass("completed");
            });

            $("#taskList").append(listItem);
            $("#taskInput").val("");
            $("#taskList").removeClass("no-bullets");
        }
    });
});
