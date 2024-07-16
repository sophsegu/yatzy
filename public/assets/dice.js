function onRollClick() {
    let rolled = false;
    for (let i = 0; i<5; i++) {

        let position = document.getElementById(`position${i+1}`);
        let isSelected = position.src.includes("selected");

        if(!isSelected && rolls < 3){
            let roll = Math.floor(Math.random() * 6) + 1;
            position.src = `./assets/dice${roll}.png`;
            position.alt = roll;
            rolled = true;
        }
    }

    if (rolled) {
        rolls++;
        document.getElementById('turnCounter').textContent = rolls;
        if (rolls == 3) {
            rollBtn.disabled = true;
        }
    }
}