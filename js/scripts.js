(function ($, Drupal) {
  Drupal.behaviors.frontend_test = {
    attach: function (context, settings) {
      $('select', context).once('ui-selectmenu', function () {
        $(this).selectmenu();
      });
    }
  };
})(jQuery, Drupal);