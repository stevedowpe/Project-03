// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) DSA CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_DSA = 0
  var noCount_DSA = 0
  var okCount_DSA = 0
  var naCount_DSA = 0
  var tbdCount_DSA = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_DSA = [];
  var DSANumber = [];
  var DSANumber_yes = [];
  var DSANumber_no = [];
  var DSANumber_ok = [];
  var DSANumber_na = [];
  var DSANumber_tbd = [];


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
    if (response[i].DSA == "Yes") {
      yesCount_DSA += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      DSANumber_yes.push(response[i].DSANumber)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].DSA == "No") {
      noCount_DSA += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      DSANumber_no.push(response[i].DSANumber)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].DSA == "OK") {
      okCount_DSA += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      DSANumber_ok.push(response[i].DSANumber)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].DSA == "N A") {
      naCount_DSA += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      DSANumber_na.push(response[i].DSANumber)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_DSA += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      DSANumber_tbd.push(response[i].DSANumber)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_DSA.push(response[i].DSA)
    DSANumber.push(response[i].DSANumber)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  console.log('Project Description: ', ProjectDescription)
  console.log('Project Description_No: ', ProjectDescription_no)
  console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('DSA Number, YES: ', DSANumber_yes )
  console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_DSA_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (DSA)
  var trace_DSA = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_DSA, naCount_DSA, tbdCount_DSA, okCount_DSA, noCount_DSA],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_DSA = [trace_DSA];

  var layout_DSA = {
    title: "DSA Cert Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_DSA_bar", data_DSA, layout_DSA);

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
      DSANumber_x = DSANumber_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      DSANumber_x = DSANumber_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      DSANumber_x = DSANumber_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      DSANumber_x = DSANumber_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      DSANumber_x = DSANumber_no   
      ProjectNumber_x = ProjectNumber_no   
      console.log(ProjectDescription_no)
    }
    else {
      "Hello"
    }

    var table_alert = '<table>'
    table_alert += "<th>Proj#__</th>"+"<th>Project Name</th>"+"<th>DSA Number</th>"
    for (var i = 0; i < ProjectDescription_x.length; i++) {
      table_alert += "<tr>";
      table_alert += "<td>" + ProjectNumber_x[i] + "</td>";
      table_alert += "<td>" + ProjectDescription_x[i] +"__" + "</td>";
      table_alert += "<td>" + DSANumber_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_DSA").innerHTML = table_alert;
  })
  
});

