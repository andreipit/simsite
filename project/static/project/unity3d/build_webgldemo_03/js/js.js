
function showModal(title, content, type, callback){
    var m = '';
    m += '<div class="modal">';
        m += '<div class="modal_window '+(type || '')+'">';
            m += '<div class="modal_window_header">'+(title || '&nbsp;')+'</div>';
            m += '<div class="modal_window_content aligncenter">'+content+'</div>';
        m += '</div>';
    m += '</div>';
    $('#content').append(m);

    if(callback && typeof callback === "function") {
        callback();
    }
}

function hideModal() {
    $('.modal_window').fadeOut(80, function(){
        $('.modal').fadeOut(80, function(){
            $('.modal').remove();
        });
    });
}

$(function(){
    var currentdate = new Date();
    $('#cur_time').text(('0' + currentdate.getHours()).slice(-2) + ":" + ('0' + currentdate.getMinutes()).slice(-2) + ":" + ('0' + currentdate.getSeconds()).slice(-2));
    $('#cur_date').text(('0' + currentdate.getDate()).slice(-2) + "." + ('0' + (currentdate.getMonth()+1)).slice(-2)  + "." + currentdate.getFullYear());
})

function highLightBttn(name) {
    if (practice) $(name).addClass('button_action');
}

function lowLightBttn(name) {
    if (practice) $(name).removeClass('button_action');
}

function goTo(page) {
    // For tests:
        // var page = "/task_1_02.html";
        // var myPath = "/C:/Users/user/Desktop/build/14_browser/FoundrySAZ_Data/html";
        // window.open("file:///C:/Users/user/Desktop/build/14_browser/FoundrySAZ_Data/html/task_1_02.html"); //works
    var myPath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/"));
    // window.location.href = "file://" + myPath + "/" + page;

    var prefix = "ex_";
    if (practice) prefix = "prac_";

    window.open("file://" + myPath + "/" + prefix + page, "_self");

}