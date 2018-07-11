// function parseCommas(number){
//   numberMod = number.replace(",","")
//   numberMod = number.replace("$","")
//   return parseInt(numberMod)
// }
  // values_list.push(parseCommas(response[i].FEMA_Funded))
  // console.log('values_list_int: ', values_list_DSA);

Plotly.d3.csv("SDCCD-Program-Equipment-Data.csv", function(error, response) {

  console.log('RESPONSE:', response);

  var labels_list_warranty = [];
  var values_list_warranty = [];


  for (var i = 0; i < response.length; i++) {
    labels_list_warranty.push(response[i].Warranty)
    values_list_warranty.push(response[i].Warranty_Count)

  };

  console.log('warranty labels : ', labels_list_warranty);
  console.log('warranty values : ', values_list_warranty);

  var trace_warranty = {
    labels: labels_list_warranty,
    values: values_list_warranty,
    type: 'pie',
    rotation: 180,
    // marker: {colors: color_list_DSA}

  };

  var data_warranty = [trace_warranty];

  var layout_warranty = {
    title: "Equipment Warranty Confirmation",
    height: 350,
    width: 350,
    // colors = ['#FEBFB3', '#E1396C', '#96D38C', '#D0F9B1', "blue"]
  };



  Plotly.newPlot("plot_warranty", data_warranty, layout_warranty);


  // myPlot.on('plotly_click', function(popuptable){
  //   var pts = '';
  //   for(var i=0; i < popuptable.points.length; i++){
  //       pts = 'x = '+popuptable.points[i].x +'\ny = '+
  //           popuptable.points[i].y.toPrecision(4) + '\n\n';
  //   }



});



function popuptable(){ 

}



