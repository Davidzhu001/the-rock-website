// The R.O.C.K. - custom scripts
(function () {
      var toggler = document.querySelector('.navbar-toggler');
      var menu = document.getElementById('mainNav');
      if (!toggler || !menu) return;
      toggler.addEventListener('click', function () {
        var open = menu.classList.toggle('show');
        toggler.setAttribute('aria-expanded', String(open));
      });
      menu.addEventListener('click', function (event) {
        if (event.target.closest('a') && window.innerWidth < 992) {
          menu.classList.remove('show');
          toggler.setAttribute('aria-expanded', 'false');
        }
      });
    }());
