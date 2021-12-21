const showTime = () => {
    const date = new Date();

    const normalize = (num) => (num.toString().length > 1 ? num : `0${num}`);
    const time = `${normalize(date.getHours())}:${normalize(date.getMinutes())}`;
    const el = `<p>${time}</p>`;
    return time;
}

export default showTime;