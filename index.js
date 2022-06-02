const PORT = 8000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

const app = express()

const url = 'https://www.theguardian.com/uk'

axios(url)
    .then(response => {
        const data = response.data
        const $ = cheerio.load(data)
        const results = []
        $('.fc-item__title', data).each(function(){
            const title = $(this).text()
            const url = $(this).find('a').attr('href')
            results.push({
                title,
                url
            })
        })
        console.log(results)
    }).catch(err => console.log(err))


app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`))
