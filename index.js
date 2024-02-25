function isWin (element) {
    return element.result === "W";
}


function superbowlWin(recordSheet) {
    const winners = recordSheet.find(isWin);
    return winners ? winners.year : undefined;
}