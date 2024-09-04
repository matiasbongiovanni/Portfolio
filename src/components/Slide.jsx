import React from 'react';
import JavascriptIcon from '../assets/javascript.svg';
import ReactIcon from '../assets/react.svg';
import CssIcon from '../assets/css.svg';
import TailwindIcon from '../assets/tailwind.svg';
import GitIcon from '../assets/git.svg';
import ViteIcon from '../assets/vitejs.svg'

import Slider from 'react-infinite-logo-slider'

const Slide = () => {
    
    return (
        <Slider
            width="200px"
            duration={45}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
            <img src={JavascriptIcon} alt="Javascript Icon" className='h-8 w-8'/>
            </Slider.Slide>

            <Slider.Slide>
            <img src={ReactIcon} alt="React Icon" className='h-8 w-8' /> 
            </Slider.Slide>

            <Slider.Slide>
            <img src={TailwindIcon} alt="Tailwind CSS Icon" className='h-8 w-8' />
            </Slider.Slide>

            <Slider.Slide>
            <img src={CssIcon} alt="CSS Icon" className='h-8 w-8' />
            </Slider.Slide>

            <Slider.Slide>
            <img src={GitIcon} alt="Git Icon" className='h-8 w-8' />
            </Slider.Slide>

            <Slider.Slide>
            <img src={ViteIcon} alt="ViteJS Icon" className='h-8 w-8' />
            </Slider.Slide>

        </Slider>
    )
}              
                     
export default Slide;