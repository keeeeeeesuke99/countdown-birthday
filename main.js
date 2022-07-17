const now = new Date().getTime()

const birthday = {
    month: 3,
    day: 8
}

// 次の誕生日年を計算
const birthdayYear = () =>{
    const currentDate = new Date().getDate() + 1
    const currentMonth = new Date().getMonth() + 1
    const currentYear = new Date().getFullYear()
    return currentMonth < birthday.month ? currentYear
    : currentDate < birthday.day ? currentYear
    : currentYear + 1
}

const birthdayDate = new Date(birthdayYear(), birthday.month -1, birthday.day)

function calc(){
    const now = new Date().getTime()
    // 誕生日と現在のミリ秒数を計算
    const distance = birthdayDate - now

    const days = Math.floor(distance / (1000*60*60*24))
    const hours = Math.floor(distance % (1000*60*60*24) / (1000*60*60))
    const miniuts = Math.floor(distance % (1000*60*60) / (1000*60))
    const seconds = Math.floor(distance % (1000*60) / (1000))

    document.getElementById(`days`).innerHTML = `00${days}`.slice(-3)
    document.getElementById(`hours`).innerHTML = `0${hours}`.slice(-2)
    document.getElementById(`miniuts`).innerHTML = `0${miniuts}`.slice(-2)
    document.getElementById(`seconds`).innerHTML = `0${seconds}`.slice(-2)
}

calc()
setInterval(calc,1000)