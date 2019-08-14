export default () => {
    const deviceWidth = document.documentElement.clientWidth
    if (deviceWidth > 750) deviceWidth = 7.5 * 50
    
    document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px'
    
    document.documentElement.addEventListener('touchstart', event => {
        if (event.touches.length > 1) event.preventDefault()
    }, false)

    let lastTouchEnd = 0
    document.documentElement.addEventListener('touchend', event => {
        let now = Date.now()
        if (now - lastTouchEnd <= 300) event.preventDefault()
        lastTouchEnd = now
    }, false)
}