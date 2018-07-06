// function parseCommas(number){
//   numberMod = number.replace(",","")
//   numberMod = number.replace("$","")
//   return parseInt(numberMod)
// }
  // values_list.push(parseCommas(response[i].FEMA_Funded))
  // console.log('values_list_int: ', values_list_DSA);

Plotly.d3.csv("SDCCD-Prop-S-N-Closeout-Checklist.csv", function(error, response) {

  console.log('RESPONSE:', response);

  var labels_list_DSA = [];
  var values_list_DSA = [];
  var labels_list_LEED = [];
  var values_list_LEED = [];
  var color_list_DSA = [];
  var color_list_LEED = [];

  for (var i = 0; i < response.length; i++) {
    labels_list_DSA.push(response[i].DSA_Cert)
    values_list_DSA.push(response[i].DSA_Cert_Count)
    // color_list_DSA.push(response[i].DSA_Color)
    labels_list_LEED.push(response[i].LEED_Cert)
    values_list_LEED.push(response[i].LEED_Cert_Count)    
    color_list_DSA.push(response[i].DSA_Cert=="Yes", "rgb(84, 232, 25)")
    color_list_DSA.push(response[i].DSA_Cert=="No", "rgb(229, 133, 133)")
    color_list_DSA.push(response[i].DSA_Cert=="N/A", "rgb(180, 183, 179)")    
    color_list_DSA.push(response[i].DSA_Cert=="TBD", "rgb(248, 252, 0)")
    color_list_DSA.push(response[i].DSA_Cert=="OK (No)", "rgb(0, 214, 252)")     
    
    color_list_LEED.push(response[i].LEED_Cert=="Yes", "rgb(84, 232, 25)")
    color_list_LEED.push(response[i].LEED_Cert=="No", "rgb(229, 133, 133)")
    color_list_LEED.push(response[i].LEED_Cert=="N/A", "rgb(180, 183, 179)")    
    color_list_LEED.push(response[i].LEED_Cert=="TBD", "rgb(248, 252, 0)")
    color_list_LEED.push(response[i].LEED_Cert=="OK (No)", "rgb(0, 214, 252)")         



  };

  console.log('DSA labels_list: ', labels_list_DSA);
  console.log('DSA values_list: ', values_list_DSA);
  console.log('DSA colors_list: ', color_list_DSA);
  console.log('LEED labels_list: ', labels_list_LEED);
  console.log('LEED values_list: ', values_list_LEED);

  var trace_DSA = {
    labels: labels_list_DSA,
    values: values_list_DSA,
    type: 'pie',
    marker: {colors: color_list_DSA}

  };

  var trace_LEED = {
    labels: labels_list_LEED,
    values: values_list_LEED,
    type: 'pie',
    marker: {colors:color_list_LEED}
    // color: "N/A" = "blue"
  };

  var data_DSA = [trace_DSA];
  var data_LEED = [trace_LEED];

  var layout_DSA = {
    title: "DSA Cert Status",
    height: 350,
    width: 350,
    // colors = ['#FEBFB3', '#E1396C', '#96D38C', '#D0F9B1', "blue"]
  };

  var layout_LEED = {
    title: "LEED Cert Status",
    height: 350,
    width: 350
  };

  Plotly.newPlot("plot_DSA", data_DSA, layout_DSA);
  Plotly.newPlot("plot_LEED", data_LEED, layout_LEED);  

  // myPlot.on('plotly_click', function(popuptable){
  //   var pts = '';
  //   for(var i=0; i < popuptable.points.length; i++){
  //       pts = 'x = '+popuptable.points[i].x +'\ny = '+
  //           popuptable.points[i].y.toPrecision(4) + '\n\n';
  //   }



});



function popuptable(){ 

}



