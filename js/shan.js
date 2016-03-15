/**
 * Created by Administrator on 2016/3/15.
 */
$(function(){
    //
    var index;
    $('.main').tap(function(){
        index=$(this).index();
        var height=$(window).height();
        var zezhao=$('<div></div>')
        $(zezhao).attr('class','zezhao');
        $(zezhao).css({width:'100%',height:height,backgroundColor:'rgba(0, 0, 0,0.3)',position:'fixed',top:'0',zIndex:'999'}).appendTo('body');
        $('.z').eq(index-1).css({display:'block'});

        $('.zezhao').tap(function(e){
            if(e.target==this){
                $('.zezhao').css({display:'none'});
                $('.z').css({display:'none'});
            }
        });

    });
    $('.zi').tap(function(){
        var attr=$(this).find('.zia').html();
        var html=$('.main').eq(index-1).find('span .ziab');
        html.html(attr);
        $('.z').eq(index-1).find('.zib').removeClass('zibtn');
        $(this).find('.zib').addClass('zibtn');
    })
    //
    var str1,str2,str3,array=[];

    var reg=/^1[3|4|5|7|8]\d{9}$/;

    $('.i1').focus(function(){
        if($(this).val()=='请输入手机号码'){
            $(this).val('');
        }else{
            $(this).val(str1);
        }

    })
    $('.i1').blur(function(){
        if($(this).val()==''){
            $(this).val('请输入手机号码');
        }else{
            str1=$(this).val();
            $(this).val(str1);
            var tf1=reg.test(str1);
            array.push(tf1);
        }
    })

    $('.i2').focus(function(){
        if($(this).val()=='请输入验证码'){
            $(this).val('');
        }else{
            $(this).val(str2);
        }

    })
    $('.i2').blur(function(){
        if($(this).val()==''){
            $(this).val('请输入验证码');
        }else{
            str2=$(this).val();
        }
    })

    $('.i3').focus(function(){
        if($(this).val()=='验证码'){
            $(this).val('');
        }else{
            $(this).val(str3);
        }

    })
    $('.i3').blur(function(){
        if($(this).val()==''){
            $(this).val('验证码');
        }else{
            str3=$(this).val();
        }
    })







})