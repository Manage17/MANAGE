//消费情况图表
var data = {
   labels: [
       "Red",
       "Blue",
       "Yellow"
   ],
   datasets: [
       {
           data: [12, 14, 20],
           backgroundColor: [
               "#FF6384",
               "#36A2EB",
               "#FFCE56"
           ],
           hoverBackgroundColor: [
               "#FF6384",
               "#36A2EB",
               "#FFCE56"
           ]
       }]
};

// Get the context of the canvas element we want to select
var ctx = document.getElementById("myChart").getContext("2d");
var myBarChart = new Chart(ctx, {
                                   type: 'doughnut',
                                   data: data,
                                   // options: options
                                });



//代付情况图表
var data2 = {
     labels: [
         "xxx",
         "xxx",
         "xxx"
     ],
     datasets: [
         {
             data: [10, 20, 10],
             backgroundColor: [
                 "#E41515",
                 "#7A67A9",
                 "#43B8E4"
             ],
             hoverBackgroundColor: [
                 "#E41515",
                 "#7A67A9",
                 "#43B8E4"
             ]
         }]
};
var ctx2 = document.getElementById("myChart2").getContext("2d");
var myBarChart2 = new Chart(ctx2, {
                                    type: 'doughnut',
                                    data: data2,
                                    // options: options
                                  });