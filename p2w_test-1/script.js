document.addEventListener('DOMContentLoaded', function() {
    const popupTrigger = document.querySelector('.popup-trigger');
    const popup = document.querySelector('.popup');
    const popupClose = document.querySelector('.popup__close');
    let countdownInterval = null;
    let gameCountdownIntervals = [];

    if (popupTrigger && popup && popupClose) {
        popupTrigger.addEventListener('click', function() {
            popup.classList.toggle('active');
            if (popup.classList.contains('active')) {
                popupTrigger.classList.add('active');
                if (!countdownInterval) {
                    startCountdown();
                    startGameCountdowns();
                }
            } else {
                popupTrigger.classList.remove('active');
                if (countdownInterval) {
                    clearInterval(countdownInterval);
                    countdownInterval = null;
                }
                clearGameCountdowns();
            }
        });

        popupClose.addEventListener('click', function() {
            popup.classList.remove('active');
            popupTrigger.classList.remove('active');
            if (countdownInterval) {
                clearInterval(countdownInterval);
                countdownInterval = null;
            }
            clearGameCountdowns();
        });

        document.addEventListener('click', function(event) {
            if (!popup.contains(event.target) && event.target !== popupTrigger) {
                popup.classList.remove('active');
                popupTrigger.classList.remove('active');
                if (countdownInterval) {
                    clearInterval(countdownInterval);
                    countdownInterval = null;
                }
                clearGameCountdowns();
            }
        });
    } else {
        console.error('One or more popup elements not found!');
    }

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.popup__tab-panel');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tab = this.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));

            this.classList.add('active');
            document.getElementById(tab).classList.add('active');
        });
    });

    function startCountdown() {
        const countdownElement = document.getElementById('countdown');
        let time = {
            days: 3,
            hours: 7,
            minutes: 34,
            seconds: 50
        };

        countdownInterval = setInterval(() => {
            time.seconds--;
            if (time.seconds < 0) {
                time.seconds = 59;
                time.minutes--;
                if (time.minutes < 0) {
                    time.minutes = 59;
                    time.hours--;
                    if (time.hours < 0) {
                        time.hours = 23;
                        time.days--;
                        if (time.days < 0) {
                            countdownElement.textContent = 'Time’s up!';
                            clearInterval(countdownInterval);
                            countdownInterval = null;
                            return;
                        }
                    }
                }
            }

            countdownElement.textContent = `${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`;
        }, 1000);
    }

    function startGameCountdowns() {
        const gameCountdowns = document.querySelectorAll('.game-countdown');
        gameCountdowns.forEach((countdown, index) => {
            let time = {
                days: 3,
                hours: 7,
                minutes: 34,
                seconds: 5
            };

            const interval = setInterval(() => {
                time.seconds--;
                if (time.seconds < 0) {
                    time.seconds = 59;
                    time.minutes--;
                    if (time.minutes < 0) {
                        time.minutes = 59;
                        time.hours--;
                        if (time.hours < 0) {
                            time.hours = 23;
                            time.days--;
                            if (time.days < 0) {
                                countdown.textContent = 'Time’s up!';
                                clearInterval(interval);
                                return;
                            }
                        }
                    }
                }

                countdown.textContent = `${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s`;
            }, 1000);

            gameCountdownIntervals[index] = interval;
        });
    }

    function clearGameCountdowns() {
        gameCountdownIntervals.forEach(interval => {
            if (interval) clearInterval(interval);
        });
        gameCountdownIntervals = [];
    }
});