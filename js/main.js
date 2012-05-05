jQuery( function($) {
  $.route({
    path: /./,
    func: function() { // common use
      $LAB.script('js/libs/modernizr.js')
          .script('js/ga.js')
          .script('js/cb.js')
          .wait(function() {
             $(function(){
                 $('img,input[type=image]').imgRollver();
             
             })
          });
    }
  },
  {
    path: /^\/hello/,
    func: function() {
            $LAB.script('js/hoge.js');
    }
  });
});





/**
 *  jQuery Router plugin
 *  require jQuery 1.2
 *  (c) Hideaki Tanabe <http://blog.kaihatsubu.com>
 *  reference http://tech.kayac.com/archive/javascript-url-dispatcher.html
 *  Licensed under the MIT License.
 */
(function($) {
  var pathname = location.pathname;
  $.route = function() {
    $.each(arguments, function(index) {
      var path = this["path"];
      var func = this["func"];
      if (path && func) {
        if (pathname.match(path)) {
          $(function() {
            func.apply(this);
          });
        }
      }
    });
  };
})(jQuery);
