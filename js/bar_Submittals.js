// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) Submittals CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_Submittals = 0
  var noCount_Submittals = 0
  var okCount_Submittals = 0
  var naCount_Submittals = 0
  var tbdCount_Submittals = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_Submittals = [];
  var SubmittalsComments = [];
  var SubmittalsComments_yes = [];
  var SubmittalsComments_no = [];
  var SubmittalsComments_ok = [];
  var SubmittalsComments_na = [];
  var SubmittalsComments_tbd = [];


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
    if (response[i].Submittals == "Yes") {
      yesCount_Submittals += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      SubmittalsComments_yes.push(response[i].SubmittalsComments)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].Submittals == "No") {
      noCount_Submittals += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      SubmittalsComments_no.push(response[i].SubmittalsComments)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].Submittals == "OK") {
      okCount_Submittals += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      SubmittalsComments_ok.push(response[i].SubmittalsComments)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].Submittals == "N A") {
      naCount_Submittals += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      SubmittalsComments_na.push(response[i].SubmittalsComments)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_Submittals += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      SubmittalsComments_tbd.push(response[i].SubmittalsComments)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_Submittals.push(response[i].Submittals)
    SubmittalsComments.push(response[i].SubmittalsComments)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  // console.log('Project Description: ', ProjectDescription)
  // console.log('Project Description_No: ', ProjectDescription_no)
  // console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('Submittals Project Number, OK: ', ProjectNumber_ok )
  console.log('Submittals Comments, OK: ', SubmittalsComments_ok )
  // console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_Submittals_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (Submittals)
  var trace_Submittals = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_Submittals, naCount_Submittals, tbdCount_Submittals, okCount_Submittals, noCount_Submittals],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_Submittals = [trace_Submittals];

  var layout_Submittals = {
    title: "Submittals Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_Submittals_bar", data_Submittals, layout_Submittals);

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
      SubmittalsComments_x = SubmittalsComments_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      SubmittalsComments_x = SubmittalsComments_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      SubmittalsComments_x = SubmittalsComments_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      SubmittalsComments_x = SubmittalsComments_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      SubmittalsComments_x = SubmittalsComments_no   
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
      table_alert += "<td>" + SubmittalsComments_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_Submittals").innerHTML = table_alert;
  })
  
});

