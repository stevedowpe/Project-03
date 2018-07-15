// (0) "GLOBALLY-SCOPE" THE VARIABLES
var data_Warranty = []
var layout_Warranty = []
var yesCount = []
var noCount = []
var okCount = []
var naCount = []
var tbdCount = []

var data_Warranty_22 = []
var layout_Warranty_22 = []
var yesCount_22 = []
var noCount_22 = []
var okCount_22 = []
var naCount_22 = []
var tbdCount_22 = []

var data_Warranty_23 = []
var layout_Warranty_23 = []
var yesCount_23 = []
var noCount_23 = []
var okCount_23 = []
var naCount_23 = []
var tbdCount_23 = []

var data_Warranty_26 = []
var layout_Warranty_26 = []
var yesCount_26 = []
var noCount_26 = []
var okCount_26 = []
var naCount_26 = []
var tbdCount_26 = []


//////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////


// (1) CREATE BAR CHART FOR ALL WARRANTY INFO 
Plotly.d3.csv("SDCCD-Program-Equipment-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);

  // (1-A) Set initial blank variable arrays for counting
  yesCount = 0
  noCount = 0
  okCount = 0
  naCount = 0
  tbdCount = 0

  // (1-B) Set variable to capture response info 
  var status_Warranty = [];

  // (1-C) Loop through responses and push values to arrays
  for (var i = 0; i < response.length; i++) {
    if (response[i].Warranty == "Yes") {
      yesCount += 1
    } else if (response[i].Warranty == "No") {
      noCount += 1
    } else if (response[i].Warranty == "OK") {
      okCount += 1
    } else if (response[i].Warranty == "N A") {
      naCount += 1
    } else {
      tbdCount += 1
    }
    status_Warranty.push(response[i].Warranty)
  };

  // (1-D) Console log
  console.log('Warranty Status : ', status_Warranty)

  // (1-E) Set Warranty Bar chart
  var trace_Warranty = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount, naCount, tbdCount, okCount, noCount],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  data_Warranty = [trace_Warranty];

  layout_Warranty = {
    title: "Warranty Cert Status",
    height: 350,
    width: 350,
  };

  Plotly.plot("bar", data_Warranty, layout_Warranty);
});

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// (2) CREATE BAR CHART FOR WARRANTY INFO -- CSI-22-PLUMBING 
Plotly.d3.csv("SDCCD-Equipment-Data-CSI-22.csv", function (error, response) {
  console.log('RESPONSE:', response);

  // (2-A) Set initial blank variable arrays for counting
  yesCount_22 = 0
  noCount_22 = 0
  okCount_22 = 0
  naCount_22 = 0
  tbdCount_22 = 0

  // (2-B) Set variable to capture response info 
  var status_Warranty_22 = [];

  // (2-C) Loop through responses and push values to arrays
  for (var i = 0; i < response.length; i++) {
    if (response[i].Warranty == "Yes") {
      yesCount_22 += 1
    } else if (response[i].Warranty == "No") {
      noCount_22 += 1
    } else if (response[i].Warranty == "OK") {
      okCount_22 += 1
    } else if (response[i].Warranty == "N A") {
      naCount_22 += 1
    } else {
      tbdCount_22 += 1
    }
    status_Warranty_22.push(response[i].Warranty)
  };

  // (2-D) Console log
  console.log('Warranty Status_22 : ', status_Warranty_22)

  // (2-E) Set Warranty Bar chart
  var trace_Warranty_22 = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_22, naCount_22, tbdCount_22, okCount_22, noCount_22],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  data_Warranty_22 = [trace_Warranty_22];

  layout_Warranty_22 = {
    title: "Warranties (CSI 22: Plumbing)",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("bar", data_Warranty_22, layout_Warranty_22);
});

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// (3) CREATE BAR CHART FOR WARRANTY INFO -- CSI-23-HVAC 
Plotly.d3.csv("SDCCD-Equipment-Data-CSI-23.csv", function (error, response) {
  console.log('RESPONSE:', response);

  // (3-A) Set initial blank variable arrays for counting
  yesCount_23 = 0
  noCount_23 = 0
  okCount_23 = 0
  naCount_23 = 0
  tbdCount_23 = 0

  // (3-B) Set variable to capture response info 
  var status_Warranty_23 = [];

  // (3-C) Loop through responses and push values to arrays
  for (var i = 0; i < response.length; i++) {
    if (response[i].Warranty == "Yes") {
      yesCount_23 += 1
    } else if (response[i].Warranty == "No") {
      noCount_23 += 1
    } else if (response[i].Warranty == "OK") {
      okCount_23 += 1
    } else if (response[i].Warranty == "N A") {
      naCount_23 += 1
    } else {
      tbdCount_23 += 1
    }
    status_Warranty_23.push(response[i].Warranty)
  };

  // (3-D) Console log
  console.log('Warranty Status_23 : ', status_Warranty_23)

  // (3-E) Set Warranty Bar chart
  var trace_Warranty_23 = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_23, naCount_23, tbdCount_23, okCount_23, noCount_23],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  data_Warranty_23 = [trace_Warranty_23];

  layout_Warranty_23 = {
    title: "Warranties (CSI 23: HVAC)",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("bar", data_Warranty_23, layout_Warranty_23);
});

///////////////////////////////////////////////////////
//////////////////////////////////////////////////////
/////////////////////////////////////////////////////

// (4) CREATE BAR CHART FOR WARRANTY INFO -- CSI-26-Electrical 
Plotly.d3.csv("SDCCD-Equipment-Data-CSI-26.csv", function (error, response) {
  console.log('RESPONSE:', response);

  // (4-A) Set initial blank variable arrays for counting
  yesCount_26 = 0
  noCount_26 = 0
  okCount_26 = 0
  naCount_26 = 0
  tbdCount_26 = 0

  // (4-B) Set variable to capture response info 
  var status_Warranty_26 = [];

  // (4-C) Loop through responses and push values to arrays
  for (var i = 0; i < response.length; i++) {
    if (response[i].Warranty == "Yes") {
      yesCount_26 += 1
    } else if (response[i].Warranty == "No") {
      noCount_26 += 1
    } else if (response[i].Warranty == "OK") {
      okCount_26 += 1
    } else if (response[i].Warranty == "N A") {
      naCount_26 += 1
    } else {
      tbdCount_26 += 1
    }
    status_Warranty_26.push(response[i].Warranty)
  };

  // (4-D) Console log
  console.log('Warranty Status_26 : ', status_Warranty_26)

  // (4-E) Set Warranty Bar chart
  var trace_Warranty_26 = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_26, naCount_26, tbdCount_26, okCount_26, noCount_26],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  data_Warranty_26 = [trace_Warranty_26];

  layout_Warranty_26 = {
    // title: "Warranties (CSI 26: Electrical)",
    height: 600,
    width: 600,
  };
  Plotly.newPlot("bar", data_Warranty_26, layout_Warranty_26);
});


//////////////////////////////////////////
/////////////////////////////////////////
////////////////////////////////////////
// (5) FOR DROPDOWN, SET "INITIAL" DATA TO MATCH "All WARRANTY" bar chart #1

function init() {
  data = data_Warranty;
  layout = layout_Warranty;
  title = "Equipment Warranty Status"
  Plotly.plot("bar", data, layout);
}

// //////////////////////////////////////////
// /////////////////////////////////////////
// ////////////////////////////////////////
// (6) FOR DROPDOWN, SET UPDATE "CASES" TO DATA SETS DEFINED ABOVE IN #2 THROUGH #4

function updatePlotly(newdata) {
  var BAR = document.getElementById("bar");
  Plotly.restyle(BAR, "y", [newdata]);
}

function getData(dataset) {
  var data = [];
  switch (dataset) {
    case "dataset0":
      data = [yesCount, naCount, tbdCount, okCount, noCount];
      break;
    case "dataset1":
      data = [yesCount_22, naCount_22, tbdCount_22, okCount_22, noCount_22];
      break;
    case "dataset2":
      data = [yesCount_23, naCount_23, tbdCount_23, okCount_23, noCount_23];
      break;
    case "dataset3":
      data = [yesCount_26, naCount_26, tbdCount_26, okCount_26, noCount_26];
      break;
    default:
      data = [yesCount, naCount, tbdCount, okCount, noCount];
      break;
  }
  updatePlotly(data);
}

init();