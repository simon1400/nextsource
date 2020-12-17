export default `*[_type == "homepage"]{
  title,
  label,
  content,
  services,
  why,
  meta
}[0...1]`
