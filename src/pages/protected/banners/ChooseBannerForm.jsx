/* eslint-disable react/prop-types */
import Dropdown from '@/components/inputs/Dropdown'
import LoadingModal from '@/components/loaders/Loading'
import ErrorText from '@/components/typography/ErrorText'
import { Button } from '@/components/ui/button'
import { useAddBannerMutation } from '@/services/bannerApi'


function ChooseBannerForm({ options, formTitle }) {

    const [addBanner, { isLoading, isError }] = useAddBannerMutation()
    const handleChooseFilm = async (event) => {
        event.preventDefault();
        const forma = new FormData(event.target)
        const data = Object.fromEntries(forma.entries())
        try {
            const response = await addBanner(data)
            console.log(response)
        }
        catch (err) {
            console.log(err.message)
        }
        event.target.reset()
    }
    return (
        <form onSubmit={handleChooseFilm} className='flex flex-col gap-2 w-full items-start justify-start'>
            <Dropdown labelTitle={`${formTitle}lardan tanleng`}
                placeholder={`${formTitle}ni tanlang`}
                name={formTitle === "film" ? "cinema" : "series"}
                value={"id"}
                options={options}
                required={true}
            />
            {isLoading && <LoadingModal />}
            {isError && <ErrorText>
                Xatolik sodir bo&apos;ldi
            </ErrorText>}

            <Button type="submit" className="bg-indigo-600 text-white h-7">Tanlash</Button>
        </form>
    )
}

export default ChooseBannerForm
