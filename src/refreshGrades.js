function refreshGrades() {
    let currFinalGrade = 0

    let final = document.getElementById("finalGrade")

    final.value = parseInt(final.value);

    if(parseInt(final.value) > 100) final.value = 100;
    if(parseInt(final.value) < 0) final.value = 0;

    let targetGrade = parseInt(final.value) * 10;

    let grades = [
        document.getElementById("firstGrade"),
        document.getElementById("secondGrade"),
        document.getElementById("thirdGrade"),
        document.getElementById("fourthGrade"),
    ]

    let currBimesters = []

    for(let i of grades.keys()) {
        let currGrade = grades[i];

        if(currGrade.value.trim() !== '') {
            currGrade.value = parseInt(currGrade.value);

            if(parseInt(currGrade.value) > 100) currGrade.value = 100;
            if(parseInt(currGrade.value) < 0) currGrade.value = 0;

            currFinalGrade += parseInt(currGrade.value) * (i + 1);
        }
        else {
            currBimesters.push(i + 1)
        }
    }

    let currBimVal = 0

    for(let i of currBimesters) {
        currBimVal += i
    }

    for(let currGrade of grades) {
        console.log(currBimesters)
        console.log(currFinalGrade)
        currGrade.placeholder = Math.ceil((targetGrade - currFinalGrade) / currBimVal)
    }

    if(currBimVal === 0) {
        final.value = currFinalGrade / 10;
    }
}