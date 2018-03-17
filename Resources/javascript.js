$(document).ready(function(){
  var quote;

  var getQuote = function(){
    $.ajax({
      url:"https://talaikis.com/api/quotes/random/",
      method: "GET",
      success: function(data){
        $('.welcome').html("<div class='quote'>&quot;"+data.quote+"&quot;</div><div class='author'> By: "+data.author+"</div>");
        quote = data.quote;
        shareTweet();
        changeBackground();
      },
      error: function(){
        error('Error processing');
      },
      cache: false
    });
  }

  var shareTweet = function(){
    var twitterURL="https://twitter.com/intent/tweet?text="+quote;
    $('#tweet').attr('href',twitterURL);
  }

  var changeBackground = function(){
    var max = 7;
    var min = 1;
    var imgNum = Math.floor(Math.random()*(max-min+1)+min);
    imgNum = imgNum.toString();
    $('.quoteBox').css('background-image', 'url(./Resources/img'+imgNum+'.jpg)');
  }

  $('#generate').on('click', function(e) {
    e.preventDefault();
    getQuote();
    });
    });
