let $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});

$('.filter').on('change', function () {
    var filterValue = this.value;
    $grid.isotope({ filter: filterValue });
});
