$(document).ready(function() {
  var quote = $('.quote-txt');
  var author = $('.author');

  randomQuote();

  $('#newQuote').click(function() {
    randomQuote();

    quote.toggleClass('fromTopQuote');
    author.toggleClass('authorAnim');
  });

  function randomQuote() {
    var url = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=';
    $.ajaxSetup({ cache: false });

    $.getJSON(url, function(data) {
    $('.quote-txt').html(data[0].content).addClass('fromTopQuote');
    $('.author').html("- " + data[0].title).addClass('authorAnim');
    
    $('.btn-wrapper a').attr('href','https://twitter.com/intent/tweet?text='+encodeURIComponent('"' + $('.quote-txt').text() + '"' +'- '+ data[0].title));
    });
  }
});