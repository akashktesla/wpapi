const puppeteer = require("puppeteer");
function wait(sec) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < sec*1000);
}

(async ()=> {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto("https://web.whatsapp.com");
    wait(25)
    console.log("waiting is over")

    const testing = await page.evaluate(()=>{
        const txt = document.querySelector("._16C8p");

        return txt.innerHTML;
    }); 
   console.log(testing);

})();
