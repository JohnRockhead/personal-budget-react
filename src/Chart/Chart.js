import React from 'react';
import {Pie} from 'react-chartjs-2';
import axios from 'axios';

const dataSource = {
    datasets: [
        {
            data: [],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#301914',
                '#83F4D7',
                '#DC8DEA',
            ],
        }
    ],
    labels: []
};

/*
function createChart() {
    var ctx = document.getElementById("myChart").getContext("2d");
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: dataSource
    });
}
*/

function getBudget() {
    axios.get('http://localhost:4000/budget')
    .then(function (res) {
        console.log(res);
        for (var i = 0; i < res.data.myBudget.length; i++) {
            dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
            dataSource.labels[i] = res.data.myBudget[i].title;
        }
    });
}

getBudget(); 

export default class Chart extends React.Component {
    render() {
      return (
        <div>
          <Pie
            data={dataSource}
            options={{
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      );
    }
  }
