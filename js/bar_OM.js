// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) OM CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_OM = 0
  var noCount_OM = 0
  var okCount_OM = 0
  var naCount_OM = 0
  var tbdCount_OM = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_OM = [];
  var OMComments = [];
  var OMComments_yes = [];
  var OMComments_no = [];
  var OMComments_ok = [];
  var OMComments_na = [];
  var OMComments_tbd = [];


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
    if (response[i].OM == "Yes") {
      yesCount_OM += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      OMComments_yes.push(response[i].OMComments)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].OM == "No") {
      noCount_OM += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      OMComments_no.push(response[i].OMComments)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].OM == "OK") {
      okCount_OM += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      OMComments_ok.push(response[i].OMComments)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].OM == "N A") {
      naCount_OM += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      OMComments_na.push(response[i].OMComments)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_OM += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      OMComments_tbd.push(response[i].OMComments)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_OM.push(response[i].OM)
    OMComments.push(response[i].OMComments)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  // console.log('Project Description: ', ProjectDescription)
  // console.log('Project Description_No: ', ProjectDescription_no)
  // console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('OM Project Number, OK: ', ProjectNumber_ok )
  console.log('OM Comments, OK: ', OMComments_ok )
  // console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_OM_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (OM)
  var trace_OM = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_OM, naCount_OM, tbdCount_OM, okCount_OM, noCount_OM],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_OM = [trace_OM];

  var layout_OM = {
    title: "O&M Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_OM_bar", data_OM, layout_OM);

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
      OMComments_x = OMComments_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      OMComments_x = OMComments_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      OMComments_x = OMComments_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      OMComments_x = OMComments_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      OMComments_x = OMComments_no   
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
      table_alert += "<td>" + OMComments_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_OM").innerHTML = table_alert;
  })
  
});

