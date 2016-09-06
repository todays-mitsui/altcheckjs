(function() {
  const rclass = 'JQNnYJYyC5KtTj4UNhg9fjpV59s9fnLmZm'
  if (!!document.querySelector('.'+rclass)) { return }

  const imgs = document.querySelectorAll('img')
  if (!imgs) { return }

  var container = document.createElement('div')
  document.body.appendChild(container)
  container.setAttribute('class', rclass)
  container.setAttribute('style', [
    'position: absolute;',
    'top: 0;',
    'left: 0;',
    'z-index: 999999999;',
    'width: 100%;',
    'min-height: 100%;',
    'padding: 20px 50px;',
    'background: rgba(0,0,0,.4);',
    'box-sizing: border-box;',
  ].join(''))
  container.setAttribute('title', 'ダブルクリックでaltチェックを閉じる')
  container.addEventListener('dblclick', (e) => {
    document.body.removeChild(container)
  }, false)

  let table = document.createElement('table')
  container.appendChild(table)
  table.setAttribute('style', [
    'width: 100%;',
    'border-collapse: collapse;',
    'border: 8px solid #fff;',
    'box-sizing: border-box;',
    'box-shadow: 0 0 10px 6px rgba(0,0,0,.2);',
    'background: #fff;',
  ].join(''))

  imgs.forEach((img, index) => {
    let tr = document.createElement('tr')
    table.appendChild(tr)
    if (0 === index % 2) {
      tr.setAttribute('style', 'background-color: #f8f8f8;')
    } else {
      tr.setAttribute('style', 'background-color: #f2f2f2;')
    }

    let ltd = document.createElement('td')
    tr.appendChild(ltd)
    ltd.setAttribute('style', [
      'width: 70%;',
      'padding: 8px;',
      'border-bottom: 2px solid #fff;',
      'border-right: 2px solid #fff;',
      'text-align: right;',
    ].join(''))

    let clone = document.createElement('img')
    ltd.appendChild(clone)
    clone.setAttribute('src', img.getAttribute('src'))
    clone.setAttribute('alt', img.getAttribute('alt'))
    clone.setAttribute('style', [
      'display: inline;',
      'max-width: 100%;',
      'opacity: 1;',
    ].join(''))

    let rtd = document.createElement('td')
    tr.appendChild(rtd)
    rtd.setAttribute('style', [
      'width: 30%;',
      'padding: 8px;',
      'border-bottom: 2px solid #fff;',
      'text-align: left;',
      'color: #000;',
      'font-family: Arial, sans-serif;',
      'font-size: 14px;',
    ].join(''))
    const alt = img.getAttribute('alt')
    if ('[object Null]' === toString.call(alt)) {
      rtd.style.color = '#fff'
      rtd.style.backgroundColor = '#f00'
      rtd.style.fontStyle = 'italic'
      rtd.textContent = '![alt属性なし]'
    } else if (!alt) {
      rtd.style.fontStyle = 'italic'
      rtd.textContent = '[空文字列]'
    } else {
      rtd.textContent = img.getAttribute('alt')
    }
  })

  window.scrollTo(0, 0)
})()
