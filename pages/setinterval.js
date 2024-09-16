const timer = (deadline) => {
    let time = deadline;
    console.log(time);
    const interval = setInterval(() => {
        time -= 1;
        console.log(time)
    }, 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log("time out!")
    }, deadline * 1000)
};

timer(5);