
// new test command

/** contribute shell built-ins commands **/

(function(jQuery,nuxeo) {
  var cmds = {
      quake3  : {
          impl : function (cmds, term, shell) {
            alert("start Quake");
              jQuery.getScript("/nuxeo/webgl-quake3/js/util/game-shim.js").success(
                      function() {
                        jQuery.getScript("/nuxeo/webgl-quake3/js/util/gl-matrix-min.js").success(
                          function() {
                            jQuery.getScript("/nuxeo/webgl-quake3/js/util/stats.min.js").success(
                            function() {
                              jQuery.getScript("/nuxeo/webgl-quake3/js/jquake.js").success(
                              function() {
                                jQuery.getScript("/nuxeo/webgl-quake3/js/q3bsp.js").success(
                                 function() {
                                  jQuery.getScript("/nuxeo/webgl-quake3/js/q3shader.js").success(
                                  function() {
                                    jQuery.getScript("/nuxeo/webgl-quake3/js/q3glshader.js").success(
                                    function() {
                                      jQuery.getScript("/nuxeo/webgl-quake3/js/q3movement.js").success(
                                      function() {
                                        q3setup(".mainFragment","q3dm7");
                                      });
                                    });
                                 });
                              });
                            });
                          });
                        });
                       });

          },
          help : "Run Quake3 WebGL Map viewer",
          suggest : []
      }
  };

  if (nuxeo.shell_builtins === undefined) {
    nuxeo.shell_builtins={};
  }
  nuxeo.shell_builtins = jQuery.extend({}, nuxeo.shell_builtins , cmds);

})(jQuery,this.nuxeo === undefined ? this.nuxeo = {} : this.nuxeo);
