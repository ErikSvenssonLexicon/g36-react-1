
const TableHead = (props) => {
  const tableHeaders = props.headers.map((header) => (
    <th key={header} scope="col">
      {header}
    </th>
  ));

  return (
    <thead>
      <tr>{tableHeaders}</tr>
    </thead>
  );
};

export default TableHead;
