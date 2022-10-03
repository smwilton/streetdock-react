import Image1 from '../../images/standard-image-01.png'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lighttextDesc: true,
    headline: 'Re-thinking urban delivery.',
    description: 'We believe that city centres should be organised around the needs of people, not vehicles because doing that makes them more pleasant places to be. It’s no surprise that people prefer to shop, eat and enjoy life on cleaner, fresher, less congested streets. By consolidating their cargo delivery infrastructure, cities can free up space for people to move, play and live, clear the air of harmful exhaust gases and drive their carbon count down to net zero.',

    imgStart: false,
    img: '/home/sandra/Desktop/streetdock/streetdock-react/src/videos/streetdock_explainer_animation.mp4',
    alt: 'car',
    dark: true,
    primary: true,
    darkText: false
  };
  
  export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lighttextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Login to your account at any time',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.',

    imgStart: true,
    img: {Image1},
    alt: 'Piggybanck',
    dark: false,
    primary: false,
    darkText: true
  };
  
  export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lighttextDesc: false,
    topLine: 'Premium Bank',
    headline: 'Creating an account is extremely easy',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.',
 
    imgStart: false,
    img: '/images/svg-3.svg',
    alt: 'car',
    primary: false,
    darkText: true
  };