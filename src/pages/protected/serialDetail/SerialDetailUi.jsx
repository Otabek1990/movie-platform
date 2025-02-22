/* eslint-disable react/prop-types */

import { Button } from "@/components/ui/button"
import { baseUrl } from "@/constants";
import { sliceText } from "@/lib/sliceText"
import AddSerialForm from "./AddSerialForm";
import SerialVideos from "./SerialVideos";


function SerialDetailUi({ serialDetail }) {
    console.log(serialDetail)
    const { cadre, id, category, name, rejisor, main_users,
        series_qty, series,
        trailer, trailer_url, year, description, genre, main_image } = serialDetail;

    const showTrailerVideo = () => {
        if (!trailer_url || !trailer_url?.startsWith("http")) {
            alert("Trailer linki kiritilmagan!");
            return;
        }
        window.open(trailer_url, '_blank')
    }

    return (
        <div className="w-full my-3">
            <div className=" w-full flex flex-col items-start md:flex-row md:items-stretch  border-b border-gray-700 pb-4   gap-3   ">
                <img className="col-span-1  w-full md:w-80  object-cover" src={main_image} alt={name} />
                <div className=" col-span-1 h-full flex-1   flex flex-col items-start  gap-1 font-semibold text-md md:text-lg md:col-span-2">
                    <h3>
                        Nomi: <span className="font-bold capitalize">
                            {name}
                        </span>
                    </h3>
                    <h3>
                        Kategoriya: <span className="font-bold capitalize">
                            {category?.name}
                        </span>
                    </h3>
                    <h3>
                        Janr: <span className="font-bold capitalize">
                            {genre?.name}
                        </span>
                    </h3>
                    <h3>
                        Rejissor: <span className="font-bold capitalize">
                            {rejisor}
                        </span>
                    </h3>
                    <h3>
                        Bosh rollarda: <span className="font-bold capitalize">
                            {main_users}
                        </span>
                    </h3>

                    <h3>
                        Qismlar soni: <span className="font-bold capitalize">
                            {series_qty}
                        </span>
                    </h3>


                    <h3>
                        Serial haqida: <span className="font-bold capitalize">
                            {sliceText(description, 100)}
                        </span>
                    </h3>
                    <h3>
                        Yili: <span className="font-bold capitalize">
                            {year}
                        </span>
                    </h3>
                    <Button
                        onClick={showTrailerVideo}
                        className="text-md bg-indigo-600 hover:bg-indigo-700 text-white">
                        Trailerni ko&apos;rish
                    </Button>



                </div>
            </div>

            <div className="my-2 border-b border-gray-700 pb-4 ">
                <h1 className="font-bold text-xl">
                    Serial traileri {" "}
                    {(!trailer || !trailer?.startsWith("http")) && (
                        <span> kiritilmagan</span>
                    )}
                </h1>
                {(trailer && trailer?.startsWith("http")) && (
                    <div className="w-full md:w-2/3 my-2 h-80">
                        <video className="h-full w-full " controls src={trailer}>
                        </video>
                    </div>
                )}

            </div>

            <div className="my-2 border-b border-gray-700 pb-4 ">


                {
                    (series && series?.length > 0) ? <SerialVideos series={series} />
                        : <h1 className="font-bold text-xl">Qismlar mavjud emas</h1>
                }
            </div>
            <div className="border-b border-gray-700 pb-4">
                <h1 className="font-bold my-2 text-xl">
                    Serialdan kadrlar {""}
                    {
                        (!cadre || cadre?.length === 0) &&
                        <span>
                            mavjud emas
                        </span>
                    }
                </h1>
                {
                    (cadre && cadre.length > 0) && (
                        <div className="w-full grid grid-cols-2 gap-2 md:grid-cols-3">
                            {cadre.map(item => (
                                <img className="h-64 w-full object-cover" key={item.id} src={`${baseUrl}${item.image}`} alt="" />
                            ))}
                        </div>
                    )
                }

                <div>
                </div>

            </div>
            <div className="w-full bg-slate-200 my-2 p-4 md:w-2/3 flex flex-col gap-2 items-start font-semibold">
                <h1 className="text-lg">Seriya qo&apos;shish</h1>
                <AddSerialForm parent_id={id} />
            </div>


        </div>
    )
}

export default SerialDetailUi
