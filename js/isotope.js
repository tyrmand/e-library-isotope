let $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});

$('.filter').on('change', function () {
    console.log($grid);
    var filterValue = this.value;
    $grid.isotope({ filter: filterValue });
});
