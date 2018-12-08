// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) IORReports CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_IORReports = 0
  var noCount_IORReports = 0
  var okCount_IORReports = 0
  var naCount_IORReports = 0
  var tbdCount_IORReports = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_IORReports = [];
  var IORReportsComments = [];
  var IORReportsComments_yes = [];
  var IORReportsComments_no = [];
  var IORReportsComments_ok = [];
  var IORReportsComments_na = [];
  var IORReportsComments_tbd = [];


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
    if (response[i].IORReports == "Yes") {
      yesCount_IORReports += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      IORReportsComments_yes.push(response[i].IORReportsComments)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].IORReports == "No") {
      noCount_IORReports += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      IORReportsComments_no.push(response[i].IORReportsComments)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].IORReports == "OK") {
      okCount_IORReports += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      IORReportsComments_ok.push(response[i].IORReportsComments)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].IORReports == "N A") {
      naCount_IORReports += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      IORReportsComments_na.push(response[i].IORReportsComments)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_IORReports += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      IORReportsComments_tbd.push(response[i].IORReportsComments)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_IORReports.push(response[i].IORReports)
    IORReportsComments.push(response[i].IORReportsComments)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  console.log('Project Description: ', ProjectDescription)
  console.log('Project Description_No: ', ProjectDescription_no)
  console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('IORReports Number, YES: ', IORReportsComments_yes )
  console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_IORReports_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (IORReports)
  var trace_IORReports = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_IORReports, naCount_IORReports, tbdCount_IORReports, okCount_IORReports, noCount_IORReports],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_IORReports = [trace_IORReports];

  var layout_IORReports = {
    title: "IOR Reports Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_IORReports_bar", data_IORReports, layout_IORReports);

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
      IORReportsComments_x = IORReportsComments_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      IORReportsComments_x = IORReportsComments_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      IORReportsComments_x = IORReportsComments_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      IORReportsComments_x = IORReportsComments_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      IORReportsComments_x = IORReportsComments_no   
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
      table_alert += "<td>" + IORReportsComments_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_IORReports").innerHTML = table_alert;
  })
  
});

