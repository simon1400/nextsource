export default (lang) => `*[_type == "global"]{
  "contact": ${lang}.contact.tel
}[0]`;
