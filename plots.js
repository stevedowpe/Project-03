// function parseCommas(number){
//   numberMod = number.replace(",","")
//   numberMod = number.replace("$","")
//   return parseInt(numberMod)
// }


Plotly.d3.csv("SDCCD-Prop-S-N-Closeout-Checklist.csv", function(error, response) {

  console.log('RESPONSE:', response);

  var labels_list = [];
  var values_list = [];

  for (var i = 0; i < response.length; i++) {
    labels_list.push(response[i].DSA_Cert)
    // values_list.push(parseCommas(response[i].FEMA_Funded))
    values_list.push(response[i].DSA_Cert_Count)
  };

  console.log('labels_list: ', labels_list);
  console.log('values_list: ', values_list);
  console.log('values_list_int: ', values_list);


  var trace1 = {
    labels: labels_list,
    values: values_list,
    type: 'pie'
  };

  var trace2 = {
    labels: labels_list,
    values: values_list,
    type: 'pie'
  };

  var data = [trace1];
  var data2 = [trace2];

  var layout = {
    title: "SDCCD - DSA Cert Status",
    height: 300,
    width: 300
  };

  var layout2 = {
    title: "SDCCD - Test Data",
    height: 300,
    width: 300
  };

  Plotly.newPlot("plot", data, layout);
  Plotly.newPlot("plot2", data2, layout2);  
});







