function refreshGrades(bimNumber) {
    let bimester = getBimester(bimNumber);

    for(let grade of bimester["grades"]) {
        grade.value = parseInt(grade.value);
        grade.value = Math.min(100, Math.max(0, parseInt(grade.value)));
    }

    if(bimester["grades"][0].value && bimester["grades"][1].value && bimester["grades"][2].value) {
        refreshAverages(bimNumber)
    } else {
        //being set mode: will be set by the average, instead of the opposite
        let currFinalGrade = 0
        let gradeCount = 0;

        for(grade of bimester["grades"]) {
            if(grade.value) {
                gradeCount++;
                currFinalGrade += parseInt(grade.value);
            }
        }

        let totalGrades = 3

        if(!bimester["grades"][3].value) {
            bimester["grades"][3].placeholder = '';
        } else {
            totalGrades = 4;
        }

        let targetAverage;

        if(!bimester["average"].value) bimester["average"].value = bimester["average"].placeholder;

        targetAverage = parseInt(bimester["average"].value)

        for(let i = 0; i < totalGrades; i++) {
            if(!bimester["grades"][i].value) {
                bimester["grades"][i].placeholder = Math.ceil((
                    targetAverage * totalGrades - currFinalGrade
                ) / (totalGrades - gradeCount));
            }
        }
    }
}