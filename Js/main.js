const SearchField = document.querySelector(".CountryBox__Field");
const Button = document.querySelector(".CountryBox__Btn");
const CountryName = document.querySelector(".CountryName");
const CountryFlag = document.querySelector(".CountryFlag");
const CountryCapital = document.querySelector(".CountryCapital");
const CountryFullName = document.querySelector(".CountryFullName");
const CountryRegion = document.querySelector(".CountryRegion");
const CountryMotherLanguage = document.querySelector(".CountryMotherLanguage");
const CountryLandArea = document.querySelector(".CountryLandArea");
const FlagHead = document.querySelector(".NameFlag__CountryFlag");

Button.addEventListener("click", () => {
  const Image = document.createElement("img");
  FlagHead.appendChild(Image);
  Image.classList.add("CountryFlag");

  const Inputcountry = SearchField.value;
  // let countryname = "India";
  const NameOfCountry = Inputcountry.toUpperCase();
  let UrlHolder = `
https://restcountries.com/v3.1/name/${Inputcountry}?fullText=true`;

  console.log(UrlHolder);

  fetch(UrlHolder)
    .then((response) => response.json())
    .then((data) => {
      CountryName.innerHTML = `${NameOfCountry}`;
      Image.src = `${data[0].flags.svg}`;
      CountryCapital.innerHTML = `${data[0].capital[0]}`;
      CountryFullName.innerHTML = `${data[0].name.official}`;
      CountryRegion.innerHTML = `${data[0].region}`;
      CountryMotherLanguage.innerHTML = `${Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(",")}`;
      CountryLandArea.innerHTML = `${data[0].area} KM`;
      console.log(data[0]);
      console.log(data[0].capital[0]);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      console.log(data[0].name.official);
      console.log(data[0].continents[0]);
      console.log(data[0].languages.hin);
      console.log(data[0].area);
      console.log(
        Object.values(data[0].languages).toString().split(",").join(",")
      );
    });
});
