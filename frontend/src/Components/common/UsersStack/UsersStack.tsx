import './scss/index.scss';

type Props = {
    photos: string[]
}

export const UsersStack = ({ photos = [] }: Props) => {
    return(
        <div className='users-stack'>
            {photos.map((photo => <img className='photo' src={photo} />))}
        </div>
    );
}