const {app, Menu, Tray} = require('electron')
const path = require('path')
const axios = require('axios')
let tray = null
let iconPath = path.join(__dirname,'assets/icon.png');

const ticker = async(currency) => {
  let request = await axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
  return request.data.bpi[currency].rate
}

app.on('ready', () => {
  // set default currenty
  let currency = 'USD'

  app.dock.hide();

  tray = new Tray(iconPath)

  tray.setTitle("Updating...")

  const contextMenu = Menu.buildFromTemplate([{
      label: 'Bitcoin Status v1.0',
      type: 'normal',
      enabled: false
    },
    {
      type: 'separator'
    },
    {
      label: 'USD',
      type: 'radio',
      checked: true,
      click() {
        changeCurrency('USD')
      }
    },
    {
      label: 'EUR',
      type: 'radio',
      click() {
        changeCurrency('EUR')
      }
    },
    {
      label: 'GBP',
      type: 'radio',
      click() {
        changeCurrency('GBP')
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'Quit',
      accelerator: 'CommandOrControl+Q',
      click() {
        app.quit()
      }
    }
  ])

  const updatePrice = async() => {
    rate = await ticker(currency)
    switch (currency) {
      case 'USD':
        tray.setTitle(`$${rate}`)
        break;
      case 'EUR':
        tray.setTitle(`€${rate}`)
        break;
      case 'GBP':
        tray.setTitle(`£${rate}`)
        break;
    }
  }
  // First update
  updatePrice()

  // When currency is changed
  const changeCurrency = (newcurrency) => {
    currency = newcurrency
    updatePrice()
  }

  // update rates every 60 seconds
  setInterval(() => {
    updatePrice()
  }, 60000);

  tray.setToolTip('Bitcoin Status')
  tray.setContextMenu(contextMenu)
})