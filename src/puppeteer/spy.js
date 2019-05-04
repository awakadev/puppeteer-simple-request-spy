const puppeteer = require('puppeteer')

puppeteer.launch({ headless: false }).then(async browser => {
  const page = await browser.newPage()
  await page.goto('http://localhost:8080/')
  page.on('response', response => {
    if (response.url().endsWith('https://randomuser.me/api/')) {
      response.text()
        .then(data => {
          console.log(data)
        })
    }
  })
  // await browser.close()
})
