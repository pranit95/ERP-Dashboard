import React from "react";
import Paper from '@material-ui/core/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    BarSeries,
} from '@devexpress/dx-react-chart-material-ui';


const Graph = () => {

// Sample data
const data = [
        { argument: 'Monday', value: 30 },
        { argument: 'Tuesday', value: 20 },
        { argument: 'Wednesday', value: 10 },
        { argument: 'Thursday', value: 50 },
        { argument: 'Friday', value: 60 },
        ];  

return (
    <>
        <Paper style={{width:"90%", margin:"auto", height:"55%"}}>
            
        </Paper>
    </>
);
}

export default Graph;
