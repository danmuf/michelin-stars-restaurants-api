# Michelin Stars Restaurants Scraper and API

This scraper is an extension/fork of https://github.com/NicolaFerracin/michelin-stars-restaurants-api.

It contains adaptions to the german Michelin website https://guide.michelin.com/de/de/restaurants/.
In addition, CSV export is added and parsing of some additional data.

## Execution

First, install dependencies using ``npm i``. Afterwards, run ```npm run run``` (this will take some time).
Then you can find a file called ``restaurants.csv`` where the scraped data is included.

Remark: the number of scraped restaurants can vary because the Michelin website is updated
from time to time (and restaurants are closed or opened). In general, there should be around 1450 - 1500 restaurants.
