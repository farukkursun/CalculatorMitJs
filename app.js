let altEkran = document.querySelector(".current-display");
let üstEkran = document.querySelector(".previous-display");
let altY = "";
let üstY = "";
let islem = "";
let hesap = true;

// hesapla foncionu
const hesapla = (üstY, islem, altY) => {
  if (islem == "+") sonuc = Number(üstY) + Number(altY);
  else if (islem == "-") sonuc = üstY - altY;
  else if (islem == "x") sonuc = üstY * altY;
  else if (islem == "÷") {
    if (altY != 0) sonuc = üstY / altY;
    else sonuc = "hatali rakam girdiniz";
  } else sonuc = "hatali islem girdiniz";
  return sonuc;
};

// console.log(hesapla(10, "+", 2));

// num basinca
document.querySelectorAll(".num").forEach(
  (a) =>
    (a.onclick = () => {
      if (altY && hesap == true) {
        altY = altY + a.textContent;
      } else {
        if (a.textContent == 0) return;
        else {
          hesap = true;
          altY = a.textContent;
        }
      }

      // sayilar number e cevrildigi icin 0 i birkez basiyor

      if (altY.length > 9) {
        altEkran.textContent = altY.slice(0, 9);
      } else {
        altEkran.textContent = altY;
      }

      document.querySelectorAll(".operator").forEach(
        (op) =>
          (op.onclick = () => {
            if (altY && üstY) {
              altEkran.textContent = hesapla(üstY, islem, altY);
              üstEkran.textContent = "";
              altY = hesapla(üstY, islem, altY);
              üstY = "";
              islem = op.textContent;
              üstY = altY;
              altY = "";
              üstEkran.textContent = üstY + islem;
              altEkran.textContent = "";
            } else {
              islem = op.textContent;
              üstY = altY;
              altY = "";
              üstEkran.textContent = üstY + islem;
              altEkran.textContent = "";
            }
          })
      );
    })
);

document.querySelector(".equal").onclick = () => {
  hesap = false;
  altEkran.textContent = hesapla(üstY, islem, altY);
  üstEkran.textContent = "";
  altY = hesapla(üstY, islem, altY);
  üstY = "";
};

document.querySelector(".ac").onclick = () => {
  altY = "";
  üstY = "";
  altEkran.textContent = 0;
  üstEkran.textContent = "";
};

document.querySelector(".percent").onclick = () => {
  altY = altY / 100;
  altEkran.textContent = altY;
};
document.querySelector(".pm").onclick = () => {
  altY = altY * -1;
  altEkran.textContent = altY;
};

// ikinci '.' engeleme
document.querySelector(".decimal").onclick = () => {
  
  if (altY.includes(".")) {
    return;
  } else {
    if (altY == "") {
      hesap= true
      altY = 0;
      altY = altY + ".";
      altEkran.textContent = altY;
    } else {
      altY = altY + ".";
      altEkran.textContent = altY;
      
    }
  }
};

