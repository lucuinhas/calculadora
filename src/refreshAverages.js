function refreshAverages(bimNumber) {
    let bimester = getBimester(bimNumber);
    let average = bimester["average"]

    // just to see if it's desyncing with the grades
    // but it's a lot of code, might abstract it later
    if(bimester["grades"][0].value && bimester["grades"][1].value && bimester["grades"][2].value) {
        if(bimester["grades"][3].value) {
            //just for the optional 4th grade

            currBimAverage = Math.floor((
                parseInt(bimester["grades"][0].value) +
                parseInt(bimester["grades"][1].value) +
                parseInt(bimester["grades"][2].value) +
                parseInt(bimester["grades"][3].value)
            ) / 4
            )
        } else {
            currBimAverage = Math.floor((
                parseInt(bimester["grades"][0].value) +
                parseInt(bimester["grades"][1].value) +
                parseInt(bimester["grades"][2].value)
            ) / 3
            )
        }

        average.value = currBimAverage;
    } else {
        refreshGrades(bimNumber);

        if(average.value) {
            average.value = parseInt(average.value);
            average.value = Math.min(100, Math.max(0, average.value));
        }
    }

    let currWeights = 0;
    let currFinal = 0;

    let averages = getAllAverages();

    for(let i = 0; i < 4; i++) {
        if(averages[i].value) currFinal += parseInt(averages[i].value) * (i + 1);
        else currWeights += i + 1;
    }

    if(currWeights === 0) {
        getFinal().value = Math.floor(currFinal / 10);
    } else {
        let targetGrade = parseInt(getFinal().value) * 10;

        for (let currAverage of averages) {
            if (!currAverage.value) {
                currAverage.placeholder = Math.ceil((targetGrade - currFinal) / currWeights)
            }
        }
    }
}