import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import sytles from '../styles/components/Profile.module.css'

export function Profile(){

    const {level} = useContext(ChallengesContext);

    return(
        <div className={sytles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/57718626?s=460&u=ddffa661d917bb9445326c75bb7b8916405412c1&v=4" alt="Foto de perfil"/>
            <div>
                <strong>Marcelo Tadini</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}