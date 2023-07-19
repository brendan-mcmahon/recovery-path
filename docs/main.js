if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');
}

function calculateArea(index) {
    var length = document.getElementById(`length${index}`).value;
    var width = document.getElementById(`width${index}`).value;

    var area = length * width;
    const areaString = length && width ? formatNumber(area) : "";
    console.log('areaString', areaString);
    document.getElementById(`area${index}`).innerHTML = areaString;
    return area;
  }

window.calculate = function() {
    var area1 = calculateArea(1);
    var area2 = calculateArea(2);

    if (area1 && area2) {
      var difference = Math.abs(area1 - area2);
      var percentageChange = ((area2 - area1) / area1) * 100;

      document.getElementById("diff").innerHTML = formatNumber(difference) + " cm&sup2;";
      document.getElementById("change").innerHTML = formatNumber(percentageChange) + "%";
    } else {
      document.getElementById("diff").innerHTML = "cm&sup2;";
      document.getElementById("change").innerHTML = "%";
    }
  }

function formatNumber(area) {
  return Number(area).toLocaleString('en', { minimumFractionDigits: 0, maximumFractionDigits: 1 });
}
