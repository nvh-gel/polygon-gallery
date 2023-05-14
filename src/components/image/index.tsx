import React from "react";
import './hex.scss';

const HexImage: React.FC<any> = (props) => {
    const src = 'https://picsum.photos/400';

    return (
        <div className="hex">
            <div className="hexagon hexagon2 gallery-item">
                <div className="hexagon-in1">
                    <div className="hexagon-in2" style={{ backgroundImage: 'url(' + src + ')' }}>
                        <div className="overlay">
                            <a href="http://google.com">asdsad</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HexImage;
