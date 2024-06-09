/* eslint-disable react/prop-types */
import FormInput from "@/components/inputs/FormInput"
import UploadInput from "@/components/inputs/UploadInput"
import LoadingModal from "@/components/loaders/Loading"
import ErrorText from "@/components/typography/ErrorText"
import { Button } from "@/components/ui/button"
import { useAddSerialMutation } from "@/services/serialApi"


function AddSerialForm({ parent_id }) {

    const [addSeries, { isLoading, isError }] = useAddSerialMutation()


    const addSeriesHandler = async (event) => {
        event.preventDefault()
        const forma = new FormData(event.target)
        const data = Object.fromEntries(forma.entries())
        const formDataToSend = new FormData();
        for (const [key, value] of Object.entries(data)) {
            formDataToSend.append(key, value);
        }
        formDataToSend.append("parent", parent_id)
        try {
            const response = await addSeries(formDataToSend)
            console.log(response)
        }

        catch (err) {
            console.log(err)

        }


        event.target.reset()

    }
    return (
        <form
            onSubmit={addSeriesHandler}
            className="w-full flex flex-col items-start gap-2 md:w-2/3">
            <FormInput
                labelTitle={"Qism nomi"}
                labelStyle={""}
                containerStyle={"w-full"}
                type="text"
                name="name_uz"
                required={true}
                placeholder={"Qism nomini kiriting"}
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


            />
            <UploadInput
                onChange={(selectedImage) => console.log("Selected image:", selectedImage)}
                previewWidth="100%"
                previewHeight="400px"
                accept="video/*"
                label={`Video yuklash`}
                name="video"
                required={true}
                fileType="video"

            />
            {isLoading && <LoadingModal />}
            {isError && <ErrorText className="text-red-500">
                Xatolik sodir bo&apos;ldi!
            </ErrorText>}
            <Button className="px-2 py-1 rounded bg-indigo-600 w-36 text-white" type="submit">
                Seriya qo&apos;shish
            </Button>
        </form>
    )
}

export default AddSerialForm
