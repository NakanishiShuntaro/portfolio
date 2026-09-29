// Register independently of DOMContentLoaded so the switch also works after late loading.
document.addEventListener('click', function(event) {
    if (event.target.closest('#light-toggle')) {
        toggleTheme(document.documentElement.getAttribute('data-theme'));
    }
});
