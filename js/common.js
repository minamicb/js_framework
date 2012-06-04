define(["router","modernizr","ga","cb"],function(){
	var common = function(){
		$.route({
			path: /./,
			func: function() {
				$('img,input[type=image]').imgRollover();
			}
		});
	}
	return common;
});