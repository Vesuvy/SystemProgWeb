function counter(n) {
    let currentCount = n;

    function countDown() {
        console.log(currentCount);
        if (currentCount === 0) {
            clearInterval(intervalId);
        }
        currentCount--;
    }

    const intervalId = setInterval(countDown, 1000);
}

function createCounter(n) {
    let currentCount = n;
    let intervalId;

    return {
        start() {
            console.log(currentCount);
            intervalId = setInterval(() => {
                currentCount--;
                if (currentCount >= 0) {
                    console.log(currentCount);
                } else {
                    clearInterval(intervalId);
                }
            }, 1000);
        },
        pause() {
            clearInterval(intervalId);
        },
        stop() {
            clearInterval(intervalId);
            currentCount = n;
        }
    };
}

// Примеры:

 counter(5); // от n до 0 раз в секунду

const myCounter = createCounter(5);
myCounter.start(); // Запускает счетчик
// Через какое-то время:
// myCounter.pause(); // Приостанавливает счетчик
// myCounter.start(); // Возобновляет счетчик
// Через какое-то время:
// myCounter.stop(); // Останавливает счетчик
// myCounter.start(); // Запускает счетчик сначала
