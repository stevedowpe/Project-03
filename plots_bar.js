// (1) READ IN CSV FILE

Plotly.d3.csv("SDCCD-Program-Close-Data.csv", function (error, response) {
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

      var status_DSA = [];
      var DSANumber = [];
      var ProjectDescription = [];

      ///////////////////////////////////////
      // (2-B) LOOP THROUGH RESPONSES AND PUSH VALUES TO ARRAYS
      for (var i = 0; i < response.length; i++) {
        if (response[i].DSA == "Yes") {
          yesCount_DSA += 1
        } else if (response[i].DSA == "No") {
          noCount_DSA += 1
        } else if (response[i].DSA == "OK") {
          okCount_DSA += 1
        } else if (response[i].DSA == "N A") {
          naCount_DSA += 1
        } else {
          tbdCount_DSA += 1
        }
        status_DSA.push(response[i].DSA)
        DSANumber.push(response[i].DSANumber)
        ProjectDescription.push(response[i].ProjectDescription)
      };

      ///////////////////////////////////////
      // (2-C) MISC INFO TO CONSOLE LOG
      console.log('DSA Status : ', status_DSA)
      console.log('DSA Number: ', DSANumber)
      console.log('Project Description: ', ProjectDescription)

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

      ///////////////////////////////////// 
      // (2-F) ATTEMPT TO BIND A POP-UP TO THE BAR CHART (DSA)

      myPlot.on('plotly_click', function (data) {
        var pts = '';
        for (var i = 0; i < data.points.length; i++) {
          pts = 'x = ' + data.points[i].x +
            '\ny = ' + data.points[i].y.toPrecision(2) +
            '\nDSA # = ' + ProjectDescription[10] +
            '\n\n';
        }
        alert('Closest point clicked:\n\n' + pts);
      });

      // function popuptable(){ 


      ////////////////////////////////////////
      ////////////////////////////////////////
      ///////////////////////////////////////

      // (3) LEED CHART
      // (3-A) SET BLANK VARIABLE ARRAYS
      var yesCount_LEED = 0
      var noCount_LEED = 0
      var okCount_LEED = 0
      var naCount_LEED = 0
      var tbdCount_LEED = 0

      var status_LEED = [];


      ///////////////////////////////////////
      // (3-B) LOOP THROUGH RESPONSES AND PUSH VALUES TO ARRAYS
      for (var i = 0; i < response.length; i++) {
        if (response[i].LEED == "Yes") {
          yesCount_LEED += 1
        } else if (response[i].LEED == "No") {
          noCount_LEED += 1
        } else if (response[i].LEED == "OK") {
          okCount_LEED += 1
        } else if (response[i].LEED == "N A") {
          naCount_LEED += 1
        } else {
          tbdCount_LEED += 1
        }
        status_LEED.push(response[i].LEED)
      };

      ///////////////////////////////////////
      // (3-C) MISC INFO TO CONSOLE LOG
      console.log('LEED Status : ', status_LEED)


      ///////////////////////////////////// 
      // (3-D?) SET PARTIAL INFO FOR CLICK-EVENT
      var myPlot = document.getElementById('plot_LEED_bar');

      ///////////////////////////////////// 
      // (3-E) SET BAR CHART DATA AND LAYOUT... AND RUN PLOTLY  (LEED)
      var trace_LEED = {
        x: ["Yes", "N A", "TBD", "OK", "No"],
        y: [yesCount_LEED, naCount_LEED, tbdCount_LEED, okCount_LEED, noCount_LEED],
        marker: {
          color: ['green', 'grey', 'royalblue', 'deeppink', 'crimson']
        },
        type: 'bar'
      };

      var data_LEED = [trace_LEED];

      var layout_LEED = {
        title: "LEED Cert Status",
        height: 350,
        width: 350,
      };
      Plotly.newPlot("plot_LEED_bar", data_LEED, layout_LEED);

      ///////////////////////////////////// 
      // (3-F) ATTEMPT TO BIND A POP-UP TO THE BAR CHART (LEED)

      myPlot.on('plotly_click', function (data) {
        var pts = '';
        for (var i = 0; i < data.points.length; i++) {
          pts = 'x = ' + data.points[i].x +
            '\ny = ' + data.points[i].y.toPrecision(2) +
            '\n\n';
        }
        alert('Closest point clicked:\n\n' + pts);
      });

      // function popuptable(){ 
});