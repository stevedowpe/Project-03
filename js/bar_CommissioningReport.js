// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) CommissioningReport CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_CommissioningReport = 0
  var noCount_CommissioningReport = 0
  var okCount_CommissioningReport = 0
  var naCount_CommissioningReport = 0
  var tbdCount_CommissioningReport = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_CommissioningReport = [];
  var CommissioningReportComments = [];
  var CommissioningReportComments_yes = [];
  var CommissioningReportComments_no = [];
  var CommissioningReportComments_ok = [];
  var CommissioningReportComments_na = [];
  var CommissioningReportComments_tbd = [];


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
    if (response[i].CommissioningReport == "Yes") {
      yesCount_CommissioningReport += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      CommissioningReportComments_yes.push(response[i].CommissioningReportComments)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].CommissioningReport == "No") {
      noCount_CommissioningReport += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      CommissioningReportComments_no.push(response[i].CommissioningReportComments)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].CommissioningReport == "OK") {
      okCount_CommissioningReport += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      CommissioningReportComments_ok.push(response[i].CommissioningReportComments)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].CommissioningReport == "N A") {
      naCount_CommissioningReport += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      CommissioningReportComments_na.push(response[i].CommissioningReportComments)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_CommissioningReport += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      CommissioningReportComments_tbd.push(response[i].CommissioningReportComments)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_CommissioningReport.push(response[i].CommissioningReport)
    CommissioningReportComments.push(response[i].CommissioningReportComments)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  console.log('Project Description: ', ProjectDescription)
  console.log('Project Description_No: ', ProjectDescription_no)
  console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('CommissioningReport Number, YES: ', CommissioningReportComments_yes )
  console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_CommissioningReport_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (CommissioningReport)
  var trace_CommissioningReport = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_CommissioningReport, naCount_CommissioningReport, tbdCount_CommissioningReport, okCount_CommissioningReport, noCount_CommissioningReport],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_CommissioningReport = [trace_CommissioningReport];

  var layout_CommissioningReport = {
    title: "Commissioning Report Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_CommissioningReport_bar", data_CommissioningReport, layout_CommissioningReport);

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
      CommissioningReportComments_x = CommissioningReportComments_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      CommissioningReportComments_x = CommissioningReportComments_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      CommissioningReportComments_x = CommissioningReportComments_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      CommissioningReportComments_x = CommissioningReportComments_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      CommissioningReportComments_x = CommissioningReportComments_no   
      ProjectNumber_x = ProjectNumber_no   
      console.log(ProjectDescription_no)
    }
    else {
      "Hello"
    }

    var table_alert = '<table>'
    table_alert += "<th>Project Number</th>", "<th>Project Names</th>"
    for (var i = 0; i < ProjectDescription_x.length; i++) {
      table_alert += "<tr>";
      table_alert += "<td>" + ProjectNumber_x[i] + "</td>";
      
      table_alert += "<td>" + ProjectDescription_x[i] + "</td>";
      table_alert += "<td>" + CommissioningReportComments_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_CommissioningReport").innerHTML = table_alert;
  })
  
});

