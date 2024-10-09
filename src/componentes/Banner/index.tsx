import React from 'react';
import './Banner.css';

interface BannerProps {
    enderecoImagem: string
    textAlternativo?: string
};

 const Banner = ({enderecoImagem, textAlternativo} :BannerProps) => {
    // JSX
    return (
        <header className="banner">
            <img src={enderecoImagem} alt={textAlternativo}/>

        </header>
    )
};

export default Banner;