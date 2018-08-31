// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) BIM CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_BIM = 0
  var noCount_BIM = 0
  var okCount_BIM = 0
  var naCount_BIM = 0
  var tbdCount_BIM = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_BIM = [];
  var BIMComments = [];
  var BIMComments_yes = [];
  var BIMComments_no = [];
  var BIMComments_ok = [];
  var BIMComments_na = [];
  var BIMComments_tbd = [];


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
    if (response[i].BIM == "Yes") {
      yesCount_BIM += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      BIMComments_yes.push(response[i].BIMComments)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].BIM == "No") {
      noCount_BIM += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      BIMComments_no.push(response[i].BIMComments)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].BIM == "OK") {
      okCount_BIM += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      BIMComments_ok.push(response[i].BIMComments)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].BIM == "N A") {
      naCount_BIM += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      BIMComments_na.push(response[i].BIMComments)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_BIM += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      BIMComments_tbd.push(response[i].BIMComments)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_BIM.push(response[i].BIM)
    BIMComments.push(response[i].BIMComments)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  console.log('Project Description: ', ProjectDescription)
  console.log('Project Description_No: ', ProjectDescription_no)
  console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('BIM Number, YES: ', BIMComments_yes )
  console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_BIM_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (BIM)
  var trace_BIM = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_BIM, naCount_BIM, tbdCount_BIM, okCount_BIM, noCount_BIM],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_BIM = [trace_BIM];

  var layout_BIM = {
    title: "BIM Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_BIM_bar", data_BIM, layout_BIM);

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
      BIMComments_x = BIMComments_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      BIMComments_x = BIMComments_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      BIMComments_x = BIMComments_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      BIMComments_x = BIMComments_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      BIMComments_x = BIMComments_no   
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
      table_alert += "<td>" + BIMComments_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_BIM").innerHTML = table_alert;
  })
  
});

