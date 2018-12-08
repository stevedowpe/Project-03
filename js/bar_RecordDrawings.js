// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) LEED CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_RecordDrawings = 0
  var noCount_RecordDrawings = 0
  var okCount_RecordDrawings = 0
  var naCount_RecordDrawings = 0
  var tbdCount_RecordDrawings = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_RecordDrawings = [];
  var RecordDrawingLocation = [];
  var RecordDrawingLocation_yes = [];
  var RecordDrawingLocation_no = [];
  var RecordDrawingLocation_ok = [];
  var RecordDrawingLocation_na = [];
  var RecordDrawingLocation_tbd = [];


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
    if (response[i].RecordDrawings == "Yes") {
      yesCount_RecordDrawings += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      RecordDrawingLocation_yes.push(response[i].RecordDrawingLocation)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].RecordDrawings == "No") {
      noCount_RecordDrawings += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      RecordDrawingLocation_no.push(response[i].RecordDrawingLocation)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].RecordDrawings == "OK") {
      okCount_RecordDrawings += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      RecordDrawingLocation_ok.push(response[i].RecordDrawingLocation)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].RecordDrawings == "N A") {
      naCount_RecordDrawings += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      RecordDrawingLocation_na.push(response[i].RecordDrawingLocation)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_RecordDrawings += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      RecordDrawingLocation_tbd.push(response[i].RecordDrawingLocation)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_RecordDrawings.push(response[i].RecordDrawings)
    RecordDrawingLocation.push(response[i].RecordDrawingLocation)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  console.log('Project Description: ', ProjectDescription)
  console.log('Project Description_No: ', ProjectDescription_no)
  console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('RecordDrawing Locations, YES: ', RecordDrawingLocation_yes )
  console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_RecordDrawings_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (RecordDrawings)
  var trace_RecordDrawings = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_RecordDrawings, naCount_RecordDrawings, tbdCount_RecordDrawings, okCount_RecordDrawings, noCount_RecordDrawings],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_RecordDrawings = [trace_RecordDrawings];

  var layout_RecordDrawings = {
    title: "Record Drawings Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_RecordDrawings_bar", data_RecordDrawings, layout_RecordDrawings);

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
      RecordDrawingLocation_x = RecordDrawingLocation_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      RecordDrawingLocation_x = RecordDrawingLocation_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      RecordDrawingLocation_x = RecordDrawingLocation_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      RecordDrawingLocation_x = RecordDrawingLocation_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      RecordDrawingLocation_x = RecordDrawingLocation_no   
      ProjectNumber_x = ProjectNumber_no   
      console.log(ProjectDescription_no)
    }
    else {
      "Hello"
    }

    var table_alert = '<table>'
    table_alert +="<th>Proj#__</th>"+"<th>Project Name</th>"+"<th>DSC Archive #</th>"
    for (var i = 0; i < ProjectDescription_x.length; i++) {
      table_alert += "<tr>";
      table_alert += "<td>" + ProjectNumber_x[i] +"_"+"</td>";
      table_alert += "<td>" + ProjectDescription_x[i] +"_"+ "</td>";
      table_alert += "<td>" + RecordDrawingLocation_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_RecordDrawings").innerHTML = table_alert;
  })
  
});

