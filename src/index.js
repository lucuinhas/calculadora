function getBimester(bimester) {
    return {
        "average" : document.getElementById("average" + bimester),
        "grades" : [
            document.getElementById("bim" + bimester + "G1"),
            document.getElementById("bim" + bimester + "G2"),
            document.getElementById("bim" + bimester + "G3"),
            document.getElementById("bim" + bimester + "G4")
        ]
    }
}

function getAverage(bimester) {
    return document.getElementById("average" + bimester);
}

function getAllAverages() {
    return [
        document.getElementById("average1"),
        document.getElementById("average2"),
        document.getElementById("average3"),
        document.getElementById("average4"),
    ]
}

function getFinal() {
    return document.getElementById("finalGrade");
}

let weights = [1, 2, 3, 4]