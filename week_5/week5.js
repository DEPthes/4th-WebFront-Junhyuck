document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("search_button");
    const input = document.getElementById("cityInput");
    const result = document.getElementById("result");
    
    button.addEventListener("click", async() => {
        const city = input.value;
        if(!city) {
            result.innerText = "아무것도 입력하지 않으셨습니다❗️"
            return;
        }

        const response = await fetch(`https://goweather.xyz/weather/${city}`);
        const data = await response.json();

        result.innerHTML = `
        <p>🌡️ ${city}의 현재 기온: ${data.temperature}</p>
        <p>🌬️ ${city}의 바람 세기: ${data.wind}</p>
        <p>🌥️ ${city}의 기상상태: ${data.description}</p>
    `;
    });
});








