const html = require('choo/html')
const css = require('sheetify')
const WebTorrentComponent = require('webtorrent-element')
let elem = new WebTorrentComponent()
elem.src = 'magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent'
elem.file = 'Sintel.mp4'
elem.style.width = '400px'
const TITLE = 'Choo Torrent'

const body = css`:host {
  height: 100vh;
  margin: 10 10 10 10;
  background-color: #F6C3CC;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 10px 10px 10px 10px;
  text-align: center ;
}`

const content = css`:host web-torrent video {
  width: 80vw;
  bottom: 20px;
}`

const title = css`:host {
  margin: 45px;
  font-family: Arial;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
}`

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)
  return html`
    <body class=${body}>
      <div class=${title}>
        <a href="https://choo.io/">Choo 🚂🚋🚋🚋</a> +
        <a href="https://github.com/mikeal/webtorrent-element">mikeal/webtorrent-element</a>
      </div>
      <div class=${content}>
        ${elem}
      </div>

    </body>
  `
}

module.exports = view
