import "./styles.css";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Legend,
  Tooltip
} from "recharts";
export default function App() {
  const data = [
    { name: "A", value: 0, value2: 0 },
    { name: "B", value: 150, value2: 220 },
    { name: "C", value: 50, value2: 40 },
    { name: "D", value: 200, value2: 110 }
  ];
  function Demo({ active, payload, label }) {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            backgroundColor: "white",
            padding: "5px",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div>
            <p>{label}</p>
            {payload.map((x) => {
              return (
                <>
                  <div style={{ display: "flex" }}>
                    <p style={{ color: x.fill }}>{x.name}</p>
                    <p>: </p>
                    <p>{x.value}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      );
    }
  }
  return (
    <div className="App">
      a
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={data}>
          <Area
            type="monotone"
            dataKey="value"
            stroke="red"
            fill="red"
            stackId={1}
            strokeWidth={1}
          />
          <Area
            type="monotone"
            dataKey="value2"
            stroke="red"
            fill="red"
            stackId={1}
            strokeDasharray={4}
            strokeWidth={1}
            fillOpacity={0.2}
          />

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            content={<Demo />}
            formatter={(v, l) => {
              return <span>{v}</span>;
            }}
          />
          <Legend
            iconType="square"
            formatter={(v) => {
              return <span style={{ color: "black" }}>{v}</span>;
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
