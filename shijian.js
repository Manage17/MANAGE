function shijian(){
	var a=new Date()
	var h=a.getHours()
	var m=a.getMinutes()
	var s=a.getSeconds()
	m=jia(m)
	s=jia(s)
	document.getElementById('a1').innerHTML=h+":"+m+":"+s
	setTimeout(function(){shijian()},500)
}
function jia(i){
	if (i<10) {
	i="0"+i				
	}
	return i			
}
