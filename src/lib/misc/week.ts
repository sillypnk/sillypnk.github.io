document.addEventListener('astro:page-load', () => {
    // Week
    const gifSrc = [
        // Sunday (0)
        'https://c.tenor.com/WCnb8Ptvb-cAAAAd/tenor.gif',
        // Monday
        'https://c.tenor.com/KB9QsiZ6jNsAAAAC/tenor.gif',
        // Tuesday
        'https://c.tenor.com/20QjCMyCnxUAAAAd/tenor.gif',
        // Wednesday
        'https://c.tenor.com/Sv-T18uqxKQAAAAC/tenor.gif',
        // Thursday
        'https://c.tenor.com/45gieG3g4Q4AAAAd/tenor.gif',
        // Friday
        'https://c.tenor.com/doMpgLsrJTYAAAAd/tenor.gif',
        // Saturday (6)
        'https://c.tenor.com/xjW8Qx3R028AAAAC/tenor.gif',
    ]

    const date = new Date()
    const currentDay = date.getDay()

    const img = document.createElement('img')
    img.setAttribute('src', gifSrc[currentDay])
    img.setAttribute('alt', 'Adachi Rei Weekly Schedule')
    img.setAttribute('style', 'max-width: 100%; width: 90%;')

    const adachiWeekContainer = document.querySelector(
        '#adachiRei-day',
    ) as HTMLElement
    if (adachiWeekContainer) adachiWeekContainer.appendChild(img)

    // Date
    const adachiDate = document.querySelector('#adachiRei-date') as HTMLElement
    if (adachiDate)
        adachiDate.innerHTML = new Intl.DateTimeFormat(navigator.language, {
            dateStyle: 'medium',
        }).format(date)

    // Live update clock
    const adachiTime = document.querySelector('#adachiRei-time') as HTMLElement
    const formatter = new Intl.DateTimeFormat(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    })
    let updateClock = () => {
        const now = new Date()
        if (adachiTime) adachiTime.textContent = formatter.format(now)
    }
    setInterval(updateClock, 1000)
    updateClock()
})
