# Components for Philco site

The following components are expected to be used in the Philco website, and will need re-themeing to fit the design
there. Those that we have developed are marked with [✓]

- [biggive-page-section](../src/components/biggive-page-section/readme.md) [ ]
- [biggive-button](../src/components/biggive-button/readme.md) [✓]
- [biggive-quote](../src/components/biggive-quote/readme.md) [ ]
- [biggive-basic-card](../src/components/biggive-basic-card/readme.md) [ ]
- [biggive-text-input](../src/components/biggive-text-input/readme.md) [✓]

For biggive-page the change needed is just allowing use of the Philco colours (which is already done within the library
generally), and allowing an angled top and bottom border. May be able to copy MIT licenced code for that from
https://github.com/NigelOToole/angled-edges/blob/master/assets/styles/angled-edges.scss (found via
https://kilianvalkhof.com/2017/design/sloped-edges-with-consistent-angle-in-css/).

There are also some new components built or required specifically for philco:

- [philco-main-menu](../src/components/philco-main-menu/readme.md) [✓]
- [philco-footer](../src/components/philco-footer/readme.md) [✓]

And others still to build include:
- Checkbox (but will likely be built in WP rather than here)

# Testing

To test all philco components together on a page on a dev machine, `npm run start` and visit http://localhost:3939/pages/philco.html
