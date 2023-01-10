import React, { useState } from 'react'

//assets
import defaultImg from '../../../img/profile/strawberry.svg'

//style
import './InputPicture.scss'

const InputPicture = ({ disabled, setImg, className }) => {

    const [imgSave, setImgSave] = useState(false);
    const [imgLogo, setImgLogo] = useState(false);

    function changeFileLogo() {

        var fileInput = document.getElementById('uploadImageS1');

        var filePath = fileInput.value;
        if (filePath === '') {
            setImgSave(false)
            return false
        }
        var allowedExtensions = /(.png|.jpg|.jpeg)$/i;
        if (!allowedExtensions.exec(filePath)) {
            fileInput.value = '';
            return false;
        } else {
            if (fileInput.files && fileInput.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    setImgLogo(fileInput.files[0])
                    setImgSave(URL.createObjectURL(fileInput.files[0]));
                };
                reader.readAsDataURL(fileInput.files[0]);
            }
        }

        setImg(fileInput.files)

    }

    function activateInput() {
        $("input[name='uploadImageS1']").trigger("click");
    }

    return (
        <div className={`inputPicture ${className}`}>
            <input
                type="file"
                id="uploadImageS1"
                name="uploadImageS1"
                style={{ display: "none" }}
                disabled={disabled}
                onChange={(e) => { changeFileLogo() }}
            />

            <div
                onClick={activateInput}
                id='logo'
                style={{
                    backgroundImage: `url(${imgSave ? imgSave : defaultImg})`,
                    backgroundPosition: 'center',
                    backgroundSize: imgSave
                        ? 'cover'
                        : disabled ? 'cover'
                            : 'auto'
                    ,
                    backgroundRepeat: 'no-repeat',
                    borderRadius: "50%",
                }}
                className="img"
            ></div>
            {
                !disabled && <button className="uploadPic" onClick={activateInput}>Subir foto</button>
            }

        </div>
    )
}

export default InputPicture