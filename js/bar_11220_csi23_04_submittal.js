// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Equipment-DataBuild-11220-CSI23.csv", function (error, response) {
  console.log('RESPONSE:', response);
  ////////////////////////////////////////
  ////////////////////////////////////////
  ///////////////////////////////////////

  // (2) Submittal CHART
  // (2-A) SET BLANK VARIABLE ARRAYS
  var yesCount_Submittal = 0
  var noCount_Submittal = 0
  var okCount_Submittal = 0
  var naCount_Submittal = 0
  var tbdCount_Submittal = 0

  var Item = [];
  var Item_yes = [];
  var Item_no = [];
  var Item_ok = [];
  var Item_na = [];
  var Item_tbd = [];


  var status_Submittal = [];
  var Callout = [];
  var Callout_x = [];
  var Callout_yes = [];
  var Callout_no = [];
  var Callout_ok = [];
  var Callout_na = [];
  var Callout_tbd = [];


  var Sheet = [];
  var Sheet_x =[];
  var Sheet_yes = [];
  var Sheet_no = [];
  var Sheet_ok = [];
  var Sheet_na = [];
  var Sheet_tbd = [];


  var FAIDNo = [];
  var FAIDNo_x =[];
  var FAIDNo_yes = [];
  var FAIDNo_no = [];
  var FAIDNo_ok = [];
  var FAIDNo_na = [];
  var FAIDNo_tbd = [];

  var Room = [];
  var Room_x =[];
  var Room_yes = [];
  var Room_no = [];
  var Room_ok = [];
  var Room_na = [];
  var Room_tbd = [];


  var SubmittalDigital = [];
  var SubmittalDigital_x =[];
  var SubmittalDigital_yes = [];
  var SubmittalDigital_no = [];
  var SubmittalDigital_ok = [];
  var SubmittalDigital_na = [];
  var SubmittalDigital_tbd = [];


  ///////////////////////////////////////
  // (2-B1) LOOP THROUGH RESPONSES AND PUSH VALUES TO ARRAYS
  for (var i = 0; i < response.length; i++) {
    if (response[i].Submittal == "Yes") {
      yesCount_Submittal += 1
      Item_yes.push(response[i].Item)
      Callout_yes.push(response[i].Callout)
      Sheet_yes.push(response[i].Sheet)
      FAIDNo_yes.push(response[i].FAIDNo)
      Room_yes.push(response[i].Room)
      SubmittalDigital_yes.push(response[i].SubmittalDigital)


    } else if (response[i].Submittal == "No") {
      noCount_Submittal += 1
      Item_no.push(response[i].Item)
      Callout_no.push(response[i].Callout)
      Sheet_no.push(response[i].Sheet)
      FAIDNo_no.push(response[i].FAIDNo)
      Room_no.push(response[i].Room)
      SubmittalDigital_no.push(response[i].SubmittalDigital)



    } else if (response[i].Submittal == "OK") {
      okCount_Submittal += 1
      Item_ok.push(response[i].Item)
      Callout_ok.push(response[i].Callout)
      Sheet_ok.push(response[i].Sheet)
      FAIDNo_ok.push(response[i].FAIDNo)
      Room_ok.push(response[i].Room)
      SubmittalDigital_ok.push(response[i].SubmittalDigital)




    } else if (response[i].Submittal == "N A") {
      naCount_Submittal += 1
      Item_na.push(response[i].Item)
      Callout_na.push(response[i].Callout)
      Sheet_na.push(response[i].Sheet)
      FAIDNo_na.push(response[i].FAIDNo)
      Room_na.push(response[i].Room)
      SubmittalDigital_na.push(response[i].SubmittalDigital)



    } else {
      tbdCount_Submittal += 1
      Item_tbd.push(response[i].Item)
      Callout_tbd.push(response[i].Callout)
      Sheet_tbd.push(response[i].Sheet)
      FAIDNo_tbd.push(response[i].FAIDNo)
      Room_tbd.push(response[i].Room)
      SubmittalDigital_tbd.push(response[i].SubmittalDigital)





    }
    status_Submittal.push(response[i].Submittal)
    Callout.push(response[i].Callout)
    Item.push(response[i].Item)
    Sheet.push(response[i].Sheet)
    FAIDNo.push(response[i].FAIDNo)
    Room.push(response[i].Room)
    SubmittalDigital.push(response[i].SubmittalDigital)


  };


  console.log('Project Description: ', Item)
  console.log('Project Description_No: ', Item_no)
  console.log('Project Description_Yes: ', Item_yes)
  console.log('Submittal Number, YES: ', Callout_yes )
  console.log('Project Number, NO: ', Sheet_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_Submittal_bar_23');

  ///////////////////////////////////// 
  // (2-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (Submittal)
  var trace_Submittal = {
    x: ["Yes", "N A", "TBD", "OK", "No"],
    y: [yesCount_Submittal, naCount_Submittal, tbdCount_Submittal, okCount_Submittal, noCount_Submittal],
    marker: {
      color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
    },
    type: 'bar'
  };

  var data_Submittal = [trace_Submittal];

  var layout_Submittal = {
    title: "Submittal Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_Submittal_bar_23", data_Submittal, layout_Submittal);

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
      Item_x = Item_yes
      Callout_x = Callout_yes
      Sheet_x = Sheet_yes
      FAIDNo_x = FAIDNo_yes
      Room_x = Room_yes    
      SubmittalDigital_x = SubmittalDigital_yes

      console.log(Item_yes)
    }

    else if (xAxis == "N A") {
      Item_x = Item_na
      Callout_x = Callout_na     
      Sheet_x = Sheet_na
      FAIDNo_x = FAIDNo_na   
      Room_x = Room_na  
      SubmittalDigital_x = SubmittalDigital_na
      

      console.log(Item_na)
    }
    
    else if (xAxis == "TBD") {
      Item_x = Item_tbd
      Callout_x = Callout_tbd     
      Sheet_x = Sheet_tbd
      FAIDNo_x = FAIDNo_tbd  
      Room_x = Room_tbd  
      SubmittalDigital_x = SubmittalDigital_tbd  
      



      console.log(Item_tbd)
    }

    else if (xAxis == "OK") {
      Item_x = Item_ok
      Callout_x = Callout_ok   
      Sheet_x = Sheet_ok
      FAIDNo_x = FAIDNo_ok    
      Room_x = Room_ok   
      SubmittalDigital_x = SubmittalDigital_ok
      




      console.log(Item_ok)
    }

    else if (xAxis == "No") {
      Item_x = Item_no
      Callout_x = Callout_no   
      Sheet_x = Sheet_no   
      FAIDNo_x = FAIDNo_no  
      Room_x = Room_no
      SubmittalDigital_x = SubmittalDigital_no  
      



      console.log(Item_no)
    }
    else {
      "Hello"
    }

    var table_alert = '<table>'
    table_alert += "<th>FA ID_</th>"+"<th>Callout_</th>"+"<th>Sheet_</th>"+"<th>Room_</th>"+"<th>Item_</th>"+"<th>Digital</th>"
    for (var i = 0; i < Item_x.length; i++) {
      table_alert += "<tr>";
      table_alert += "<td>" + FAIDNo_x[i] + "__" +"</td>"; 
      table_alert += "<td>" + Callout_x[i] + "__" +"</td>";      
      table_alert += "<td>" + Sheet_x[i] + "__" +"</td>"; 
      table_alert += "<td>" + Room_x[i] + "__" +"</td>"; 
      table_alert += "<td>" + Item_x[i] + "__" +"</td>"; 
      table_alert += "<td>" + SubmittalDigital_x[i] + "_" +"</td>"; 
      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_Submittal_23").innerHTML = table_alert;
  })
  
});

