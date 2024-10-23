import '../styles/modern-normalize.css';
import '../styles/style.css';
import  '../styles/components/header.css'
import '../styles/components/home.css';
import '../styles/components/about.css';
import '../styles/components/contact.css';
import '../styles/components/footer.css';
import  '../styles/components/mobile.css';
import '../styles/utils.css';
import '../styles/components/work.css';
import '../styles/components/loading.css'

import NavMobile from './utils/mobile';
import darkMode from './utils/dark-mode';
// import autotyped from './utils/auto-type';
import CardsSwift from './utils/card-swift';
import loader from './utils/loading';
    NavMobile();
    darkMode();
    CardsSwift();
    loader();
    // autotyped();