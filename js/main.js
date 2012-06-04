require.config({
		paths: {
			jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min',
			router: 'libs/jquery.router',
			modernizr: 'libs/modernizr',
			ga: 'ga',
			cb: 'cb'
		}
});

require(["jquery"],function(){
	
	/* URL Routing */
	require(["router"],function(){
		  $.route({
		    path: /./,
		    func: function() {
					// common
					require(["modernizr","ga","cb"],function(modernizr,ga,cb){
						$(function(){
							console.log("common");
							$('a').smoothScroll();
						});
		      });
		    }
		  },
		  {
		    path: /\/hello\//,
		    func: function() {
					// /hello
					require(["hoge"],function(){
						Hoge.test();
		      });
		    }
		  });
			
	});
});