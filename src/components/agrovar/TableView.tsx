import { TechnicalDataType } from "@/graphql/QueryTypes";
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

let defaultData: TechnicalDataType[] = [];

const columnHelper = createColumnHelper<TechnicalDataType>();
const columns = [
  columnHelper.accessor("documentId", {
    header: () => <span>Nro. ensayo</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("location", {
    header: () => <span>Localidad</span>,
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("latitude", {
    header: () => <i>Lat</i>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("longitude", {
    header: () => <i>Lon</i>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("paperType", {
    header: () => <span>Tipo de ensayo</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("paperReference", {
    header: () => <span>Referencia</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("paperRepetition", {
    header: () => <span>Repeticion del ensayo</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("year", {
    header: () => <span>Campaña</span>,
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("paperFk.paperId", {
    header: () => <span>Nro. Variedad Ensayo</span>,
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("paperFk.variety", {
    header: () => <span>Variedad</span>,
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("paperFk.grainsCount", {
    header: () => <span>Conteo de granos</span>,
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("paperFk.grainsPerSpike", {
    header: () => <span>Granos por espiga</span>,
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("paperFk.weightPerThousand", {
    header: () => <span>Peso por mil granos</span>,
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("paperFk.humidityPercentage", {
    header: () => <span>Porcentaje de humedad</span>,
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("paperFk.performance", {
    header: () => <span>Rendimiento</span>,
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("paperFk.relativePerformance", {
    header: () => <span>Rendimiento relativo</span>,
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("paperFk.ph", {
    header: () => <span>PH</span>,
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("paperFk.proteinsPercentage", {
    header: () => <span>Porcentaje de proteinas</span>,
    cell: (info) => <i>{info.getValue()}</i>,
    footer: (info) => info.column.id,
  }),
];

export function TableViewComponent() {
  const [tableData, setTableData] = useState(() => [...defaultData]);
  const consumableTable = useReactTable({
    tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead></thead>
      <tbody></tbody>
      <tfoot></tfoot>
    </table>
  );
}
