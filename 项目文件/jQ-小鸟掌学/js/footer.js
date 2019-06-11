$(function(){
	$('.music li').click(function(){
        var index=$(this).index()
        var $music=$('.music1')[index]
        if($music.paused){
            $music.play()
        }
    })
})
