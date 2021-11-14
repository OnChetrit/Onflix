export function ShowTimeCmp() {
    let date = new Date(Date.now())
    let time = date.toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit'});
    let season = null;
    switch (date.getMonth()+1) {
        case 1:
        case 2:
        case 12:
            season = 'winter'
            break;
        case 3:
        case 4:
        case 5:
            season = 'spring'
            break;
        case 6:
        case 7:
        case 8:
            season = 'summer'
            break;
        case 9:
        case 10:
        case 11:
            season = 'autumn'
            break;
    
        default:
            break;
    }
    let src = `assets/img/${season}.png`
        return (
            <div className="show-time">
                <img src={src} alt="season" />
                <div className="time">{time}</div>
            </div>
        )
}