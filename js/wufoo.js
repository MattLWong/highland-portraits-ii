
export const wufoo = function() {
  var ze82gxh0y1akbl;
  (function(d, t) {
  var s = d.createElement(t), options = {
  'userName':'mwong9968',
  'formHash':'ze82gxh0y1akbl',
  'autoResize':true,
  'height':'517',
  'async':true,
  'host':'wufoo.com',
  'header':'show',
  'ssl':true};
  s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
  s.onload = s.onreadystatechange = function() {
  var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
  try { ze82gxh0y1akbl = new WufooForm();ze82gxh0y1akbl.initialize(options);ze82gxh0y1akbl.display(); } catch (e) {}};
  var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
  })(document, 'script');

}
