// (1) READ IN CSV FILE

Plotly.d3.csv("output/SDCCD-Equipment-DataBuild-11220-CSI26.csv", function (error, response) {
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

  var Item = [];
  var Item_yes = [];
  var Item_no = [];
  var Item_ok = [];
  var Item_na = [];
  var Item_tbd = [];


  var status_OM = [];
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

  var OMBinderNo = [];
  var OMBinderNo_x =[];
  var OMBinderNo_yes = [];
  var OMBinderNo_no = [];
  var OMBinderNo_ok = [];
  var OMBinderNo_na = [];
  var OMBinderNo_tbd = [];


  var OMTabNo = [];
  var OMTabNo_x =[];
  var OMTabNo_yes = [];
  var OMTabNo_no = [];
  var OMTabNo_ok = [];
  var OMTabNo_na = [];
  var OMTabNo_tbd = [];


  var OMDigital = [];
  var OMDigital_x =[];
  var OMDigital_yes = [];
  var OMDigital_no = [];
  var OMDigital_ok = [];
  var OMDigital_na = [];
  var OMDigital_tbd = [];

  ///////////////////////////////////////
  // (2-B1) LOOP THROUGH RESPONSES AND PUSH VALUES TO ARRAYS
  for (var i = 0; i < response.length; i++) {
    if (response[i].OM == "Yes") {
      yesCount_OM += 1
      Item_yes.push(response[i].Item)
      Callout_yes.push(response[i].Callout)
      Sheet_yes.push(response[i].Sheet)
      FAIDNo_yes.push(response[i].FAIDNo)
      Room_yes.push(response[i].Room)
      OMBinderNo_yes.push(response[i].OMBinderNo)
      OMTabNo_yes.push(response[i].OMTabNo)
      OMDigital_yes.push(response[i].OMDigital)


    } else if (response[i].OM == "No") {
      noCount_OM += 1
      Item_no.push(response[i].Item)
      Callout_no.push(response[i].Callout)
      Sheet_no.push(response[i].Sheet)
      FAIDNo_no.push(response[i].FAIDNo)
      Room_no.push(response[i].Room)
      OMBinderNo_no.push(response[i].OMBinderNo)
      OMTabNo_no.push(response[i].OMTabNo)
      OMDigital_no.push(response[i].OMDigital)



    } else if (response[i].OM == "OK") {
      okCount_OM += 1
      Item_ok.push(response[i].Item)
      Callout_ok.push(response[i].Callout)
      Sheet_ok.push(response[i].Sheet)
      FAIDNo_ok.push(response[i].FAIDNo)
      Room_ok.push(response[i].Room)
      OMBinderNo_ok.push(response[i].OMBinderNo)
      OMTabNo_ok.push(response[i].OMTabNo)
      OMDigital_ok.push(response[i].OMDigital)




    } else if (response[i].OM == "N A") {
      naCount_OM += 1
      Item_na.push(response[i].Item)
      Callout_na.push(response[i].Callout)
      Sheet_na.push(response[i].Sheet)
      FAIDNo_na.push(response[i].FAIDNo)
      Room_na.push(response[i].Room)
      OMBinderNo_na.push(response[i].OMBinderNo)
      OMTabNo_na.push(response[i].OMTabNo)
      OMDigital_na.push(response[i].OMDigital)



    } else {
      tbdCount_OM += 1
      Item_tbd.push(response[i].Item)
      Callout_tbd.push(response[i].Callout)
      Sheet_tbd.push(response[i].Sheet)
      FAIDNo_tbd.push(response[i].FAIDNo)
      Room_tbd.push(response[i].Room)
      OMBinderNo_tbd.push(response[i].OMBinderNo)
      OMTabNo_tbd.push(response[i].OMTabNo)
      OMDigital_tbd.push(response[i].OMDigital)





    }
    status_OM.push(response[i].OM)
    Callout.push(response[i].Callout)
    Item.push(response[i].Item)
    Sheet.push(response[i].Sheet)
    FAIDNo.push(response[i].FAIDNo)
    Room.push(response[i].Room)
    OMBinderNo.push(response[i].OMBinderNo)
    OMTabNo.push(response[i].OMTabNo)
    OMDigital.push(response[i].OMDigital)


  };


  console.log('Project Description: ', Item)
  console.log('Project Description_No: ', Item_no)
  console.log('Project Description_Yes: ', Item_yes)
  console.log('OM Number, YES: ', Callout_yes )
  console.log('Project Number, NO: ', Sheet_no)

  ///////////////////////////////////// 
  // (2-D?) SET PARTIAL INFO FOR CLICK-EVENT
  var myPlot = document.getElementById('plot_OM_bar_26');

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
    title: "OM Status",
    height: 350,
    width: 350,
  };
  Plotly.newPlot("plot_OM_bar_26", data_OM, layout_OM);

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
      OMBinderNo_x = OMBinderNo_yes          
      OMTabNo_x = OMTabNo_yes         
      OMDigital_x = OMDigital_yes   

      console.log(Item_yes)
    }

    else if (xAxis == "N A") {
      Item_x = Item_na
      Callout_x = Callout_na     
      Sheet_x = Sheet_na
      FAIDNo_x = FAIDNo_na   
      Room_x = Room_na  
      OMBinderNo_x = OMBinderNo_na          
      OMTabNo_x = OMTabNo_na         
      OMDigital_x = OMDigital_na         
      

      console.log(Item_na)
    }
    
    else if (xAxis == "TBD") {
      Item_x = Item_tbd
      Callout_x = Callout_tbd     
      Sheet_x = Sheet_tbd
      FAIDNo_x = FAIDNo_tbd  
      Room_x = Room_tbd  
      OMBinderNo_x = OMBinderNo_tbd          
      OMTabNo_x = OMTabNo_tbd         
      OMDigital_x = OMDigital_tbd          
      



      console.log(Item_tbd)
    }

    else if (xAxis == "OK") {
      Item_x = Item_ok
      Callout_x = Callout_ok   
      Sheet_x = Sheet_ok
      FAIDNo_x = FAIDNo_ok    
      Room_x = Room_ok   
      OMBinderNo_x = OMBinderNo_ok          
      OMTabNo_x = OMTabNo_ok         
      OMDigital_x = OMDigital_ok          
      




      console.log(Item_ok)
    }

    else if (xAxis == "No") {
      Item_x = Item_no
      Callout_x = Callout_no   
      Sheet_x = Sheet_no   
      FAIDNo_x = FAIDNo_no  
      Room_x = Room_no
      OMBinderNo_x = OMBinderNo_no          
      OMTabNo_x = OMTabNo_no         
      OMDigital_x = OMDigital_no          
      



      console.log(Item_no)
    }
    else {
      "Hello"
    }

    var table_alert = '<table>'
    table_alert += "<th>FA ID_</th>"+"<th>Callout_</th>"+"<th>Sheet_</th>"+"<th>Room_</th>"+"<th>Item_</th>"+"<th>Digital_</th>"+"<th>BinderNo_</th>"+"<th>TabNo_</th>"
    for (var i = 0; i < Item_x.length; i++) {
      table_alert += "<tr>";
      table_alert += "<td>" + FAIDNo_x[i] +"__"+"</td>"; 
      table_alert += "<td>" + Callout_x[i] +"__"+"</td>";      
      table_alert += "<td>" + Sheet_x[i] +"__"+"</td>"; 
      table_alert += "<td>" + Room_x[i] +"__"+"</td>"; 
      table_alert += "<td>" + Item_x[i] +"__"+"</td>";    
      table_alert += "<td>" + OMDigital_x[i] +"__"+"</td>";            
      table_alert += "<td>" + OMBinderNo_x[i] +"__"+"</td>";       
      table_alert += "<td>" + OMTabNo_x[i] +"__"+"</td>";        


      table_alert += "</tr>";
    }
    table_alert += "</table>";

    document.getElementById("populating_table_OM_26").innerHTML = table_alert;
  })
  
});

