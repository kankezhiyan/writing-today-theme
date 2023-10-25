gettext = () => {
	const file = new Request("https://api.btstu.cn/yan/api.php?charset=utf-8&encode=json")
	fetch(file, {
		method: 'GET'
	}).then((res) => res.json()).then((data) => {
		let turth = document.querySelector("#turth")
		turth.innerHTML = '「 ' + data.text + ' 」'
	}).catch(() => { })

	// const file = new Request("https://api.shadiao.pro/du")
	// fetch(file, {
	// 	method: 'GET'
	// }).then((res) => res.json()).then((data) => {
	// 	let turth = document.querySelector("#turth")
	// 	turth.innerHTML = '「 ' + data.data.text + ' 」'
	// }).catch(() => { })
}

getcomment = () => {
	const file = new Request("https://tenapi.cn/v2/comment")
	fetch(file, {
		method: 'GET'
	}).then((res) => res.json()).then((data) => {
		let info = document.querySelector("#music-info"),
			comment = document.querySelector("#music-comment"),
			by = document.querySelector("#comment-by"),
			datachild = data.data

		info.innerHTML = `<div class="cover"><img src="${datachild.cover}"><audio id="songs" src="https://api.injahow.cn/meting/?type=url&id=${datachild.id}"></audio><div id="play-button" class="music-button"><i class="fa fa-play-circle-o"></i></div><div id="pause-button" class="music-button" style="display:none;"><i class="fa fa-pause-circle-o"></i></div></div><div class="info"><p>${datachild.songs}</p><p>${datachild.sings}</p></div>`
		comment.innerHTML = datachild.comment
		by.innerHTML = 'by - ' + datachild.name
		audiostate()
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
				history.innerHTML += `<ul class="histroy_list"><li>${dataList[newItem].year}年${dataList[newItem].month}月${dataList[newItem].day}日：</li><li>${dataList[newItem].title}；</li></ul>`
			}
		}
	}).catch(() => { })
}

reflash = () => {
	let reflash = document.getElementById('reflash')
	reflash.addEventListener('click', () => {
		location.reload()
	})
}

audiostate = () => {
	let play_button = document.getElementById('play-button'),
		pause_button = document.getElementById('pause-button'),
		songs = document.getElementById('songs')
	play_button.addEventListener('click', () => {
		songs.play()
		play_button.style.setProperty('display', 'none')
		pause_button.style.setProperty('display', 'block')
	})
	pause_button.addEventListener('click', () => {
		songs.pause()
		play_button.style.setProperty('display', 'block')
		pause_button.style.setProperty('display', 'none')
	})
	songs.addEventListener('ended', () => {
		play_button.style.setProperty('display', 'block')
		pause_button.style.setProperty('display', 'none')
	})
}

gettext()
getcomment()
gettoday()
reflash()