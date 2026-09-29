$(document).ready(function() {
  // Init Masonry
  var $grid = $('.grid:not(.project-grid)').masonry({
    gutter: 10,
    horizontalOrder: true,
    itemSelector: '.grid-item',
    fitWidth: true,
  });
  // Layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
});
