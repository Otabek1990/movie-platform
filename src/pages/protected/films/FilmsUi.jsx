/* eslint-disable react/prop-types */
import FilmCard from '@/components/cards/FilmCard'


function FilmsUi({ cinemas }) {
    console.log(cinemas)
    return (
        <div className='my-4 w-full min-h-10'>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
                {cinemas.map(cinema => (
                    <FilmCard key={cinema.id} {...cinema} />
                ))}
            </div>

        </div>
    )
}

export default FilmsUi
