/* eslint-disable react/prop-types */

import TableRow from "./TableRow";

function Table({ tableDatas }) {
    console.log(tableDatas)
    const { title, tableHeads, tableBodyItems, data } = tableDatas;

    return (
        <div className="overflow-x-auto">


            <table className=" table-bordered  divide-y w-full">
                <thead className="w-full">
                    <tr>
                        {tableHeads.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    {data?.map((dataItem, index) => (
                        <TableRow
                            index={index}
                            tableBodyItems={tableBodyItems}
                            title={title}
                            dataItem={dataItem}
                            key={index}


                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;
