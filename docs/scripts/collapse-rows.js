document.addEventListener("DOMContentLoaded", function () {
    const collapsibleRows = document.querySelectorAll('.collapsible-row');

    collapsibleRows.forEach(function (row) {
        row.addEventListener('click', function () {
            const contentRow = this.nextElementSibling;
            if (contentRow.style.display === "table-row") {
                contentRow.style.display = "none";
            } else {
                contentRow.style.display = "table-row";
            }
        });
    });
});
