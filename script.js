window.addEventListener('scroll', function() {
    var tableContainer = document.getElementById('table-container');
    var documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    var maxHorizontalScroll = tableContainer.scrollWidth - tableContainer.clientWidth;
    var scrollY = window.scrollY || window.pageYOffset;
    var newHorizontalScroll = (scrollY / documentHeight) * maxHorizontalScroll;
    tableContainer.scrollLeft = newHorizontalScroll;
});
