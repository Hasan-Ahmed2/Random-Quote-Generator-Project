var inspirationalQuotes = ['Your limitation—it’s only your imagination.', ' Push yourself, because no one else is going to do it for you.', 'Sometimes later becomes never. Do it now!', ' Great things never come from comfort zones.', 'Success doesn’t just find you. You have to go out and get it.', ' The harder you work for something, the greater you’ll feel when you achieve it.', 'Do one thing every day that scares you.'];
console.log(inspirationalQuotes.length);




$('button').click(function() {
    
var random = Math.floor( Math.random() * inspirationalQuotes.length); 
$('.quoteRecommend').text(inspirationalQuotes[random]);
console.log(random);
    
});                               




