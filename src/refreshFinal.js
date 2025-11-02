function refreshFinal() {
    getFinal().value = parseInt(getFinal().value);
    getFinal().value = Math.min(100, Math.max(0, getFinal().value));

    // just to be safe, it does all 4
    refreshAverages(1)
    refreshAverages(2)
    refreshAverages(3)
    refreshAverages(4)
}