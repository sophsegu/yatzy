const DICE_FILENAME_PREFIX = "./assets/dice";
const IMG_FILE_EXTENSION = ".png";
const SELECTED_KEYWORD = "selected";
const BONUS = 50;
const MIN_SUM_FOR_BONUS = 63;

let rolls = 0;
var sum = 0;
var bonus = 0;
var total = 0;
var occurrences = {};
var bonusApplied = false;

var rollBtn = document.getElementById("rollButton");
var sumCell = document.getElementById("sumCell");
var bonusCell = document.getElementById("bonusCell");
var totalCell = document.getElementById("totalCell");

function onKeepDiceClicked(element) {

    if (rolls == 3) {
        return;
    }

    let diceImgFileName = element.src;
    let diceSide = element.alt;

    if (diceImgFileName.includes(SELECTED_KEYWORD)) { // un-keep
        element.src = DICE_FILENAME_PREFIX + diceSide + IMG_FILE_EXTENSION;
    }
    else if (rolls != 0) { // keep
        element.src = DICE_FILENAME_PREFIX + diceSide + SELECTED_KEYWORD + IMG_FILE_EXTENSION;
    }

    let allSelected = true;

    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (!position.src.includes(SELECTED_KEYWORD)) {
            allSelected = false;
        }
    }

    if (allSelected) {
        rollBtn.disabled = true;
    }
    else if (rollBtn.disabled) {
        rollBtn.disabled = false;
    }
}

function onNewGameClicked() {
    window.location.reload();
    console.log("HERE");
    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'onNewGameClicked'},
        success: function(data){
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
} 

function unSelectAllDice() {
    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.src.includes(SELECTED_KEYWORD)) {
            position.src = DICE_FILENAME_PREFIX + position.alt + IMG_FILE_EXTENSION;
        }
    }
}

function resetRolls() {
    rolls = 0;
    document.getElementById('turnCounter').textContent = 0;
    rollBtn.disabled = false;
}

function OnOnesClicked() {
    unSelectAllDice();

    let count = 0;

    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.alt == 1) {
            count++;
        }
    }

    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnOnesClicked', 'count': count},
        success: function(data){
            console.log('data ', data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("onesHeader");
            document.getElementById("onesCell").textContent = result.ones_score;
            headerCell.classList.remove("category-cell");
            headerCell.removeAttribute("onclick");
            document.getElementById("sumCell").textContent = result.sum;
            document.getElementById("totalCell").textContent = result.total;
            resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
}

function OnTwosClicked() {
    unSelectAllDice();

    let count = 0;

    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.alt == 2) {
            count++;
        }
    }

    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnTwosClicked', 'count': count},
        success: function(data){
            console.log('data ', data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("twosHeader");
            document.getElementById("twosCell").textContent = result.twos_score;
            headerCell.classList.remove("category-cell");
            headerCell.removeAttribute("onclick");
            document.getElementById("sumCell").textContent = result.sum;
            document.getElementById("totalCell").textContent = result.total;
            resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
}

function OnThreesClicked() {
    unSelectAllDice();

    let count = 0;

    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.alt == 3) {
            count++;
        }
    }

    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnThreesClicked', 'count': count},
        success: function(data){
            console.log('data ', data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("threesHeader");
            document.getElementById("threesCell").textContent = result.threes_score;
            headerCell.classList.remove("category-cell");
            headerCell.removeAttribute("onclick");
            document.getElementById("sumCell").textContent = result.sum;
            document.getElementById("totalCell").textContent = result.total;
            resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
}

function OnFoursClicked() {
    unSelectAllDice();

    let count = 0;

    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.alt == 4) {
            count++;
        }
    }

    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnFoursClicked', 'count': count},
        success: function(data){
            console.log('data ', data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("foursHeader");
            document.getElementById("foursCell").textContent = result.fours_score;
            headerCell.classList.remove("category-cell");
            headerCell.removeAttribute("onclick");
            document.getElementById("sumCell").textContent = result.sum;
            document.getElementById("totalCell").textContent = result.total;
            resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
}

function OnFivesClicked() {
    unSelectAllDice();

    let count = 0;

    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.alt == 5) {
            count++;
        }
    }

    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnFivesClicked', 'count': count},
        success: function(data){
            console.log('data ', data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("fivesHeader");
            document.getElementById("fivesCell").textContent = result.fives_score;
            headerCell.classList.remove("category-cell");
            headerCell.removeAttribute("onclick");
            document.getElementById("sumCell").textContent = result.sum;
            document.getElementById("totalCell").textContent = result.total;
            resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
}

function OnSixesClicked() {
    unSelectAllDice();

    let count = 0;

    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        if (position.alt == 6) {
            count++;
        }
    }

    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnSixesClicked', 'count': count},
        success: function(data){
            console.log('data ', data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("sixesHeader");
            document.getElementById("sixesCell").textContent = result.sixes_score;
            headerCell.classList.remove("category-cell");
            headerCell.removeAttribute("onclick");
            document.getElementById("sumCell").textContent = result.sum;
            document.getElementById("totalCell").textContent = result.total;
            resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
}

function OnOnePairClicked() {
    unSelectAllDice();
    
    var diceRolls = [];
    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        diceRolls[i] = position.alt;
    }
    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnOnePairClicked', 'diceRolls': diceRolls},
        success: function(data){
            console.log('data', data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("onePairHeader");
        document.getElementById("onePairCell").textContent = result.onepair_score;
        headerCell.classList.remove("category-cell");
        headerCell.removeAttribute("onclick");
        document.getElementById("totalCell").textContent = result.total;
        resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
}

function OnTwoPairClicked() {
    unSelectAllDice();
    countOccurrences();

    var diceRolls = [];
    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        diceRolls[i] = position.alt;
    }

    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnTwoPairClicked', 'diceRolls': diceRolls},
        success: function(data){
            console.log(data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("twoPairHeader");
    document.getElementById("twoPairCell").textContent = result.twopairs_score;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    document.getElementById("totalCell").textContent = result.total;
    resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
}

function OnThreeOfAKindClicked() {
    unSelectAllDice();

    var diceRolls = [];
    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        diceRolls[i] = position.alt;
    }

    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnThreeOfAKindClicked', 'diceRolls': diceRolls},
        success: function(data){
            console.log(data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("threeOfAKindHeader");
    document.getElementById("threeOfAKindCell").textContent = result.threekind_score;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    document.getElementById("totalCell").textContent = result.total;
    resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
}

function OnFourOfAKindClicked() {
    unSelectAllDice();

    var diceRolls = [];
    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        diceRolls[i] = position.alt;
    }

    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnFourOfAKindClicked', 'diceRolls': diceRolls},
        success: function(data){
            console.log(data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("fourOfAKindHeader");
    document.getElementById("fourOfAKindCell").textContent = result.fourkind_score;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    document.getElementById("totalCell").textContent = result.total;
    resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
}

function OnSmallStraightClicked() {
    unSelectAllDice();

    var diceRolls = [];
    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        diceRolls[i] = position.alt;
    }

    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnSmallStraightClicked', 'diceRolls': diceRolls},
        success: function(data){
            console.log(data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("smallStraightHeader");
    document.getElementById("smallStraightCell").textContent = result.smallstraight_score;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    document.getElementById("totalCell").textContent = result.total;
    resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
    
}

function OnLargeStraightClicked() {
    unSelectAllDice();

    var diceRolls = [];
    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        diceRolls[i] = position.alt;
    }

    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnLargeStraightClicked', 'diceRolls': diceRolls},
        success: function(data){
            console.log(data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("largeStraightHeader");
    document.getElementById("largeStraightCell").textContent = result.largestraight_score;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    document.getElementById("totalCell").textContent = result.total;
    resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
}

function OnFullHouseClicked() {
    unSelectAllDice();

    var diceRolls = [];
    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        diceRolls[i] = position.alt;
    }

    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnFullHouseClicked', 'diceRolls': diceRolls},
        success: function(data){
            console.log(data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("fullHouseHeader");
    document.getElementById("fullHouseCell").textContent = result.fullhouse_score;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    document.getElementById("totalCell").textContent = result.total;
    resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
    
}

function OnChanceClicked() {
    unSelectAllDice();

    var diceRolls = [];
    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        diceRolls[i] = position.alt;
    }

    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnChanceClicked', 'diceRolls': diceRolls},
        success: function(data){
            console.log(data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("chanceHeader");
    document.getElementById("chanceCell").textContent = result.chance_score;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    document.getElementById("totalCell").textContent = result.total;
    resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
    
}

function OnYatzyClicked() {
    unSelectAllDice();
    
    var diceRolls = [];
    for (let i = 0; i < 5; i++) {
        let position = document.getElementById(`position${i+1}`);
        diceRolls[i] = position.alt;
    }

    $.ajax({
        url: './assets/YatzyEngine.php',
        type: 'POST',
        data: { action: 'OnYatzyClicked', 'diceRolls': diceRolls},
        success: function(data){
            console.log(data);
            var result = JSON.parse(data);
            let headerCell = document.getElementById("yatzyHeader");
    document.getElementById("yatzyCell").textContent = result.yatzy_score;
    headerCell.classList.remove("category-cell");
    headerCell.removeAttribute("onclick");
    document.getElementById("totalCell").textContent = result.total;
    resetRolls();

        },
        error: function(jqXHR, textStatus, errorThrown){
            console.error('Error:', errorThrown);
        }
    });
}
