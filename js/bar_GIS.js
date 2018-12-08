// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) GIS CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_GIS = 0
  var noCount_GIS = 0
  var okCount_GIS = 0
  var naCount_GIS = 0
  var tbdCount_GIS = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_GIS = [];
  var GISComments = [];
  var GISComments_yes = [];
  var GISComments_no = [];
  var GISComments_ok = [];
  var GISComments_na = [];
  var GISComments_tbd = [];


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
    if (response[i].GIS == "Yes") {
      yesCount_GIS += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      GISComments_yes.push(response[i].GISComments)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].GIS == "No") {
      noCount_GIS += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      GISComments_no.push(response[i].GISComments)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].GIS == "OK") {
      okCount_GIS += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      GISComments_ok.push(response[i].GISComments)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].GIS == "N A") {
      naCount_GIS += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      GISComments_na.push(response[i].GISComments)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_GIS += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      GISComments_tbd.push(response[i].GISComments)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_GIS.push(response[i].GIS)
    GISComments.push(response[i].GISComments)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  console.log('Project Description: ', ProjectDescription)
  console.log('Project Description_No: ', ProjectDescription_no)
  console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('GIS Number, YES: ', GISComments_yes )
  console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_GIS_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (GIS)
  var trace_GIS = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_GIS, naCount_GIS, tbdCount_GIS, okCount_GIS, noCount_GIS],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_GIS = [trace_GIS];

  var layout_GIS = {
    title: "GIS Status (Small-Scale Dwgs)",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_GIS_bar", data_GIS, layout_GIS);

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
      GISComments_x = GISComments_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      GISComments_x = GISComments_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      GISComments_x = GISComments_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      GISComments_x = GISComments_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      GISComments_x = GISComments_no   
      ProjectNumber_x = ProjectNumber_no   
      console.log(ProjectDescription_no)
    }
    else {
      "Hello"
    }

    var table_alert = '<table>'
    table_alert += "<th>Proj#__</th>"+"<th>Project Name</th>"+"<th>FUSION#</th>"
    for (var i = 0; i < ProjectDescription_x.length; i++) {
      table_alert += "<tr>";
      table_alert += "<td>" + ProjectNumber_x[i] +"_"+ "</td>";
      table_alert += "<td>" + ProjectDescription_x[i] +"_"+ "</td>";
      table_alert += "<td>" + GISComments_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_GIS").innerHTML = table_alert;
  })
  
});

