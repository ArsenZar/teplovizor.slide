import softScrollSlider from 'soft-scroll-slider';

softScrollSlider({
  container: '.container',
  moreSection: '.moreSection',
  colors: ['#color1', '#color2', '#color3'],
  contents: {
    0: '<p>Hello</p>',
    1: '<p>HTML for section 1</p>',
    2: '<p>HTML for section 2</p>',
  }
});