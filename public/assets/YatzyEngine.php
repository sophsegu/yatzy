<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

session_start();
$bonus = 50;
$MIN_SUM_FOR_BONUS = 63;

$_SESSION["ones_score"];
$_SESSION["twos_score"];
$_SESSION["threes_score"];
$_SESSION["fours_score"];
$_SESSION["fives_score"];
$_SESSION["sixes_score"];

$_SESSION["sum"];
$_SESSION["bonus"];
$_SESSION["bonus_applied"];

$_SESSION["onepair_score"];
$_SESSION["twopairs_score"];
$_SESSION["threekind_score"];
$_SESSION["fourkind_score"];
$_SESSION["smallstraight_score"];
$_SESSION["largestraight_score"];
$_SESSION["fullhouse_score"];
$_SESSION["chance_score"];
$_SESSION["yatzy_score"];

$_SESSION["total"];


function OnOnesClicked() {
    global $MIN_SUM_FOR_BONUS;
    global $bonus;
    $count = $_POST['count'];

    $result = $count;
    $_SESSION["sum"] += $result;
    $_SESSION["ones_score"] = $result;
    $_SESSION["total"] += $result;

    if($_SESSION["sum"] >= $MIN_SUM_FOR_BONUS &&
    !$_SESSION["bonus_applied"]){
        $_SESSION["bonus"] = $bonus;
        $_SESSION["total"] += $_SESSION["bonus"];
        $_SESSION["bonus_applied"] = true;
    }
}

function OnTwosClicked() {
    global $MIN_SUM_FOR_BONUS;
    global $bonus;
    $count = $_POST['count'];

    $result = $count*2;
    $_SESSION["sum"] += $result;
    $_SESSION["twos_score"] = $result;
    $_SESSION["total"] += $result;

    if($_SESSION["sum"] >= $MIN_SUM_FOR_BONUS &&
    !$_SESSION["bonus_applied"]){
        $_SESSION["bonus"] = $bonus;
        $_SESSION["total"] += $_SESSION["bonus"];
        $_SESSION["bonus_applied"] = true;
    }
}

function OnThreesClicked() {
    global $MIN_SUM_FOR_BONUS;
    global $bonus;
    $count = $_POST['count'];

    $result = $count*3;
    $_SESSION["sum"] += $result;
    $_SESSION["threes_score"] = $result;
    $_SESSION["total"] += $result;

    if($_SESSION["sum"] >= $MIN_SUM_FOR_BONUS &&
    !$_SESSION["bonus_applied"]){
        $_SESSION["bonus"] = $bonus;
        $_SESSION["total"] += $_SESSION["bonus"];
        $_SESSION["bonus_applied"] = true;
    }
}

function OnFoursClicked() {
    global $MIN_SUM_FOR_BONUS;
    global $bonus;
    $count = $_POST['count'];

    $result = $count*4;
    $_SESSION["sum"] +=  $result;
    $_SESSION["fours_score"] = $result;
    $_SESSION["total"] += $result;

    if($_SESSION["sum"] >= $MIN_SUM_FOR_BONUS &&
    !$_SESSION["bonus_applied"]){
        $_SESSION["bonus"] = $bonus;
        $_SESSION["total"] += $_SESSION["bonus"];
        $_SESSION["bonus_applied"] = true;
    }
}

function OnFivesClicked() {
    global $MIN_SUM_FOR_BONUS;
    global $bonus;
    $count = $_POST['count'];

    $result = $count*5;
    $_SESSION["sum"] += $result;
    $_SESSION["fives_score"] = $result;
    $_SESSION["total"] += $result;

    if($_SESSION["sum"] >= $MIN_SUM_FOR_BONUS &&
    !$_SESSION["bonus_applied"]){
        $_SESSION["bonus"] = $bonus;
        $_SESSION["total"] += $_SESSION["bonus"];
        $_SESSION["bonus_applied"] = true;
    }
}

function OnSixesClicked() {
    global $MIN_SUM_FOR_BONUS;
    global $bonus;
    $count = $_POST['count'];

    $result = $count*6;
    $_SESSION["sum"] += $result;
    $_SESSION["sixes_score"] = $result;
    $_SESSION["total"] += $result;

    if($_SESSION["sum"] >= $MIN_SUM_FOR_BONUS &&
    !$_SESSION["bonus_applied"]){
        $_SESSION["bonus"] = $bonus;
        $_SESSION["total"] += $_SESSION["bonus"];
        $_SESSION["bonus_applied"] = true;
    }
}

function OnOnePairClicked(){
    $diceRolls = $_POST['diceRolls'];

        foreach ($diceRolls as $i) {
            if (isset($occurrences[$i])) {
                $occurrences[$i]++;
            } else {
                $occurrences[$i] = 1;
            }
        }

        $resultKey = -1;

        foreach ($occurrences as $key => $value) {
            if ($value >= 2 && intval($key) > $resultKey) {
                $resultKey = $key;
            }
        }

        $result = 0;
    if ($resultKey != -1) {
        $result = 2 * intval($resultKey);
    }

    $_SESSION["total"] += $result;
    $_SESSION["onepair_score"] = $result;
       
}

function OnTwoPairClicked(){
    $diceRolls = $_POST['diceRolls'];

        foreach ($diceRolls as $i) {
            if (isset($occurrences[$i])) {
                $occurrences[$i]++;
            } else {
                $occurrences[$i] = 1;
            }
        }

        $resultKey = [];

        foreach ($occurrences as $key => $value) {
            if ($value >= 2) {
                array_push($resultKey, $key);
            }
        }

        $result = 0;
    if (count($resultKey) == 2) {
        $result = (2 * intval($resultKey[0])) + (2 * intval($resultKey[1]));
    }

    $_SESSION["total"] += $result;
    $_SESSION["twopairs_score"] = $result;
       
}

function OnThreeOfAKindClicked(){
    $diceRolls = $_POST['diceRolls'];

        foreach ($diceRolls as $i) {
            if (isset($occurrences[$i])) {
                $occurrences[$i]++;
            } else {
                $occurrences[$i] = 1;
            }
        }

        $resultKey = -1;

        foreach ($occurrences as $key => $value) {
            if ($value >= 3 && intval($key) > $resultKey) {
                $resultKey = $key;
            }
        }

        $result = 0;
    if ($resultKey != -1) {
        $result = 3 * intval($resultKey);
    }

    $_SESSION["total"] += $result;
    $_SESSION["threekind_score"] = $result;
}

function OnFourOfAKindClicked(){
    $diceRolls = $_POST['diceRolls'];

        foreach ($diceRolls as $i) {
            if (isset($occurrences[$i])) {
                $occurrences[$i]++;
            } else {
                $occurrences[$i] = 1;
            }
        }

        $resultKey = -1;

        foreach ($occurrences as $key => $value) {
            if ($value >= 4 && intval($key) > $resultKey) {
                $resultKey = $key;
            }
        }

        $result = 0;
    if ($resultKey != -1) {
        $result = 4 * intval($resultKey);
    }

    $_SESSION["total"] += $result;
    $_SESSION["fourkind_score"] = $result;
}

function OnSmallStraightClicked(){

    $diceRolls = $_POST['diceRolls'];

        foreach ($diceRolls as $i) {
            if (isset($occurrences[$i])) {
                $occurrences[$i]++;
            } else {
                $occurrences[$i] = 1;
            }
        }

    $result = 0;
if (isset($occurrences["1"]) 
    && isset($occurrences["2"])
    && isset($occurrences["3"])
    && isset($occurrences["4"])
    && isset($occurrences["5"])
) {
    $result = 15;
}

    $_SESSION["total"] += $result;
    $_SESSION['smallstraight_score'] = $result;

}

function OnLargeStraightClicked(){

    $diceRolls = $_POST['diceRolls'];

        foreach ($diceRolls as $i) {
            if (isset($occurrences[$i])) {
                $occurrences[$i]++;
            } else {
                $occurrences[$i] = 1;
            }
        }

    $result = 0;
if (isset($occurrences["6"]) 
    && isset($occurrences["2"])
    && isset($occurrences["3"])
    && isset($occurrences["4"])
    && isset($occurrences["5"])
) {
    $result = 15;
}

    $_SESSION["total"] += $result;
    $_SESSION['largestraight_score'] = $result;

}

function OnFullHouseClicked(){
    $diceRolls = $_POST['diceRolls'];

    foreach ($diceRolls as $i) {
        if (isset($occurrences[$i])) {
            $occurrences[$i]++;
        } else {
            $occurrences[$i] = 1;
        }
    }

    $result = 0;

    if(count($occurrences) == 2){
        foreach($occurrences as $key => $value){
            if($value == 3 ){
                $result += ($key * $value);
            }
            else if($value == 2){
                $result += ($key * $value);
            }
        }
    }

    $_SESSION['total'] += $result;
    $_SESSION['fullhouse_score'] = $result;
}

function OnChanceClicked(){

    $diceRolls = $_POST['diceRolls'];

    foreach ($diceRolls as $i) {
        if (isset($occurrences[$i])) {
            $occurrences[$i]++;
        } else {
            $occurrences[$i] = 1;
        }
    }

    $result = 0;

    foreach($occurrences as $key => $value){
        $result += $key * $value;
    }

    $_SESSION['total'] += $result;
    $_SESSION['chance_score'] = $result;
}

function OnYatzyClicked(){
    $diceRolls = $_POST['diceRolls'];

    foreach ($diceRolls as $i) {
        if (isset($occurrences[$i])) {
            $occurrences[$i]++;
        } else {
            $occurrences[$i] = 1;
        }
    }

    $result = 0;

    if(count($occurrences) == 1){
        $result = 50;
    }
    $_SESSION['total'] += $result;
    $_SESSION['yatzy_score'] = $result;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST'){
    if($_POST['action'] == 'OnOnesClicked'){
        OnOnesClicked();
        echo json_encode($_SESSION);
    }
    if($_POST['action'] == 'OnTwosClicked'){
        OnTwosClicked();
        echo json_encode($_SESSION);
    }
    if($_POST['action'] == 'OnThreesClicked'){
        OnThreesClicked();
        echo json_encode($_SESSION);
    }
    if($_POST['action'] == 'OnFoursClicked'){
        OnFoursClicked();
        echo json_encode($_SESSION);
    }
    if($_POST['action'] == 'OnFivesClicked'){
        OnFivesClicked();
        echo json_encode($_SESSION);
    }
    if($_POST['action'] == 'OnSixesClicked'){
        OnSixesClicked();
        echo json_encode($_SESSION);
    }
    if($_POST['action'] == 'onNewGameClicked'){
        $_SESSION["ones_score"] = 0;
        $_SESSION["twos_score"] = 0;
        $_SESSION["threes_score"] = 0;
        $_SESSION["fours_score"] = 0;
        $_SESSION["fives_score"] = 0;
        $_SESSION["sixes_score"] = 0;

        $_SESSION["sum"] = 0;
        $_SESSION["bonus"] = 0;
        $_SESSION["bonus_applied"] = false;

        $_SESSION["onepair_score"] = 0;
        $_SESSION["twopairs_score"] = 0;
        $_SESSION["threekind_score"] = 0;
        $_SESSION["fourkind_score"] = 0;
        $_SESSION["smallstraight_score"] = 0;
        $_SESSION["largestraight_score"] = 0;
        $_SESSION["fullhouse_score"] = 0;
        $_SESSION["chance_score"] = 0;
        $_SESSION["yatzy_score"] = 0;

        $_SESSION["total"] = 0;
    }
    if($_POST['action'] == 'OnOnePairClicked'){
        OnOnePairClicked();
        echo json_encode($_SESSION);
    }
    if($_POST['action'] == 'OnTwoPairClicked'){
        OnTwoPairClicked();
        echo json_encode($_SESSION);
    }
    if($_POST['action'] == 'OnThreeOfAKindClicked'){
        OnThreeOfAKindClicked();
        echo json_encode($_SESSION);
    }
    if($_POST['action'] == 'OnFourOfAKindClicked'){
        OnFourOfAKindClicked();
        echo json_encode($_SESSION);
    }
    if($_POST['action'] == 'OnSmallStraightClicked'){
        OnSmallStraightClicked();
        echo json_encode($_SESSION);
    }
    if($_POST['action'] == 'OnLargeStraightClicked'){
        OnLargeStraightClicked();
        echo json_encode($_SESSION);
    }
    if($_POST['action'] == 'OnFullHouseClicked'){
        OnFullHouseClicked();
        echo json_encode($_SESSION);
    }
    if($_POST['action'] == 'OnChanceClicked'){
        OnChanceClicked();
        echo json_encode($_SESSION);
    }
    if($_POST['action'] == 'OnYatzyClicked'){
        OnYatzyClicked();
        echo json_encode($_SESSION);
    }
}