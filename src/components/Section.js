import React from 'react';
import { Button } from './Button';
import './css/Section.css';


function Section() {
    return (
        <div className='hero-container'>
            <img src="glfp.png" />
            <h1 >안녕하세요</h1>
            {/* <p>GLFP에 오신것을 환영합니다.</p> */}
            <div className="hero-btns">
                <Button
                 className='btns'
                 buttonStyle='btn--outline'
                 buttonSize='btn--large'
                 >
                     시작하기
                 </Button>
            </div>
        </div>
    );
}

export default Section;
