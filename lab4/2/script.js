function delay(N) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, N * 1000);
    });
}

async function countDown(N) {
    for (let i = N; i >= 0; i--) {
        console.log(i);
        await delay(1);
    }
}

async function getFirstRepository(username) {
    try {
        const userResponse = await fetch(`https://api.github.com/users/${username}`); // Отправка запроса к указанному URL. Пока не вернется ответ на запрос
        const userData = await userResponse.json(); // Преобразование в json
        const reposUrl = userData.repos_url;

        const reposResponse = await fetch(reposUrl); // Отправка запроса по ссылке на репозиторий пользователя
        const reposData = await reposResponse.json(); 

        // есть ли у юзера репозитории
        if (reposData.length > 0) {
            return reposData[0].name;
        } else {
            throw new Error("No repositories found");
        }
    } catch (error) {
        console.error("Error:", error.message);
    }
}

async function runTasks() {
    await countDown(5); // ждем, пока не завершится
    
    const repositoryName = await getFirstRepository("VESUVY");
    console.log("First repository:", repositoryName);
}

runTasks();
