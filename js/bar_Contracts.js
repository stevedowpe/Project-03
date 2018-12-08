// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) Contracts CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_Contracts = 0
  var noCount_Contracts = 0
  var okCount_Contracts = 0
  var naCount_Contracts = 0
  var tbdCount_Contracts = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_Contracts = [];
  var ContractsComments = [];
  var ContractsComments_yes = [];
  var ContractsComments_no = [];
  var ContractsComments_ok = [];
  var ContractsComments_na = [];
  var ContractsComments_tbd = [];


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
    if (response[i].Contracts == "Yes") {
      yesCount_Contracts += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      ContractsComments_yes.push(response[i].ContractsComments)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].Contracts == "No") {
      noCount_Contracts += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      ContractsComments_no.push(response[i].ContractsComments)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].Contracts == "OK") {
      okCount_Contracts += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      ContractsComments_ok.push(response[i].ContractsComments)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].Contracts == "N A") {
      naCount_Contracts += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      ContractsComments_na.push(response[i].ContractsComments)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_Contracts += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      ContractsComments_tbd.push(response[i].ContractsComments)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_Contracts.push(response[i].Contracts)
    ContractsComments.push(response[i].ContractsComments)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  // console.log('Project Description: ', ProjectDescription)
  // console.log('Project Description_No: ', ProjectDescription_no)
  // console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('Contracts Project Number, OK: ', ProjectNumber_ok )
  console.log('Contracts Comments, OK: ', ContractsComments_ok )
  // console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_Contracts_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (Contracts)
  var trace_Contracts = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_Contracts, naCount_Contracts, tbdCount_Contracts, okCount_Contracts, noCount_Contracts],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_Contracts = [trace_Contracts];

  var layout_Contracts = {
    title: "Contracts Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_Contracts_bar", data_Contracts, layout_Contracts);

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
      ContractsComments_x = ContractsComments_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      ContractsComments_x = ContractsComments_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      ContractsComments_x = ContractsComments_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      ContractsComments_x = ContractsComments_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      ContractsComments_x = ContractsComments_no   
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
      table_alert += "<td>" + ContractsComments_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_Contracts").innerHTML = table_alert;
  })
  
});

