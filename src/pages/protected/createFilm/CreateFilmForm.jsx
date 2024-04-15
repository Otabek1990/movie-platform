

import Dropdown from "@/components/inputs/Dropdown";
import FormInput from "@/components/inputs/FormInput";
import TextArea from "@/components/inputs/TextArea";
import UploadInput from "@/components/inputs/UploadInput";
import LoadingModal from "@/components/loaders/Loading";
import ErrorText from "@/components/typography/ErrorText";
import { Button } from "@/components/ui/button";
import { useCategoriesQuery } from "@/services/categoryApi";
import { useAddCinemaMutation } from "@/services/cinemaApi";
import { useGenresQuery } from "@/services/genresApi";
import { useNavigate } from 'react-router-dom'




export function CreateFilmForm() {


    const { data: categories, isSuccess: isSuccessCategoris } = useCategoriesQuery()
    const { data: genres, isSuccess: isSuccessGenres } = useGenresQuery()
    const [addCinema, { isLoading, isError }] = useAddCinemaMutation()
    const navigate = useNavigate()

    const handleCreateFilmSubmit = async (event) => {
        event.preventDefault();
        const forma = new FormData(event.target)
        const data = Object.fromEntries(forma.entries())
        console.log(data)

        // Create a new FormData object
        // const formDataToSend = new FormData();

        // // Iterate over the key-value pairs in the 'data' object
        // for (const [key, value] of Object.entries(data)) {
        //     // Append each key-value pair to the FormData object
        //     formDataToSend.append(key, value);
        // }
        // try {
        //     const response = await addCinema(formDataToSend)
        //     console.log(response, 'response')
        //     if (response.data?.success) {
        //         navigate
        //     }

        // }
        // catch (err) {
        //     console.log(err, 'err')
        // }
    }


    return (
        <form className="w-3/4 md:w-1/2 flex flex-col items-start gap-3" onSubmit={handleCreateFilmSubmit}>
            <Dropdown
                required={true}
                options={isSuccessCategoris ? categories.results : []}
                labelTitle={"Kategoriya"}
                placeholder={"Kategoriya tanlang"}
                name={"category"}
                value={"id"}
            />
            <Dropdown
                required={true}
                options={isSuccessGenres ? genres.results : []}
                labelTitle={"Janrlar"}
                placeholder={"Janr tanlang"}
                name={"genre"}
                value={"id"}
            />
            <FormInput
                labelTitle={"Nomi"}
                labelStyle={""}
                type="text"
                containerStyle={"w-full"}
                placeholder={"Nom kiriting"}
                required={true}
                name={"name"}
            />
            <FormInput
                labelTitle={"Rejissori"}
                labelStyle={""}
                type="text"
                containerStyle={"w-full"}
                placeholder={"Rejissori"}
                required={false}
                name={"rejisor"}
            />
            <FormInput
                labelTitle={"Film chiqarilgan yili"}
                labelStyle={""}
                type="number"
                containerStyle={"w-full"}
                placeholder={"yil kiriting"}
                required={false}
                name={"year"}
            />
            <TextArea
                labelTitle={"Film haqida"}
                labelStyle={""}
                containerStyle={"w-full"}
                placeholder={"Film haqida yozing"}
                required={false}
                name={"description"}
                minLengthOfWords={0}
                maxLengthOfWords={10000}

            />
            <TextArea
                labelTitle={"Bosh rollarda"}
                labelStyle={""}
                containerStyle={"w-full"}
                placeholder={"Bosh rollarda"}
                required={false}
                name={"main_users"}
                minLengthOfWords={0}
                maxLengthOfWords={10000}

            />
            <FormInput
                labelTitle={"Film trailer linki (Youtube yoki boshqa linklar)"}
                labelStyle={""}
                type="text"
                containerStyle={"w-full"}
                placeholder={"Trailer linkini kiriting"}
                required={false}
                name={"trailer_url"}
            />
            <UploadInput
                onChange={(selectedImage) => console.log("Selected image:", selectedImage)}
                previewWidth="100%"
                previewHeight="300px"
                accept="image/*"
                label="Banner rasmini yuklash"
                name="main_image"
                required={false}
                fileType="image"
                isMultiple={true}

            />
            <UploadInput
                onChange={(selectedImage) => console.log("Selected image:", selectedImage)}
                previewWidth="100%"
                previewHeight="400px"
                accept="video/*"
                label="Trailer videosini yuklash"
                name="trailer"
                required={false}
                fileType="video"

            />
            <UploadInput
                onChange={(selectedImage) => console.log("Selected image:", selectedImage)}
                previewWidth="100%"
                previewHeight="400px"
                accept="video/*"
                label="Film videosini yuklash"
                name="video"
                required={false}
                fileType="video"

            />
            <UploadInput
                onChange={(selectedImages) => console.log("Selected image:", selectedImages)}
                previewWidth="100%"
                previewHeight="400px"
                accept="image/*"
                name="image"
                label="Film kadrlari rasmlari"
                required={false}
                fileType="images"
                isMultiple={true}

            />
            {isLoading && <LoadingModal />}
            {isError && <ErrorText>
                Xatolik sodir bo&apos;ldi
            </ErrorText>}

            <Button className="px-2 py-1 rounded bg-indigo-600 w-36 text-white" type="submit">
                Saqlash
            </Button>
        </form>
    )
}
