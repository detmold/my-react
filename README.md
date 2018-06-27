## Wymagania

- zainstalowany node (testowane na v. 6.9.2)

- zainstalowany git

## Instalacja

- klonujemy repozytorium: git clone https://github.com/detmold/my-react.git

- npm install

- npm start 

- po zbudowaniu paczki strona dostępna powinna być dostępna pod adresem: http://localhost:8080

## Cel i działania opis aplikacji

- testowanie różnych funkcjonalności react/redux

- Ustaw ilość pobranych rekordów - odwołuje się do api i pobiera ilość rekordów po kliknięciu w przycisk (limit api 5000)

- Ustaw licznik paginacji - po zmianie pobiera ilość rekordów wskazanych przez poprzeni przycisk i zmienia rozmiar strony paginacji (przy dużych ilośćiach pobieranych rekordów może przymulać - TODO wprowadzić debounce)

- Filtrowanie - operuje na pierwszym imieniu i nazwisku, nie odwołuje się do api

- Sortowanie - operuje na 3 wybranych kolumnach, nie odwołuje się do api

## Uwagi 

- [npm install react react-dom bootstrap react-redux react-scripts redux redux-thunk --save]

- [npm install babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-2 npm install webpack css-loader style-loader file-loader url-loader webpack-dev-server --save-dev]
