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