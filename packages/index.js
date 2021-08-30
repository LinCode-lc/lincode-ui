import Button from './button'
import CheckboxGroup from './checkbox-group'
import Checkbox from './checkbox'
import Dialog from './dialog'
import FromItem from './form-item'
import Form from './form'
import Input from './input'
import RadioGroup from './radio-group'
import Radio from './radio'
import Switch from './switch'
import NineSquare from './NineSquare'
import NineSquareList from './NineSquareList'
import './fonts/fonts.scss'
const components = [
    Button,
    CheckboxGroup,
    Checkbox,
    Dialog,
    FromItem,
    Form,
    Input,
    RadioGroup,
    Radio,
    Switch,
]
const install = function (Vue) {
    components.forEach((item) => {
        Vue.component(item.name, item)
    })
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    install
}