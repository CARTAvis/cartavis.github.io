
        if (window.matchMedia('(prefers-color-scheme)').media === 'not all') {
          // alert('Your browser does not support the `prefers-color-scheme` media query.');
        }
        const picture = document.querySelectorAll('picture');
        const dark = picture.querySelectorAll('source[media="(prefers-color-scheme: dark)"]');
        const light = picture.querySelectorAll('source[media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)"]');

        const modeChange = (mode) => {
          if (mode === 'dark') {
                document.querySelectorAll(`picture > source[media*="(prefers-color-scheme: dark)"]`).forEach(el => {
                        const cloned = el.cloneNode();
                        cloned.removeAttribute('media');
                        cloned.setAttribute('data-cloned-theme', dark);
                        el.parentNode.prepend(cloned);

          } else {

                document.querySelectorAll(`picture > source[media*="(prefers-color-scheme: light)"]`).forEach(el => {
                        const cloned = el.cloneNode();
                        cloned.removeAttribute('media');
                        cloned.setAttribute('data-cloned-theme', light);
                        el.parentNode.prepend(cloned);

          }
        };

        document.addEventListener('colorschemechange', (e) => {
          modeChange(e.detail.colorScheme);
        });

        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        darkModeMediaQuery.addListener((e) => {
          if (e.matches) {
            modeChange('dark');
          } else {
            modeChange('light');
          }
        });
