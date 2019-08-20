import React from 'react';
import img1 from './src/cookies/1.png';
import img2 from './src/cookies/2.png';
import img3 from './src/cookies/3.png';
import img4 from './src/cookies/4.png';
import img5 from './src/cookies/5.png';
import img6 from './src/cookies/6.png';
import img8 from './src/cookies/8.png';
import img9 from './src/cookies/9.png';
import img10 from './src/cookies/10.png';
import img11 from './src/cookies/11.png';
import img12 from './src/cookies/12.png';
import img13 from './src/cookies/13.png';
import img14 from './src/cookies/14.png';
import img15 from './src/cookies/15.png';
import img16 from './src/cookies/16.png';
import img17 from './src/cookies/17.png';
import img18 from './src/cookies/18.png';
import img19 from './src/cookies/19.png';
import img20 from './src/cookies/20.png';
import img21 from './src/1.png';
import img22 from './src/2.png';
import img23 from './src/3.png';
import img24 from './src/4.png';
import img25 from './src/5.png';
import img26 from './src/6.png';
import img27 from './src/7.png';
import img28 from './src/8.png';
import img29 from './src/9.png';
import img30 from './src/10.png';
import img31 from './src/11.png';
import img32 from './src/12.png';
import img33 from './src/13.png';
import img34 from './src/14.png';
import img35 from './src/15.png';
import img36 from './src/16.png';
import img37 from './src/17.png';
import img38 from './src/18.png';
import img39 from './src/19.png';
import img40 from './src/20.png';
import img41 from './src/21.png';
import img42 from './src/22.png';
import img43 from './src/23.png';
import img44 from './src/24.png';
import img45 from './src/25.png';
import img46 from './src/26.png';
import img47 from './src/27.png';
import img48 from './src/28.png';
import img49 from './src/29.png';
import img50 from './src/30.png';
import img51 from './src/31.png';
import img52 from './src/32.png';
import img53 from './src/33.png';
import img54 from './src/34.png';
import img55 from './src/35.png';
import img56 from './src/36.png';
import img58 from './src/38.png';
import img59 from './src/39.png';
import img60 from './src/40.png';
import img61 from './src/41.png';
import img62 from './src/42.png';
import img63 from './src/43.png';
import img64 from './src/44.png';
import img65 from './src/45.png';
import img66 from './src/46.png';
import img67 from './src/47.png';
import img68 from './src/48.png';
import img69 from './src/49.png';
import img70 from './src/50.png';
import img71 from './src/51.png';
import img72 from './src/52.png';
import img73 from './src/53.png';
import img74 from './src/54.png';
import img75 from './src/55.png';
import img76 from './src/56.png';
import img77 from './src/57.png';
import img78 from './src/58.png';
import img79 from './src/59.png';
import img80 from './src/60.png';
import img82 from './src/62.png';
import img83 from './src/63.png';
import img84 from './src/64.png';
import img85 from './src/65.png';
import img86 from './src/66.png';
import img87 from './src/67.png';
import img88 from './src/68.png';
import img89 from './src/69.png';
import img90 from './src/70.png';
import img91 from './src/71.png';
import img92 from './src/72.png';
import img93 from './src/73.png';
import img94 from './src/74.png';
import img95 from './src/75.png';
import img96 from './src/76.png';
import img97 from './src/77.png';
import img98 from './src/78.png';
import img100 from './src/80.png';
import img101 from './src/81.png';




export default class CakeDecorating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            all_list: true,
            decor_type: 0,
            elDecor: '',
            groups: [
                {
                    id: 1,
                    text: 'Добавить пряник',
                    img: [{
                        url: img1,
                        width: '45px'
                    },
                    {
                        url: img2,
                        width: '35px'
                    },
                    {
                        url: img3,
                        width: '35px'
                    },
                    {
                        url: img4,
                        width: '40px'
                    },
                    {
                        url: img5,
                        width: '61px'
                    },
                    {
                        url: img6,
                        width: '47px'
                    },
                    {
                        url: img8,
                        width: '35px'
                    },
                    {
                        url: img9,
                        width: '59px'
                    },
                    {
                        url: img10,
                        width: '35px'
                    },
                    {
                        url: img11,
                        width: '45px'
                    },
                    {
                        url: img12,
                        width: '50px'
                    },
                    {
                        url: img13,
                        width: '35px'
                    },
                    {
                        url: img14,
                        width: '45px'
                    },
                    {
                        url: img15,
                        width: '35px'
                    },
                    {
                        url: img16,
                        width: '61px'
                    },
                    {
                        url: img17,
                        width: '61px'
                    },
                    {
                        url: img18,
                        width: '40px'
                    },
                    {
                        url: img19,
                        width: '59px'
                    },
                    {
                        url: img20,
                        width: '65px'
                    },
                    ]
                },
                {
                    id: 2,
                    text: 'Добавить леденец',
                    img: [{
                        url: img21,
                        width: '40px'
                    },
                    {
                        url: img22,
                        width: '40px'
                    },
                    {
                        url: img23,
                        width: '40px'
                    },
                    {
                        url: img24,
                        width: '35px'
                    },
                    {
                        url: img25,
                        width: '45px'
                    },
                    {
                        url: img26,
                        width: '52px'
                    },
                    {
                        url: img27,
                        width: '52px'
                    },
                    {
                        url: img28,
                        width: '52px'
                    },
                    {
                        url: img29,
                        width: '52px'
                    },
                    {
                        url: img33,
                        width: '40px'
                    },
                    {
                        url: img34,
                        width: '40px'
                    },

                    ]
                },
                {
                    id: 3,
                    text: 'Добавить цветок',
                    img: [{
                        url: img35,
                        width: '65px'
                    },
                    {
                        url: img36,
                        width: '40px'
                    },
                    {
                        url: img37,
                        width: '40px'
                    },
                    {
                        url: img38,
                        width: '30px'
                    },
                    {
                        url: img39,
                        width: '40px'
                    },
                    {
                        url: img40,
                        width: '40px'
                    },
                    {
                        url: img41,
                        width: '40px'
                    },
                    {
                        url: img42,
                        width: '40px'
                    },
                    {
                        url: img43,
                        width: '30px'
                    },
                    {
                        url: img44,
                        width: '30px'
                    },
                    {
                        url: img45,
                        width: '40px'
                    },
                    {
                        url: img46,
                        width: '35px'
                    },
                    {
                        url: img47,
                        width: '30px'
                    },
                    {
                        url: img48,
                        width: '40px'
                    },
                    {
                        url: img49,
                        width: '40px'
                    },
                    {
                        url: img50,
                        width: '30px'
                    },
                    {
                        url: img51,
                        width: '40px'
                    },
                    {
                        url: img52,
                        width: '30px'
                    },
                    {
                        url: img53,
                        width: '30px'
                    },
                    {
                        url: img85,
                        width: '42px'
                    },
                    {
                        url: img86,
                        width: '35px'
                    },
                    {
                        url: img95,
                        width: '52px'
                    },
                    {
                        url: img87,
                        width: '52px'
                    },
                    {
                        url: img88,
                        width: '40px'
                    },
                    {
                        url: img89,
                        width: '35px'
                    },
                    {
                        url: img90,
                        width: '52px'
                    },
                    {
                        url: img91,
                        width: '40px'
                    },
                    {
                        url: img92,
                        width: '52px'
                    },
                    {
                        url: img93,
                        width: '52px'
                    },
                    {
                        url: img94,
                        width: '52px'
                    },
                    ]
                },
                {
                    id: 4,
                    text: 'Добавить макарон',
                    img: [{
                        url: img30,
                        width: '40px'
                    },
                    {
                        url: img31,
                        width: '24px'
                    },
                    {
                        url: img32,
                        width: '45px'
                    },
                    {
                        url: img54,
                        width: '45px'
                    },
                    {
                        url: img55,
                        width: '30px'
                    },
                    {
                        url: img56,
                        width: '24px'
                    },
                    {
                        url: img75,
                        width: '35px'
                    },
                    {
                        url: img76,
                        width: '35px'
                    },
                    {
                        url: img77,
                        width: '40px'
                    },
                    {
                        url: img78,
                        width: '24px'
                    },
                    {
                        url: img79,
                        width: '52px'
                    },
                    {
                        url: img80,
                        width: '52px'
                    },
                    {
                        url: img82,
                        width: '35px'
                    },
                    {
                        url: img83,
                        width: '24px'
                    },
                    {
                        url: img84,
                        width: '40px'
                    },
                    ]
                },
                {
                    id: 5,
                    text: 'Добавить ягоды',
                    img: [{
                        url: img58,
                        width: '30px'
                    },
                    {
                        url: img59,
                        width: '30px'
                    },
                    {
                        url: img60,
                        width: '40px'
                    },
                    {
                        url: img61,
                        width: '40px'
                    },
                    {
                        url: img62,
                        width: '30px'
                    },
                    {
                        url: img63,
                        width: '40px'
                    },
                    {
                        url: img64,
                        width: '30px'
                    },
                    {
                        url: img65,
                        width: '30px'
                    },
                    {
                        url: img66,
                        width: '30px'
                    },
                    {
                        url: img67,
                        width: '35px'
                    },
                    {
                        url: img68,
                        width: '24px'
                    },
                    {
                        url: img69,
                        width: '24px'
                    },
                    {
                        url: img70,
                        width: '30px'
                    },
                    {
                        url: img71,
                        width: '24px'
                    },
                    {
                        url: img72,
                        width: '24px'
                    },
                    {
                        url: img73,
                        width: '40px'
                    },
                    {
                        url: img74,
                        width: '30px'
                    },
                    {
                        url: img96,
                        width: '30px'
                    },
                    {
                        url: img97,
                        width: '35px'
                    },
                    {
                        url: img98,
                        width: '40px'
                    },
                    {
                        url: img100,
                        width: '24px'
                    },
                    {
                        url: img101,
                        width: '45px'
                    },
                    ]
                }
            ]
        }

        this.list = this.list.bind(this);
        this.what_decor = this.what_decor.bind(this);
        this.whatPicture = this.whatPicture.bind(this);
    }

    list() {
        return (this.state.groups.map(group => (
            <div className="headline" 
                 key={group.id} 
                 onClick={() => this.setState({ decor_type: group.id })}>
                {group.text}
            </div>
        )
        ))
    }

    what_decor(num) {
        for (let i = 0; i < this.state.groups.length; i += 1) {
            if (this.state.groups[i].id === num) {
                return this.state.groups[i].img.map((el, index) => (
                    <img key={index}
                        src={el.url}
                        style={{ width: el.width }}
                        onClick={this.whatPicture}></img>
                ))
            }
        }
    }

    whatPicture(event) {
        const elDecor = {
            src: event.target.src,
            x: 0, y: 0,
            width: event.target.style.width,
            id: Math.floor(Math.random() * 1000) + Date.now(),
        };
        this.setState({
            elDecor,
        });
        this.props.addElement(elDecor);
    }

    render() {
        if (this.state.decor_type === 0) {
            return (
                <div id="options">
                    {this.list()}
                </div>
            );
        }

        return (
            <div id="options">
                {this.what_decor(this.state.decor_type)}
                <br />
                <button onClick={() => this.setState({ decor_type: 0 })}>Назад</button>
            </div>
        );
    }
}
