import sytles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={sytles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/57718626?s=460&u=ddffa661d917bb9445326c75bb7b8916405412c1&v=4" alt="Foto de perfil"/>
            <div>
                <strong>Marcelo Tadini</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    );
}