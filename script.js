function showReport() {
    // Get form values
    var patientName = document.getElementById("patientName").value;
    var ageInYears = document.getElementById("ageInYears").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var visitDate = document.getElementById("visitDate").value;
    var referredByDr = document.getElementById("refferedByDr").value;
    var fastingBloodSugar = document.getElementById("fastingBloodSugar").value;
    var postLanchBloodSugar = document.getElementById("postLanchBloodSugar").value;

     // Format the visit date as dd/mm/yyyy
     if (visitDate) {
        var visitDateObj = new Date(visitDate);
        var day = ("0" + visitDateObj.getDate()).slice(-2);
        var month = ("0" + (visitDateObj.getMonth() + 1)).slice(-2);
        var year = visitDateObj.getFullYear();
        visitDate = day + "/" + month + "/" + year;
    }

    // Set report values
    document.getElementById("reportPatientName").innerText = patientName;
    document.getElementById("reportAgeGender").innerText = ageInYears + "/" + gender;
    document.getElementById("reportVisitDate").innerText = visitDate;
    document.getElementById("reportDr").innerText = referredByDr;
    document.getElementById("reportFastingBloodSugar").innerText = fastingBloodSugar;
    document.getElementById("reportPostLanchBloodSugar").innerText = postLanchBloodSugar;

    // Show the report section
    document.getElementById("reportSection").style.display = "block";
}

function printReport() {

    showReport()

    // Print the report
    window.print();
}
