import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://w-dog.ru/wallpapers/9/18/476035417475237.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
}
export default ProfileInfo;