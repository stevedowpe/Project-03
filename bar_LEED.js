// (1) READ IN CSV FILE

Plotly.d3.csv("SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) LEED CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_LEED = 0
  var noCount_LEED = 0
  var okCount_LEED = 0
  var naCount_LEED = 0
  var tbdCount_LEED = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_LEED = [];
  var LEEDTarget = [];
  var LEEDTarget_yes = [];
  var LEEDTarget_no = [];
  var LEEDTarget_ok = [];
  var LEEDTarget_na = [];
  var LEEDTarget_tbd = [];


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
    if (response[i].LEED == "Yes") {
      yesCount_LEED += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      LEEDTarget_yes.push(response[i].LEEDTarget)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].LEED == "No") {
      noCount_LEED += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      LEEDTarget_no.push(response[i].LEEDTarget)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].LEED == "OK") {
      okCount_LEED += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      LEEDTarget_ok.push(response[i].LEEDTarget)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].LEED == "N A") {
      naCount_LEED += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      LEEDTarget_na.push(response[i].LEEDTarget)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_LEED += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      LEEDTarget_tbd.push(response[i].LEEDTarget)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_LEED.push(response[i].LEED)
    LEEDTarget.push(response[i].LEEDTarget)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  console.log('Project Description: ', ProjectDescription)
  console.log('Project Description_No: ', ProjectDescription_no)
  console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('LEED Target, YES: ', LEEDTarget_yes )
  console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_LEED_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (LEED)
  var trace_LEED = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_LEED, naCount_LEED, tbdCount_LEED, okCount_LEED, noCount_LEED],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_LEED = [trace_LEED];

  var layout_LEED = {
    title: "LEED Cert Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_LEED_bar", data_LEED, layout_LEED);

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
      LEEDTarget_x = LEEDTarget_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      LEEDTarget_x = LEEDTarget_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      LEEDTarget_x = LEEDTarget_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      LEEDTarget_x = LEEDTarget_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      LEEDTarget_x = LEEDTarget_no   
      ProjectNumber_x = ProjectNumber_no   
      console.log(ProjectDescription_no)
    }
    else {
      "Hello"
    }

    var table_alert = '<table>'
    table_alert +="<th>Project Number</th>", "<th>Project Names</th>"
    for (var i = 0; i < ProjectDescription_x.length; i++) {
      table_alert += "<tr>";
      table_alert += "<td>" + ProjectNumber_x[i] + "</td>";
      table_alert += "<td>" + ProjectDescription_x[i] + "</td>";
      table_alert += "<td>" + LEEDTarget_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_LEED").innerHTML = table_alert;
  })
  
});

