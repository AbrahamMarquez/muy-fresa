import React, { useEffect, useState } from 'react'

//style
import './Profile.scss'

//components
import InputText from '../../../components/atoms/InputText/InputText';
import InputNumber from '../../../components/atoms/InputNumber/InputNumber';
import Select from "../../../components/atoms/Select/Select";
import { TabView, TabPanel } from 'primereact/tabview';

//assets
import strawberry from '../../../img/profile/strawberry.svg'
import passwordLock from '../../../img/icons/passwordLock.svg'
import close from '../../../img/icons/xWhite.svg'
import InputPassword from '../../../components/atoms/InputPassword/InputPassword';
import { ColorValidation, SubmitValidation, UpdateValue } from '../../../utilities/Validations';
import InputPicture from '../../../components/atoms/InputPicture/InputPicture';

const Profile = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const [img, setImg] = useState()

    const [inputList, setInputList] = useState({
        name: { value: null, validationType: 'empty' },
        age: { value: null, validationType: 'empty' },
        gender: { value: null, validationType: "empty" },
        phone: { value: null, validationType: "empty" },
        password: { value: null, validationType: "empty" },
        newPassword: { value: null, validationType: "empty" }
    })

    const [editForm, setEditForm] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const [genderOptions, setGenderOptions] = useState([
        {
            id: 0,
            label: 'Masculino',
            selected: false
        },
        {
            id: 1,
            label: 'Femenino',
            selected: false
        },
        {
            id: 2,
            label: 'Prefiero no contestar',
            selected: false
        }
    ])

    useEffect(() => {
      setInputList({
        name: { value: 'Nataly Sanchez', validationType: 'empty' },
        age: { value: 24, validationType: 'empty' },
        gender: { value: {id: 1, label: 'Femenino', selected: false}, validationType: "empty" },
        phone: { value: 3333333333, validationType: "empty" },
        password: { value: '*****', validationType: "empty" },
        newPassword: { value: null, validationType: "empty" }
      })
    }, [])

    
    useEffect(() => {
        for (const propertyName in inputList) {
            if (document.getElementById(propertyName) && propertyName != "optional" ) {
                ColorValidation(propertyName, inputList)
            }
        }
    }, [inputList])
   
    

    const handleSubmit = (e) => {
        e.preventDefault()
        const validated = SubmitValidation(inputList, setInputList)

        if(validated) {
        
            
        }
        setEditForm(false)
        setShowPassword(false)
    }

    return (
        <div className='profile'>

            <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Mi perfil">
                    <div className='formContainer'>
                        
                        <InputPicture className={'mb-60'} disabled={!editForm} img={img} setImg={setImg}/>

                        <div className='form'>
                            <InputText disabled={!editForm} value={inputList.name.value} className={'mt-20'} title={'Nombre de usuario'} onChange={(e) => { UpdateValue(e, "name", inputList, setInputList) }} id={'name'} placeholder="Nombre de usuario" />

                            <div className='d-flex'>
                                <InputNumber disabled={!editForm} value={inputList.age.value} className={'mt-20 w-40'} title={'Edad'} onChange={(e) => { UpdateValue(e, "age", inputList, setInputList) }} id={'age'} placeholder="Edad" />
                                <Select disabled={!editForm} className={'mt-20 w-50 ml-20'} title={"Género"} optionArr={genderOptions} value={inputList.gender.value} id={"gender"} onChange={(e) => { UpdateValue(e, "gender", inputList, setInputList) }}></Select>
                            </div>
                            <InputNumber disabled={!editForm} value={inputList.phone.value} className={'mt-20'} title={'Teléfono'} onChange={(e) => { UpdateValue(e, "phone", inputList, setInputList) }} id={'phone'} placeholder="Teléfono" />

                            <div className='passwordContainer d-flex'>
                                <button onClick={() => editForm && setShowPassword(!showPassword)} className='password'>
                                    {
                                        !showPassword ?
                                            <img src={passwordLock} />
                                            :
                                            <img src={close} />
                                    }
                                </button>
                                {
                                    showPassword &&
                                    <>
                                        <InputPassword value={inputList.password.value} className={' w-40'} title={'Contraseña'} onChange={(e) => { UpdateValue(e, "password", inputList, setInputList) }} id={'password'} placeholder="Contraseña" />
                                        <InputPassword value={inputList.newPassword.value} className={'ml-20 w-40'} title={'Contraseña nueva'} onChange={(e) => { UpdateValue(e, "newPassword", inputList, setInputList) }} id={'newPassword'} placeholder="Nueva contraseña" />
                                    </>
                                }
                            </div>

                            {
                                editForm ?
                                    <button className='save' onClick={(e) => handleSubmit(e)}>Guardar</button>
                                    :
                                    <button className='edit save' onClick={() => setEditForm(true)}>Editar mi perfil</button>
                            }
                        </div>



                    </div>

                </TabPanel>
                <TabPanel header="Dirección">
                    Content II
                </TabPanel>
                <TabPanel header="Métodos de pago">
                    Content III
                </TabPanel>
            </TabView>
        </div>
    )
}

export default Profile 
