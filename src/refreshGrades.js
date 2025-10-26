function calculateGrades() {
    let grades = [
        document.getElementById("firstGrade").value,
        document.getElementById("secondGrade").value,
        document.getElementById("thirdGrade").value,
        document.getElementById("fourthGrade").value,
    ]

    for(let currGrade of grades) {
        if(parseInt(currGrade) > 100) currGrade = 100;
        if(parseInt(currGrade) < 0) currGrade = 0;
    }

    console.log("Fuck you mama mia")
}