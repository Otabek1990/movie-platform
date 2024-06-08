/* eslint-disable react/prop-types */


import Table from "@/components/table/Table";



function GenresUi({
    genres


}) {
    const tableDatas = {
        title: "genre",
        tableHeads: ["№", "Janr nomi", "Actions"],
        tableBodyItems: ["name_uz"],
        data: genres,

    };
  
    return (


        <div className="overflow-x-auto w-full">
            <Table tableDatas={tableDatas} />
        </div>


    );
}

export default GenresUi;
