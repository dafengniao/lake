/*
 * lake base js 
 */

var lake = {};

/**
 * 报名倒计时
 */
lake.match_times = function(){
  return 1000000;
}

/**
 * 倒计时 times:linux时间戳时间差, type:样式类型
 */
lake.count_down = function(times, type){

  //linux时间戳时间差
  var times = parseInt(times);
  var SysSecond;
  var InterValObj;
  //倒计时
  SysSecond = parseInt(times);
  InterValObj = window.setInterval(SetRemainTime, 1000); //间隔函数，1秒执行

  //将时间减去1秒，计算天、时、分、秒
  function SetRemainTime() {
    if (SysSecond > 0) {
      SysSecond = SysSecond - 1;
      var second = Math.floor(SysSecond % 60);             // 计算秒
      var minite = Math.floor((SysSecond / 60) % 60);      //计算分
      var hour = Math.floor((SysSecond / 3600) % 24);      //计算小时
      var day = Math.floor((SysSecond / 3600) / 24);        //计算天

      //输入时间
      var time_show = '';
      if(type==1){
        time_show += '<h3 class="ui header">比赛倒计时</h3>';
        time_show += '<div class="day">'+ day +'<span>天</span></div>';
	      time_show += '<div class="day">'+ hour +'<span>小时</span></div>';				
	      time_show += '<div class="day">'+ minite +'<span>分</span></div>';
	      time_show += '<div class="day">'+ second +'<span>秒</span></div>';
      }else{
      
      }
      $("#count-down").html(time_show);
    } else {
      //剩余时间小于或等于0的时候，就停止间隔函数
      window.clearInterval(InterValObj);
      //这里可以添加倒计时时间为0后需要执行的事件

    }
  }

}
