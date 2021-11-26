import { createGlobalStyle } from 'styled-components'

import AvenirRomanEot from './Avenir-Roman.eot'
import AvenirRomanWoff2 from './Avenir-Roman.woff2'
import AvenirRomanWoff from './Avenir-Roman.woff'
import AvenirRomanTtf from './Avenir-Roman.ttf'
import AvenirMediumEot from './Avenir-Medium.eot'
import AvenirMediumWoff2 from './Avenir-Medium.woff2'
import AvenirMediumWoff from './Avenir-Medium.woff'
import AvenirMediumTtf from './Avenir-Medium.ttf'

export default createGlobalStyle`
@font-face {
  font-family: Avenir;
  font-weight: normal;
  font-style: normal;
  src: url(${AvenirRomanEot});
  src: local('Avenir Roman'), local('Avenir-Roman'),
    url('${AvenirRomanEot}?#iefix') format('embedded-opentype'),
    url(${AvenirRomanWoff2}) format('woff2'), url(${AvenirRomanWoff}) format('woff'),
    url(${AvenirRomanTtf}) format('truetype');
}

@font-face {
  font-family: Avenir;
  font-weight: 500;
  font-style: normal;
  src: url(${AvenirMediumEot});
  src: local('Avenir Medium'), local('Avenir-Medium'),
    url('${AvenirMediumEot}?#iefix') format('embedded-opentype'),
    url(${AvenirMediumWoff2}) format('woff2'), url(${AvenirMediumWoff}) format('woff'),
    url(${AvenirMediumTtf}) format('truetype');
}
`
