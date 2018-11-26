// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) Minutes CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_Minutes = 0
  var noCount_Minutes = 0
  var okCount_Minutes = 0
  var naCount_Minutes = 0
  var tbdCount_Minutes = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_Minutes = [];
  var MinutesComments = [];
  var MinutesComments_yes = [];
  var MinutesComments_no = [];
  var MinutesComments_ok = [];
  var MinutesComments_na = [];
  var MinutesComments_tbd = [];


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
    if (response[i].Minutes == "Yes") {
      yesCount_Minutes += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      MinutesComments_yes.push(response[i].MinutesComments)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].Minutes == "No") {
      noCount_Minutes += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      MinutesComments_no.push(response[i].MinutesComments)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].Minutes == "OK") {
      okCount_Minutes += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      MinutesComments_ok.push(response[i].MinutesComments)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].Minutes == "N A") {
      naCount_Minutes += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      MinutesComments_na.push(response[i].MinutesComments)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_Minutes += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      MinutesComments_tbd.push(response[i].MinutesComments)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_Minutes.push(response[i].Minutes)
    MinutesComments.push(response[i].MinutesComments)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  // console.log('Project Description: ', ProjectDescription)
  // console.log('Project Description_No: ', ProjectDescription_no)
  // console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('Minutes Project Number, OK: ', ProjectNumber_ok )
  console.log('Minutes Comments, OK: ', MinutesComments_ok )
  // console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_Minutes_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (Minutes)
  var trace_Minutes = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_Minutes, naCount_Minutes, tbdCount_Minutes, okCount_Minutes, noCount_Minutes],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_Minutes = [trace_Minutes];

  var layout_Minutes = {
    title: "Minutes Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_Minutes_bar", data_Minutes, layout_Minutes);

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
      MinutesComments_x = MinutesComments_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      MinutesComments_x = MinutesComments_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      MinutesComments_x = MinutesComments_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      MinutesComments_x = MinutesComments_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      MinutesComments_x = MinutesComments_no   
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
      table_alert += "<td>" + MinutesComments_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_Minutes").innerHTML = table_alert;
  })
  
});

