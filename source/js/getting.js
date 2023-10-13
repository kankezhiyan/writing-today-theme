gettext = () => {
	const file = new Request("https://api.btstu.cn/yan/api.php?charset=utf-8&encode=json")
	fetch(file, {
		method: 'GET'
	}).then((res) => res.json()).then((data) => {
		let turth = document.querySelector("#turth")
		turth.innerHTML = '「 ' + data.text + ' 」'
	}).catch(() => { })
}

gettoday = () => {
	const file = new Request("https://www.mxnzp.com/api/history/today?type=0&app_id=9ihnlkkoncgpgjqp&app_secret=HUYArsgkw8WqtfaXxcWvm6uHiTcGVg0J")
	fetch(file, {
		method: 'GET'
	}).then((res) => res.json()).then((data) => {
		let history = document.querySelector("#history"),
			dataList = data.data,
			dataLength = dataList.length,
			lastItem = []

		if (dataLength > 10) {
			for (i = 0; i < 10; i++) {
				let newItem = ~~(Math.random() * dataLength)

				while (1) {
					if (lastItem.includes(newItem)) {
						newItem = ~~(Math.random() * dataLength)
					}
					else { break }
				}
				lastItem.push(newItem)
				history.innerHTML += `<ul class="histroy_list"><li>${dataList[newItem].year}年${dataList[newItem].month}月${dataList[newItem].day}日：</li><li>${dataList[newItem].title}；</li></ul>`
			}
		}
		else {
			for (i = 0; i < 10; i++) {
				history.innerHTML += `<ul class="histroy_list"><li>${dataList[newItem].year}年${dataList[newItem].month}月${dataList[newItem].day}日：</li><li>${dataList[newItem].title}；</li></ul>`			}
		}
	}).catch(() => { })
}

gettext()
gettoday()