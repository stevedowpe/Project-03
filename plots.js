Plotly.d3.csv("SDCCD-Program-Close-Data.csv", function(error, response) {
  console.log('RESPONSE:', response);

  // set blank variable arrays
  var labels_DSA = [];
  var values_DSA = [];
  var color_DSA = [];

  var labels_LEED = [];
  var values_LEED = [];
  var color_LEED = [];

  var labels_GIS = [];
  var values_GIS = [];
  var color_GIS = [];

  // loop through responses and push values to arrays ////////////////////////
  for (var i = 0; i < response.length; i++) {
    labels_DSA.push(response[i].DSA)
    values_DSA.push(response[i].DSA_Count)
    labels_LEED.push(response[i].LEED)
    values_LEED.push(response[i].LEED_Count)
    labels_GIS.push(response[i].GIS)
    values_GIS.push(response[i].GIS_Count)     

    

  // attempt to set colors in pie chart based on category filter
    // color_DSA.push(response[i].DSA="Yes", "LightGreen")
    // color_DSA.push(response[i].DSA="No", "Tomato")
    // color_DSA.push(response[i].DSA="OK", "LightSkyBlue")  
    // color_DSA.push(response[i].DSA="N A", "LightGrey")    
    // color_DSA.push(response[i].DSA="TBD", "Yellow")

    // color_LEED.push(response[i].DSA=="Yes", "LightGreen")
    // color_LEED.push(response[i].DSA=="No", "Tomato")
    // color_LEED.push(response[i].DSA=="TBD", "Yellow")
    // color_LEED.push(response[i].DSA=="OK", "LightSkyBlue")  
    // color_LEED.push(response[i].DSA=="N A", "LightGrey")        
  };

  console.log('DSA labels: ', labels_DSA);
  console.log('DSA values: ', values_DSA);
  // console.log('DSA colors: ', color_DSA);
  console.log('LEED label: ', labels_LEED);
  console.log('LEED values: ', values_LEED);
  // console.log('LEED colors: ', color_LEED);
  console.log('GIS label: ', labels_GIS);
  console.log('GIS values: ', values_GIS);



  // Set DSA Pie chart //////////////////////////////////////////////////////
  var trace_DSA = {
    labels: labels_DSA,
    values: values_DSA,
    type: 'pie',
    marker: {colors: color_DSA}
  };
  var data_DSA = [trace_DSA];
  var layout_DSA = {
    title: "DSA Cert Status",
    height: 375,
    width: 375,
  };
  Plotly.newPlot("plot_DSA", data_DSA, layout_DSA);

  // Set LEED Pie chart /////////////////////////////////////////////////////
  var trace_LEED = {
    labels: labels_LEED,
    values: values_LEED,
    type: 'pie',
    marker: {colors:color_LEED}
  };
  var data_LEED = [trace_LEED];
  var layout_LEED = {
    title: "LEED Cert Status",
    height: 375,
    width: 375,
  };
  Plotly.newPlot("plot_LEED", data_LEED, layout_LEED);  


  // Set GIS Pie chart /////////////////////////////////////////////////////
  var trace_GIS = {
    labels: labels_GIS,
    values: values_GIS,
    type: 'pie',
    marker: {colors:color_GIS}
  };
  var data_GIS = [trace_GIS];
  var layout_GIS = {
    title: "GIS Cert Status",
    height: 375,
    width: 375,
  };
  Plotly.newPlot("plot_GIS", data_GIS, layout_GIS);  


  // Attempt to bind a pop-up to the pie chart
  // myPlot.on('plotly_click', function(popuptable){
  //   var pts = '';
  //   for(var i=0; i < popuptable.points.length; i++){
  //       pts = 'x = '+popuptable.points[i].x +'\ny = '+
  //           popuptable.points[i].y.toPrecision(4) + '\n\n';
  //   }

});

function popuptable(){ 
};

