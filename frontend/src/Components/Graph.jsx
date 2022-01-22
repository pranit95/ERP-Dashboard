import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';
import styles from "./Styles/graph.module.css"

const data = [
    {quarter: 1, earnings: 500000},
    {quarter: 2, earnings: 1000000},
    {quarter: 3, earnings: 15000000},
    {quarter: 4, earnings: 20000000},
    {quarter: 5, earnings: 40000000}
  ];

  let style = {

  }

const Graph = () =>  {
  
    return (
    <div className={styles.container}>
      <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4,5]}
          tickFormat={["10", "11","12","13", "14"]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}`)}
        />
        <VictoryBar
          data={data}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>

    </div>
    )
}

export default Graph;
