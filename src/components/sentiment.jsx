import React from 'react';
import { Doughnut } from 'react-chartjs-2';


const Sentiment = (props) => {
    const data = props.receiveData;
    const data1 = data.data?.sentiment.overall;
    const data2 = data.data?.sentiment.negativity;
    const data3 = data.data?.sentiment.positivity;

    return (
        <div>
            {data.data?<Doughnut data={{
                labels:['overall', 'negativity', 'positivity'],
                datasets:[{
                    label: 'sentiment',
                    data:[data1,data2,data3],
                    backgroundColor:['rgba(255, 99, 132, 0.5)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1,
                }]
                    }
                }
            />:null
            }

        </div>

    )
}

export default Sentiment;