import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Label, ResponsiveContainer } from 'recharts';

const LineChartComponent = ({ weights }) => {
  // Helper function to format date and add one day
  const formatDateWithOffset = (date) => {
    // Create a new Date object based on the original date
    const newDate = new Date(date);
    // Add one day (in milliseconds)
    newDate.setDate(newDate.getDate() + 1);
    return newDate.toLocaleDateString(); // Format to locale date string
  };

  return (
    <div>
      {weights.length > 0 ? (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={weights}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={(entry) => formatDateWithOffset(entry.date)}>
              <Label value="Date" offset={0} position="bottom" />
            </XAxis>
            <YAxis>
              <Label value="Weight (kg)" angle={-90} position="insideLeft" style={{ textAnchor: 'middle' }} />
            </YAxis>
            <Tooltip />
            <Line type="monotone" dataKey="weight" stroke="#ff7300" fill="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>No weight data available for the selected pet.</p>
      )}
    </div>
  );
};

export default LineChartComponent;