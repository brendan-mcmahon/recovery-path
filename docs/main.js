if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

function calculateArea(index) {
    var length = document.getElementById(`length${index}`).value;
    var width = document.getElementById(`width${index}`).value;

    var area = length * width;
    document.getElementById(`area${index}`).innerHTML =
      length && width ? +area.toFixed(2) + " cm&sup2;" : "cm&sup2;";
    return area;
  }

window.calculate = function() {
    var area1 = calculateArea(1);
    var area2 = calculateArea(2);

    if (area1 && area2) {
      var difference = Math.abs(area1 - area2);
      var percentageDifference = (Math.abs(area2 - area1) / ((area1 + area2) / 2)) * 100;
      var percentageChange = ((area2 - area1) / area1) * 100;

      document.getElementById("diff").innerHTML = +difference.toFixed(2) + " cm&sup2;";
      document.getElementById("diff-percent").innerHTML = +percentageDifference.toFixed(2) + "%";
      document.getElementById("change").innerHTML = +percentageChange.toFixed(2) + "%";
    } else {
      document.getElementById("diff").innerHTML = "cm&sup2;";
      document.getElementById("diff-percent").innerHTML = "%";
      document.getElementById("change").innerHTML = "%";
    }
  }