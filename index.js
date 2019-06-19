const quotes = [
  'Use HTML, CSS and JS like in 2008 and you will be using this top edge tool called browser',
  'Front-end dev is not only about SPA development',
  'Still waiting for Cobol in js',
  'Each time you use a !important flag, a designer dies.',
  'Functional vs oop is like choosing between ice cream and pizza, you will always want to eat both of them',
  'JS Stack is like penis, nice to have, but it is not nice to show everybody everywhere',
];

module.exports = function CssAndJsInHtml() {
  return [Math.floor(Math.random() * quotes.length)];
}
