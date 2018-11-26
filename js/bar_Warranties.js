// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) Warranties CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_Warranties = 0
  var noCount_Warranties = 0
  var okCount_Warranties = 0
  var naCount_Warranties = 0
  var tbdCount_Warranties = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_Warranties = [];
  var WarrantiesCWarrantiesments = [];
  var WarrantiesCWarrantiesments_yes = [];
  var WarrantiesCWarrantiesments_no = [];
  var WarrantiesCWarrantiesments_ok = [];
  var WarrantiesCWarrantiesments_na = [];
  var WarrantiesCWarrantiesments_tbd = [];


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
    if (response[i].Warranties == "Yes") {
      yesCount_Warranties += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      WarrantiesCWarrantiesments_yes.push(response[i].WarrantiesCWarrantiesments)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].Warranties == "No") {
      noCount_Warranties += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      WarrantiesCWarrantiesments_no.push(response[i].WarrantiesCWarrantiesments)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].Warranties == "OK") {
      okCount_Warranties += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      WarrantiesCWarrantiesments_ok.push(response[i].WarrantiesCWarrantiesments)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].Warranties == "N A") {
      naCount_Warranties += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      WarrantiesCWarrantiesments_na.push(response[i].WarrantiesCWarrantiesments)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_Warranties += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      WarrantiesCWarrantiesments_tbd.push(response[i].WarrantiesCWarrantiesments)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_Warranties.push(response[i].Warranties)
    WarrantiesCWarrantiesments.push(response[i].WarrantiesCWarrantiesments)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  // console.log('Project Description: ', ProjectDescription)
  // console.log('Project Description_No: ', ProjectDescription_no)
  // console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('Warranties Project Number, OK: ', ProjectNumber_ok )
  console.log('Warranties CWarrantiesments, OK: ', WarrantiesCWarrantiesments_ok )
  // console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_Warranties_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (Warranties)
  var trace_Warranties = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_Warranties, naCount_Warranties, tbdCount_Warranties, okCount_Warranties, noCount_Warranties],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_Warranties = [trace_Warranties];

  var layout_Warranties = {
    title: "Warranty Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_Warranties_bar", data_Warranties, layout_Warranties);

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
      WarrantiesCWarrantiesments_x = WarrantiesCWarrantiesments_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      WarrantiesCWarrantiesments_x = WarrantiesCWarrantiesments_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      WarrantiesCWarrantiesments_x = WarrantiesCWarrantiesments_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      WarrantiesCWarrantiesments_x = WarrantiesCWarrantiesments_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      WarrantiesCWarrantiesments_x = WarrantiesCWarrantiesments_no   
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
      table_alert += "<td>" + WarrantiesCWarrantiesments_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_Warranties").innerHTML = table_alert;
  })
  
});

