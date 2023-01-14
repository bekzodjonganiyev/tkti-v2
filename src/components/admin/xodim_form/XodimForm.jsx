import React from 'react'

import "./XodimForm.css"

import Input from "../../../components/admin/input/Input"
import Button from "../../../components/admin/button/Button"

const XodimForm = (props) => {
    const {} = props
  return (
    <form>
        <Input nameUz='Xodim ismi(UZ)' nameRu='Xodim ismi(RU)' nameEn='Xodim ismi(EN)'/>
        <Input nameUz='Xodim lavozimi(UZ)' nameRu='Xodim lavozimi(RU)' nameEn='Xodim lavozimi(EN)'/>
        <label htmlFor="tel">
            Xodim telefon raqami <br />
            <input type="tel" id='tel' />
        </label>
        <label htmlFor="email">
            Xodim emaili <br />
            <input type="email" id='email' />
        </label>
        <div>
            <span>Selectni title li</span>
            <select>
                <option value="">Xodim qayerda ishlaydi</option>
                {/* {
                    options.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))
                } */}
            </select>
        </div>
        <Button name="Xodimni qo'shish"/>
    </form>
  )
}

export default XodimForm