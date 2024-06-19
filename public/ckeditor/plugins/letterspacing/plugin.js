CKEDITOR.plugins.add( 'letterspacing', {
  requires: ['richcombo'],
  init: function( editor ) {
    var config = editor.config,
      lang = editor.lang.format;
    var trackings = [];

    config.allowedContent = 'span'; //There may be a better way to do this.

    for (var i = 0; i < 10; i++) {
      trackings.push(String(i) + 'px');
    }

    editor.ui.addRichCombo('letterspacing', {
      label: '字距',
      title: 'Change letter-spacing',
      voiceLabel: 'Change letter-spacing',
      className: 'cke_format',
      multiSelect: false,

      panel: {
        css: [ CKEDITOR.skin.getPath( 'editor' ) ].concat( config.contentsCss )
      },

      init: function() {
      this.startGroup('letterspacing');
      for (var this_letting in trackings) {
        this.add(trackings[this_letting], trackings[this_letting], trackings[this_letting]);
      }
      },

      onClick: function(value) {
      editor.focus();
      editor.fire('saveSnapshot');
      var ep = editor.elementPath();
      var style = new CKEDITOR.style({styles: {'letter-spacing': value}});
      editor[style.checkActive(ep) ? 'removeStyle' : 'applyStyle' ](style);

      editor.fire('saveSnapshot');
      }
    });
  }
});
