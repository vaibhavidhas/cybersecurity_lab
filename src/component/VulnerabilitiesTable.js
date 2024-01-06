import React from "react";
import { Link } from "react-router-dom";
import vulnerabilitiesData from "../jsonFiles/VulnerabilitiesData.json"; // Assuming you have your JSON data in a file named 'vulnerabilities.json'
import "../styling/VulnerabilitiesTable.css"
const VulnerabilitiesTable = () => {
  return (
    <div className="tableContainer" id="scrollVulnerabilities">
  
      <table className="tableRows">
        <thead>
          <tr>
            <th>CVE Number</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {vulnerabilitiesData.map((vulnerability, index) => (
            <tr className="rowData"key={index}>
              <td>{vulnerability.cveNumber}</td>
              <td>
                <Link to={vulnerability.link}>{vulnerability.details}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VulnerabilitiesTable;
