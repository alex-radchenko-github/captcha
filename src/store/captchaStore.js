import {makeAutoObservable} from "mobx";
const _ = require('lodash');


class CaptchaS {
    captchaPass = false

    icons = _.shuffle([
        {id: '0c220a97-7bf3-497e-8cac-c469faea2bde', value: '🐶', order: 1, selected: false},
        {id: '003a9395-882c-4559-b1d3-774a92f3dc43', value: '🐶', order: 2, selected: false},
        {id: 'd718f2c6-ff37-4246-8066-c579712d9dae', value: '🐶', order: 3, selected: false},
        {id: '54116c42-22f7-421c-9a1f-8804e28b844d', value: '🏈', order: 4, selected: false},
        {id: '866c025e-5a19-4753-8737-1cc452227e3a', value: '🏈', order: 5, selected: false},
        {id: 'f09e7d2c-a866-47cf-8e7c-f82f66eac28e', value: '🏈', order: 6, selected: false},
        {id: 'c2cbce05-b98e-494d-8712-99a4f25a1a0b', value: '🏑', order: 7, selected: false},
        {id: '3871352a-8a64-4256-9d70-d5377d3d55dc', value: '🏑', order: 8, selected: false},
        {id: 'c5051af4-43d8-41b5-a09c-857448c37ab9', value: '🏑', order: 9, selected: false}
    ]);

    constructor() {
        makeAutoObservable(this)
    }

    reverseButton(number) {
        number.selected = !number.selected
        this.checkPassCaptcha()
    }

    returnButtonStatus(number) {
        return number.selected
    }

    checkPassCaptcha() {
        let tmp = []
        let arrayForCheck = this.icons.filter(button => button.selected === true)
        for (let i = 0; i < arrayForCheck.length; i++) {
            tmp.push(arrayForCheck[i].value)
        }
        this.captchaPass = new Set(tmp).size === 1 && tmp.length === 3;
    }
}

export default new CaptchaS()