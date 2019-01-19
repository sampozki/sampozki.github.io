let newestnum;
let currentnum;

$(function(){
    getxkcd('https://xkcd.now.sh');

    $.get('https://xkcd.now.sh', function(data){
        newestnum=data.num;
        $('#next').css('color','#DDD')
    });
});

$('#random').click(function(){
    let randomxkcd = Math.floor(Math.random() * newestnum) + 1;
    getxkcd('https://xkcd.now.sh/' + randomxkcd);
});

$('#next').click(function(){
    if (currentnum < newestnum) {
        currentnum++;
        getxkcd('https://xkcd.now.sh/' + currentnum);
    }
});

$('#prev').click(function(){
    if (currentnum > 1) {
        currentnum--;
        getxkcd('https://xkcd.now.sh/' + currentnum);
    }
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
        currentnum=data.num;
        history.replaceState('','','/xkcd/' + currentnum);
        if(currentnum === newestnum){
            $('#next').css('color','#DDD')
        }else{
            $('#next').css('color','')
        }
        if(currentnum === 1){
            $('#prev').css('color','#DDD')
        }else{
            $('#prev').css('color','')
        }
    });
};
