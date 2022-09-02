const puppeteer = require("puppeteer");
var robot = require("robotjs");

function wait(sec) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < sec*1000);
}

async function scrape(url) {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const navigationPromise = page.waitForNavigation({waitUntil: "domcontentloaded"});
    await page.goto(url);
    await navigationPromise;
    wait(25)
    console.log("waiting mudinchu vroo")
    await page.waitForSelector("._16C8p")
    console.log('valzkai aeeee')
    const target = await page.$("._16C8p");
    await target.click();
    await target.type("jason");
    console.log("waiting is over vro2")
  await page.waitForSelector('div._3OvU8 > div._3vPI2 > div.zoWT4 > span[title="jason"]')
    console.log('valzkai aeeee')
    const target2 = await page.$('div._3OvU8 > div._3vPI2 > div.zoWT4 > span[title="jason"]');
    console.log(target2.innerHTML)
    console.log(target2)
    await target2.click();
    console.log("waiting3 over")
    await page.waitForSelector('footer > div._2BU3P.tm2tP.copyable-area > div._1SEwr > span > div._6h3Ps > div._2lMWa > div.p3_M1 > div.g0rxnol2')
    const inp = await page.$("footer > div._2BU3P.tm2tP.copyable-area > div._1SEwr > span > div._6h3Ps > div._2lMWa > div.p3_M1 > div.g0rxnol2");
    console.log(inp)
    for (let i = 0; i < 100; i++) {
      await inp.type("hellow jasu kutti from wp api");
      await page.keyboard.press("Enter");
    }
    }

scrape("https://web.whatsapp.com");
