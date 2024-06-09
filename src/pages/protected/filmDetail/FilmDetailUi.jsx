/* eslint-disable react/prop-types */

import { Button } from "@/components/ui/button"
import { baseUrl } from "@/constants";
import { sliceText } from "@/lib/sliceText"


function FilmDetailUi({ cinemaDetail }) {
  const { cadre, id, category, name_uz, rejisor, main_users, trailer, trailer_url, year, video, description, genre, main_image } = cinemaDetail;

  const showTrailerVideo = () => {
    if (!trailer_url || !trailer_url?.startsWith("http")) {
      alert("Trailer linki kiritilmagan!");
      return;
    }
    window.open(trailer_url, '_blank')
  }

  return (
    <div className="w-full my-3">
      <div className=" w-full flex flex-col md:flex-row items-start border-b border-gray-700 pb-4   gap-3   ">
        <img className="col-span-1 h-64 w-full md:w-80  object-cover" src={main_image} alt={name} />
        <div className=" col-span-1 h-full flex-1   flex flex-col items-start  gap-1 font-semibold text-md md:text-lg md:col-span-2">
          <h3>
            Nomi: <span className="font-bold capitalize">
              {name_uz}
            </span>
          </h3>
          <h3>
            Kategoriya: <span className="font-bold capitalize">
              {category?.name_uz}
            </span>
          </h3>
          <h3>
            Janr: <span className="font-bold capitalize">
              {genre?.name_uz}
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
            Yili: <span className="font-bold capitalize">
              {year}
            </span>
          </h3>
          <h3>
            Film haqida: <span className="font-bold capitalize">
              {sliceText(description, 100)}
            </span>
          </h3>
          <Button
            onClick={showTrailerVideo}
            className="text-base h-8 bg-indigo-600 hover:bg-indigo-700 text-white">
            Trailerni ko&apos;rish
          </Button>



        </div>
      </div>
      <div className="my-2 border-b border-gray-700 pb-4 ">
        <h1 className="font-bold text-xl">
          Film videosi {" "}
          {(!video || !video?.startsWith("http")) && (
            <span> kiritilmagan</span>
          )}
        </h1>
        {(video && video?.startsWith("http")) && (
          <div className="w-full my-2 h-96">
            <video className="h-full w-full md:w-2/3" controls src={video}>

            </video>
          </div>
        )}

      </div>
      <div className="my-2 border-b border-gray-700 pb-4 ">
        <h1 className="font-bold text-xl">
          Film traileri {" "}
          {(!trailer || !trailer?.startsWith("http")) && (
            <span> kiritilmagan</span>
          )}
        </h1>
        {(trailer && trailer?.startsWith("http")) && (
          <div className="w-full my-2 h-96">
            <video className="h-full w-full md:w-2/3" controls src={trailer}>

            </video>
          </div>
        )}

      </div>
      <div className="border-b border-gray-700 pb-4">
        <h1 className="font-bold my-2 text-xl">
          Filmdan kadrlar {""}
          {
            (!cadre || cadre?.length === 0) &&
            <span>
              mavjud emas!
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

    </div>
  )
}

export default FilmDetailUi
