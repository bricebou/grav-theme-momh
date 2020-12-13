var min = document.getElementsByName('header-fitted-min')[0].content;
var max = document.getElementsByName('header-fitted-max')[0].content;

if (window.innerWidth > min) {
  window.fitText( document.getElementById("site_title"), 1, { maxFontSize: max } );
}