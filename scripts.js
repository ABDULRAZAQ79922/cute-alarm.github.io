document.addEventListener('DOMContentLoaded', () => {
    const cuteTimeElement = document.getElementById('cute-time');
    const cuteSetAlarmBtn = document.getElementById('cute-set-alarm-btn');
    const cuteAlarmTime = document.getElementById('cute-alarm-time');
    const cuteAlarmSound = document.getElementById('cute-alarm-sound');
    const cuteTimeLeftElement = document.getElementById('cute-time-left');
    let cuteAlarmTimeValue = null;

    function updateCuteTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        cuteTimeElement.textContent = `${hours}:${minutes}:${seconds}`;

        if (cuteAlarmTimeValue) {
            const alarmTime = new Date();
            const [alarmHours, alarmMinutes] = cuteAlarmTimeValue.split(':');
            alarmTime.setHours(alarmHours, alarmMinutes, 0, 0);

            const timeLeft = alarmTime - now;
            if (timeLeft > 0) {
                const hoursLeft = Math.floor(timeLeft / 3600000).toString().padStart(2, '0');
                const minutesLeft = Math.floor((timeLeft % 3600000) / 60000).toString().padStart(2, '0');
                const secondsLeft = Math.floor((timeLeft % 60000) / 1000).toString().padStart(2, '0');
                cuteTimeLeftElement.textContent = `Time left for alarm: ${hoursLeft}:${minutesLeft}:${secondsLeft}`;
            } else {
                cuteAlarmSound.play();
                cuteAlarmTimeValue = null; 
                cuteTimeLeftElement.textContent = '';
            }
        }
    }

    cuteSetAlarmBtn.addEventListener('click', () => {
        cuteAlarmTimeValue = cuteAlarmTime.value;
        if (cuteAlarmTimeValue) {
            alert(`Cute alarm set for ${cuteAlarmTimeValue}`);
        }
    });

    setInterval(updateCuteTime, 1000);
});
