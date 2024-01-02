$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('input').val();
        $('ul').append(`<li>${novaTarefa}</li>`);
        $('input').val('');

    });

    $('ul').on('click','li', function(e) {
        $(e.target).css("text-decoration", "line-through");
    });
});