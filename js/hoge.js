var Hoge = Window.Hoge || {};

/*  */
Hoge.test = function(){
	console.log('this is '+ this);
}

/*  */

Hoge.bodyTest = function(c){
	if(typeof c != "string") return;
	var $body = $('body')
		.css('background',c);
	console.log(this.bodyTest.WIDTH);
}

Hoge.bodyTest.WIDTH = 320;
Hoge.bodyTest.HEIGHT = 300;
