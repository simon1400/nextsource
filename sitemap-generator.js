require("babel-register")({
  presets: ["es2015", "react"]
});

const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

async function generateSitemap() {
  try{

    var path = './public/sitemap.xml'

    return (
      new Sitemap(router)
        .build("https://nextsource.io")
        .save(path)
    );
  }catch(e){
    console.log(e);
  }
}

generateSitemap();
