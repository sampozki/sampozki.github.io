let newestnum;

$(function(){
    getxkcd('https://xkcd.now.sh');
    $.get('https://xkcd.now.sh', function(data){
        newestnum=data.num;
    });    
});

$('#random').click(function(){
    let randomxkcd = Math.floor(Math.random() * newestnum) + 1;
    getxkcd('https://xkcd.now.sh/' + randomxkcd);
});
    
function getxkcd(url){
    $.get(url, function(data){
        //console.log(data);
        $('#otsikko').text(data.title);
        $('#alt').text(data.alt);
        $('#num').text('Num: ' + data.num);
        $('#image').attr('alt', data.alt);
        if(data.imgRetina){
            $('#image').attr('src', data.imgRetina);
        } else{
            $('#image').attr('src', data.img);
        }
    });
};