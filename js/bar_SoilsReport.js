// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) SoilsReport CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_SoilsReport = 0
  var noCount_SoilsReport = 0
  var okCount_SoilsReport = 0
  var naCount_SoilsReport = 0
  var tbdCount_SoilsReport = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_SoilsReport = [];
  var SoilsReportComments = [];
  var SoilsReportComments_yes = [];
  var SoilsReportComments_no = [];
  var SoilsReportComments_ok = [];
  var SoilsReportComments_na = [];
  var SoilsReportComments_tbd = [];


  var ProjectNumber = [];
  var ProjectNumber_x =[];
  var ProjectNumber_yes = [];
  var ProjectNumber_no = [];
  var ProjectNumber_ok = [];
  var ProjectNumber_na = [];
  var ProjectNumber_tbd = [];



  ///////////////////////////////////////
  // (2-B1) LOOP THROUGH RESPONSES AND PUSH VALUES TO ARRAYS
  for (var i = 0; i < response.length; i++) {
    if (response[i].SoilsReport == "Yes") {
      yesCount_SoilsReport += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      SoilsReportComments_yes.push(response[i].SoilsReportComments)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].SoilsReport == "No") {
      noCount_SoilsReport += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      SoilsReportComments_no.push(response[i].SoilsReportComments)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].SoilsReport == "OK") {
      okCount_SoilsReport += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      SoilsReportComments_ok.push(response[i].SoilsReportComments)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].SoilsReport == "N A") {
      naCount_SoilsReport += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      SoilsReportComments_na.push(response[i].SoilsReportComments)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_SoilsReport += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      SoilsReportComments_tbd.push(response[i].SoilsReportComments)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_SoilsReport.push(response[i].SoilsReport)
    SoilsReportComments.push(response[i].SoilsReportComments)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  console.log('Project Description: ', ProjectDescription)
  console.log('Project Description_No: ', ProjectDescription_no)
  console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('SoilsReport Number, YES: ', SoilsReportComments_yes )
  console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_SoilsReport_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (SoilsReport)
  var trace_SoilsReport = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_SoilsReport, naCount_SoilsReport, tbdCount_SoilsReport, okCount_SoilsReport, noCount_SoilsReport],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_SoilsReport = [trace_SoilsReport];

  var layout_SoilsReport = {
    title: "Soils Report Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_SoilsReport_bar", data_SoilsReport, layout_SoilsReport);

  myPlot.on('plotly_click', function (data) {
    console.log(data)
    var pts = '';
    var yAxis = data.points[0].y;
    // get the index of y-value
    var xAxisIndex = data.points[0].data.y.indexOf(yAxis);
    // with that index I calculate x-value
    var xAxis = data.points[0].data.x[xAxisIndex]
    console.log(xAxis);
    if (xAxis == "Yes") {
      ProjectDescription_x = ProjectDescription_yes
      SoilsReportComments_x = SoilsReportComments_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      SoilsReportComments_x = SoilsReportComments_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      SoilsReportComments_x = SoilsReportComments_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      SoilsReportComments_x = SoilsReportComments_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      SoilsReportComments_x = SoilsReportComments_no   
      ProjectNumber_x = ProjectNumber_no   
      console.log(ProjectDescription_no)
    }
    else {
      "Hello"
    }

    var table_alert = '<table>'
    table_alert += "<th>Proj#__</th>"+"<th>Project Name</th>"+"<th>Comments</th>"
    for (var i = 0; i < ProjectDescription_x.length; i++) {
      table_alert += "<tr>";
      table_alert += "<td>" + ProjectNumber_x[i] +"_"+ "</td>";
      table_alert += "<td>" + ProjectDescription_x[i] +"_"+ "</td>";
      table_alert += "<td>" + SoilsReportComments_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_SoilsReport").innerHTML = table_alert;
  })
  
});

