// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) COBIE CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_COBIE = 0
  var noCount_COBIE = 0
  var okCount_COBIE = 0
  var naCount_COBIE = 0
  var tbdCount_COBIE = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_COBIE = [];
  var COBIEComments = [];
  var COBIEComments_yes = [];
  var COBIEComments_no = [];
  var COBIEComments_ok = [];
  var COBIEComments_na = [];
  var COBIEComments_tbd = [];


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
    if (response[i].COBIE == "Yes") {
      yesCount_COBIE += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      COBIEComments_yes.push(response[i].COBIEComments)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].COBIE == "No") {
      noCount_COBIE += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      COBIEComments_no.push(response[i].COBIEComments)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].COBIE == "OK") {
      okCount_COBIE += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      COBIEComments_ok.push(response[i].COBIEComments)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].COBIE == "N A") {
      naCount_COBIE += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      COBIEComments_na.push(response[i].COBIEComments)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_COBIE += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      COBIEComments_tbd.push(response[i].COBIEComments)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_COBIE.push(response[i].COBIE)
    COBIEComments.push(response[i].COBIEComments)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  // console.log('Project Description: ', ProjectDescription)
  // console.log('Project Description_No: ', ProjectDescription_no)
  // console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('COBIE Project Number, OK: ', ProjectNumber_ok )
  console.log('COBIE Comments, OK: ', COBIEComments_ok )
  // console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_COBIE_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (COBIE)
  var trace_COBIE = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_COBIE, naCount_COBIE, tbdCount_COBIE, okCount_COBIE, noCount_COBIE],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_COBIE = [trace_COBIE];

  var layout_COBIE = {
    title: "COBIE Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_COBIE_bar", data_COBIE, layout_COBIE);

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
      COBIEComments_x = COBIEComments_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      COBIEComments_x = COBIEComments_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      COBIEComments_x = COBIEComments_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      COBIEComments_x = COBIEComments_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      COBIEComments_x = COBIEComments_no   
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
      table_alert += "<td>" + ProjectNumber_x[i] + "_"+"</td>";
      table_alert += "<td>" + ProjectDescription_x[i] +"_"+ "</td>";
      table_alert += "<td>" + COBIEComments_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_COBIE").innerHTML = table_alert;
  })
  
});

