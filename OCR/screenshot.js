const {Cluster} = require("puppeteer-cluster");
const { loadURLs } = require('./user_models.js');

//import loadUser from './url.json' assert { type:'json' }

//const loadUser = require("./url.json")

//let urls = ["https://www.fsf.org/volunteer/"];

let urls = loadURLs();

(async () => {
  const cluster = await Cluster.launch({
    concurrency: Cluster.CONCURRENCY_PAGE,
    maxConcurrency: 2,
    puppeteerOptions: { headless: true, defaultViewport: false }
  });

  cluster.on("taskerror", (err, data) => {
    console.log(`Error crawling ${data}: ${err.message}`);
  });

  await cluster.task(async ({ page, data: allData}) => {
    await page.goto(allData[0], {
      waitUntil: "networkidle2",
    });
    await page.setUserAgent(
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
    );
      let name1 = allData[1].toString();
      let name2 = allData[2].toString();
      let name = name1+'.'+name2;
    // let name1 = urls.urls.indexOf(url);
    // let name2 = urls.urls.url.indexOf(urlInside);
    await page.screenshot({ path: `./download/${name}.png`, fullPage: true });
  });

  for (let index = 0; index<urls.length; index++) {
    x = Object.keys(urls[index]);
    for (let indexInside = 0; indexInside < urls[index][x].length; indexInside++){
      let url = urls[index][x][indexInside];
      allData = [url, index, indexInside];
      await cluster.queue(allData);
    }
  }

  await cluster.idle();
  await cluster.close();
})();

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
  
// }