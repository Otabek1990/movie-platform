/* eslint-disable react/prop-types */


import Table from "@/components/table/Table";



function CategoryUi({
    categories,


}) {
    const tableDatas = {
        title: "category",
        tableHeads: ["№", "Kategoriya nomi", "Actions"],
        tableBodyItems: ["name_uz"],
        data: categories,

    };
    console.log(categories)
    return (


        <div className="overflow-x-auto w-full">
            <Table tableDatas={tableDatas} />
        </div>


    );
}

export default CategoryUi;
