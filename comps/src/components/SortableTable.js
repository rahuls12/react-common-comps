import Table from "./Table";

export default function SortableTable(props) {
  const { config } = props;
  const updatedConfig = config.map((c) => {
    if (!c.sortValue) {
      return c;
    }
    return {
      ...c,
      header: () => <th>{c.label} is sortable</th>,
    };
  });
  // props has a config property in it but
  // it will be over written by config
  // declared post {...props}
  return <Table {...props} config={updatedConfig} />;
}
