let sararyin1 = prompt("รายรับวันที่ 1 : ");
let sararyout1 = prompt("รายจ่ายวันที่ 1 : ");
let sum1 = parseFloat(sararyin1) - parseFloat(sararyout1);

document.getElementById("sararyin1").innerHTML = "รายรับของวันที่ 1 = " + sararyin1;
document.getElementById("sararyout1").innerHTML = "รายจ่ายของวันที่ 1 = " + sararyout1;

if (sum1 < 0) {
    document.getElementById("sum1").innerHTML = "ยอดเงินของคุณติดลบ" + " ยอดคงเหลือ : " + sum1 + " บาท";
} else {
    document.getElementById("sum1").innerHTML = "ยอดเงินของคุณเหลือ : " + sum1 + " บาท";
}

let sararyin2 = prompt("รายรับวันที่ 2 : ");
let sararyout2 = prompt("รายจ่ายวันที่ 2 : ");
let sum2 = parseFloat(sararyin2) - parseFloat(sararyout2);

document.getElementById("sararyin2").innerHTML = "รายรับของวันที่ 2 = " + sararyin2;
document.getElementById("sararyout2").innerHTML = "รายจ่ายของวันที่ 2 = " + sararyout2;

if (sum2 < 0) {
    document.getElementById("sum2").innerHTML = "ยอดเงินของคุณติดลบ" + " ยอดคงเหลือ : " + sum2 + " บาท";
} else {
    document.getElementById("sum2").innerHTML = "ยอดเงินของคุณเหลือ : " + sum2 + " บาท";
}

let sararysum = sum1 + sum2;
document.getElementById("sararysum").innerHTML = "ยอดรวมทั้ง 2 วัน : " + sararysum + " บาท";
