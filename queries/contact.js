export default (lang) => `*[_type == "global"]{
  "contact": ${lang}.contact
}[0]`;
