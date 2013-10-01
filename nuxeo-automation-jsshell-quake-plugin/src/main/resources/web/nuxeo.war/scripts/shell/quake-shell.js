
// new test command

/** contribute shell built-ins commands **/

(function(jQuery,nuxeo) {
  var cmds = {
      quake3  : {
          impl : function (cmds, term, shell) {
            // XXX
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
