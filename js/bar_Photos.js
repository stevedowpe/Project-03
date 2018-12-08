// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Program-Close-Data.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) Photos CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_Photos = 0
  var noCount_Photos = 0
  var okCount_Photos = 0
  var naCount_Photos = 0
  var tbdCount_Photos = 0

  var ProjectDescription = [];
  var ProjectDescription_yes = [];
  var ProjectDescription_no = [];
  var ProjectDescription_ok = [];
  var ProjectDescription_na = [];
  var ProjectDescription_tbd = [];


  var status_Photos = [];
  var PhotosComments = [];
  var PhotosComments_yes = [];
  var PhotosComments_no = [];
  var PhotosComments_ok = [];
  var PhotosComments_na = [];
  var PhotosComments_tbd = [];


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
    if (response[i].Photos == "Yes") {
      yesCount_Photos += 1
      ProjectDescription_yes.push(response[i].ProjectDescription)
      PhotosComments_yes.push(response[i].PhotosComments)
      ProjectNumber_yes.push(response[i].ProjectNumber)

    } else if (response[i].Photos == "No") {
      noCount_Photos += 1
      ProjectDescription_no.push(response[i].ProjectDescription)
      PhotosComments_no.push(response[i].PhotosComments)
      ProjectNumber_no.push(response[i].ProjectNumber)

    } else if (response[i].Photos == "OK") {
      okCount_Photos += 1
      ProjectDescription_ok.push(response[i].ProjectDescription)
      PhotosComments_ok.push(response[i].PhotosComments)
      ProjectNumber_ok.push(response[i].ProjectNumber)

    } else if (response[i].Photos == "N A") {
      naCount_Photos += 1
      ProjectDescription_na.push(response[i].ProjectDescription)
      PhotosComments_na.push(response[i].PhotosComments)
      ProjectNumber_na.push(response[i].ProjectNumber)


    } else {
      tbdCount_Photos += 1
      ProjectDescription_tbd.push(response[i].ProjectDescription)
      PhotosComments_tbd.push(response[i].PhotosComments)
      ProjectNumber_tbd.push(response[i].ProjectNumber)

    }
    status_Photos.push(response[i].Photos)
    PhotosComments.push(response[i].PhotosComments)
    ProjectDescription.push(response[i].ProjectDescription)
    ProjectNumber.push(response[i].ProjectNumber)
  };


  // console.log('Project Description: ', ProjectDescription)
  // console.log('Project Description_No: ', ProjectDescription_no)
  // console.log('Project Description_Yes: ', ProjectDescription_yes)
  console.log('Photos Project Number, OK: ', ProjectNumber_ok )
  console.log('Photos Comments, OK: ', PhotosComments_ok )
  // console.log('Project Number, NO: ', ProjectNumber_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_Photos_bar');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (Photos)
  var trace_Photos = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_Photos, naCount_Photos, tbdCount_Photos, okCount_Photos, noCount_Photos],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_Photos = [trace_Photos];

  var layout_Photos = {
    title: "Photos Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_Photos_bar", data_Photos, layout_Photos);

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
      PhotosComments_x = PhotosComments_yes
      ProjectNumber_x = ProjectNumber_yes
      console.log(ProjectDescription_yes)
    }

    else if (xAxis == "N A") {
      ProjectDescription_x = ProjectDescription_na
      PhotosComments_x = PhotosComments_na     
      ProjectNumber_x = ProjectNumber_na
      console.log(ProjectDescription_na)
    }
    
    else if (xAxis == "TBD") {
      ProjectDescription_x = ProjectDescription_tbd
      PhotosComments_x = PhotosComments_tbd     
      ProjectNumber_x = ProjectNumber_tbd
      console.log(ProjectDescription_tbd)
    }

    else if (xAxis == "OK") {
      ProjectDescription_x = ProjectDescription_ok
      PhotosComments_x = PhotosComments_ok   
      ProjectNumber_x = ProjectNumber_ok
      console.log(ProjectDescription_ok)
    }

    else if (xAxis == "No") {
      ProjectDescription_x = ProjectDescription_no
      PhotosComments_x = PhotosComments_no   
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
      table_alert += "<td>" + PhotosComments_x[i] + "</td>";
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_Photos").innerHTML = table_alert;
  })
  
});

