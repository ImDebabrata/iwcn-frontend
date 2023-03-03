const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
function Form() {
  const { useState } = React;
  const [data, setData] = useState([
    {
      heading: "Onboarding Call",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Google Search console access",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Google analytics access",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Website access",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Technical Audit",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Ancor text and sementic analysis",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Computer analysis",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Anchor text and/URL mapping",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Google data studio report + Local Reporting Suite",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Site level optimization",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "On Page Optimization",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Content Creation",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Content publishing",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Premium press release",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Authority Niche placements",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Review Management",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Index Links",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
    {
      heading: "Video Recap",
      col1: "",
      col2: "",
      col3: "",
      col4: "",
      col5: "",
      col6: "",
    },
  ]);
  const handleChange = (e, rowIndex) => {
    const { name, value } = e.target;
    const newData = Array.from(data);
    newData[rowIndex][name] = value;
    setData(newData);
    // console.log(data);
  };
  const handlePostData = async () => {
    fetch("https://dummyjson.com/posts/add", {
      //dummy api
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data,
      }),
    })
      .then((res) => res.json())
      .then(console.log);
  };
  return (
    <table>
      <tbody>
        {data.map((item, rowIndex) => {
          return (
            <tr key={rowIndex}>
              <th>{item.heading}</th>
              <td>
                <input
                  type="text"
                  name="col1"
                  onChange={(e) => handleChange(e, rowIndex)}
                  onBlur={handlePostData}
                  value={item.col1}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="col2"
                  onChange={(e) => handleChange(e, rowIndex)}
                  onBlur={handlePostData}
                  value={item.col2}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="col3"
                  onChange={(e) => handleChange(e, rowIndex)}
                  onBlur={handlePostData}
                  value={item.col3}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="col4"
                  onChange={(e) => handleChange(e, rowIndex)}
                  onBlur={handlePostData}
                  value={item.col4}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="col5"
                  onChange={(e) => handleChange(e, rowIndex)}
                  onBlur={handlePostData}
                  value={item.col5}
                />
              </td>
              <td>
                <input
                  type="text"
                  name="col6"
                  onChange={(e) => handleChange(e, rowIndex)}
                  onBlur={handlePostData}
                  value={item.col6}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

root.render(<Form />);
