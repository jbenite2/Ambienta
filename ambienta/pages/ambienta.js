
import Image from 'next/image'
export default function Ambienta() {
    return (
        <div className='ambienta-description'>
            <div>
                <p className="description-box">
                Compañía local puertorriqueña de diseño y fabricación de arte para interiores y exteriores. Nos enfocamos en patrones cortados a precisión y en acabados de la más alta calidad. Nuestros productos incluyen lámparas, paneles decorativos y espejos personalizados que buscan darle vida a espacios utilizando la luz y curvaturas para ofrecer una experiencia única hacia nuestra clientela. 
                </p>
            </div>
            <div>
                <Image className="flow" src="/flow.jpg"  width="500" height="500"></Image>
            </div>
        </div>
    )
}
