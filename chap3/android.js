/**
 * Created by PyCharm.
 * User: scott
 * Date: 3/9/12
 * Time: 12:23 PM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    loadPage();
});
//function loadPage(url) {
//    $('body').append('<div id="progress">Loading...</div>');
//    scrollTo(0,0);
//    if (url == undefined) {
//        $('#container').load('index.html #header ul', hijackLinks);
//    } else {
//        $('#container').load(url + ' #content', hijackLinks);
//    }
//}
//function hijackLinks() {
//    $('#container a').click(function(e){
//       // var url = e.target.href;
//       // if (url.match(/wisdomdata.github.com/))
//        e.preventDefault();
//        loadPage(e.target.href);
//    });
//    var title = $('h2').html() || 'Hello!';
//    $('h1').html(title);
//    $('h2').remove();
//    $('#progress').remove();
//}
//
//function loadPage(url) {
//    $('body').append('<div id="progress">Loading...</div>');
//    scrollTo(0,0);
//    if (url == undefined) {
//        $('#container').load('index.html #header ul', hijackLinks);
//    } else {
//        $('#container').load(url + ' #content', hijackLinks);
//    }
//}

var hist = [];
var startUrl = 'index.html';
$(document).ready(function(){
    loadPage(startUrl);
});
function loadPage(url) {
    $('body').append('<div id="progress">Loading...</div>');
    scrollTo(0,0);
    if (url == startUrl) {
        var element = ' #header ul';
    } else {
        var element = ' #content';
    }
    $('#container').load(url + element, function(){
        var title = $('h2').html() || 'Hello!';
        $('h1').html(title);
        $('h2').remove();
        $('.leftButton').remove();
        hist.unshift({'url':url, 'title':title});
        if (hist.length > 1) {
            $('#header').append('<div class="leftButton">'+hist[1].title+'</div>');
            $('#header .leftButton').click(function(e){
                $(e.target).addClass('clicked');
                var thisPage = hist.shift();
                var previousPage = hist.shift();
                loadPage(lastUrl.url);
            });
        }
        $('#container a').click(function(e){
            var url = e.target.href;
            if (url.match(/localhost/)) { // /(/jonathanstark.com/)
                e.preventDefault();
                loadPage(url);
            }
        });
        $('#progress').remove();
    });
}
