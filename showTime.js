const showTime = () => {
    const date = new Date();

    const normalize = (num) => (num.toString().length > 1 ? num : `0${num}`);
    const time = `${normalize(date.getHours())}:${normalize(date.getMinutes())}`;
    // let hours = date.getHours();
    // let minutes = date.getMinutes();
    // if (hours < 10) {
    //     hours = `0${hours}`
    // }
    // if (minutes < 10) {
    //     minutes = `0${minutes}`
    // }
    // const timeEvent = hours + ':' + minutes;
    const el = `<p>${time}</p>`;
    return time;
}

export default showTime;