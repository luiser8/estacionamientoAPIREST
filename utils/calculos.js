import moment from 'moment';

let valorMenosHora = 0.0005;
let valorHoraPar = 0.0003;
let valorHoraImPar = 0.0001;
let valorDia = 0.74;
let amount = 0;
let total = 0;
let totalMinPar = 0;
let totalMinImpar = 0;

export const calculosEstacionar = async(...params) => {
    let inn = moment(params[0].inn);
    let out = moment(params[0].out);
    let minutesDiff = out.diff(inn, 'minutes');
    let hoursDiff = out.diff(inn, 'hours');

    console.log('Minutes:' + minutesDiff); 
    console.log('Hours:' + hoursDiff); 
    console.log('days:' + out.diff(inn, 'days')); 

    if(hoursDiff < 1){
        return amount = valorMenosHora * minutesDiff;
    }if(hoursDiff >= 1 && hoursDiff <= 3){
        if(minutesDiff % 2 === 0){
            return amount = valorHoraPar * minutesDiff;
        }else{
            return amount = valorHoraImPar * minutesDiff;
        }
    }if(hoursDiff > 3){
        if(hoursDiff <= 6){
            if(minutesDiff % 2 === 0){
                return amount = valorHoraPar * minutesDiff;
            }else{
                return amount = valorHoraImpar * minutesDiff;
            }
        }if(hoursDiff > 6){
            totalMinPar = valorHoraPar * minutesDiff;
            totalMinImpar = valorHoraImPar * minutesDiff;
            amount = ((totalMinPar * 0.0003 + totalMinImpar * 0.0001) + (minutesDiff - 3) * 0.0002);
            total = (amount * amount * 0.3) + amount;
            return total;
        }
    }
};
export const calculosFijo = async(...params) => {
    let dias = params[0].dias;
    return valorDia * dias;
}