setInterval(() => {
    const clock = document.getElementById('clock')
    const dayDisplay = document.getElementById('day')
    const month = document.getElementById('month')
    const year = document.getElementById('year')
    const dateDisplay = document.getElementById('date')
  
    // Getting Time
    const date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()

    if (hours < 12) {
        document.getElementById('amOrpm').innerHTML = 'AM'
      } else {
        document.getElementById('amOrpm').innerHTML = 'PM'
        hours = hours - 12
      }
  
    if (hours <= 9) {
        hours = `0${hours}`
    }

    if (minutes <= 9) {
      minutes = `0${minutes}`
    }
    let seconds = date.getSeconds()
    if (seconds <= 9) {
      seconds = `0${seconds}`
    }
  
    // Month & Year
  
    const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  
    const cMonth = monthName[date.getMonth() + 1]
    const cYear = date.getFullYear()
  
    // Days
  
    const day = date.getDay()
  
    const dayDate = date.getDate()
  
    const daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  

  
    // Display Clock
    clock.innerHTML = `${hours}:${minutes}:${seconds}`
  
    // Display Day
    dayDisplay.innerHTML = daysName[day]
  
    // Display Date
    dateDisplay.innerHTML = dayDate
    // Display Month
    month.innerHTML = cMonth
    // Display Year
    year.innerHTML = `${cYear}`
  }, 1000)