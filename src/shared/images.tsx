import Stars from 'src/images/Stars.png';
import Crysis from 'src/images/Crysis.png';
import Wizardry from 'src/images/Wizardry.png';
import Dungeon from 'src/images/Dungeon.png';
import Bioforge from 'src/images/Bioforge.png';


//its should came from backend
const images = (img: string) => {
    switch (img) {
        case 'Stars':
            return Stars;
        case 'Crysis':
            return Crysis;
        case 'Wizardry':
            return Wizardry;
        case 'Dungeon':
            return Dungeon;
        case 'Bioforge':
            return Bioforge;
        default:
            return '';
    }
};

export { images };
