import React from 'react';


export default class Tiers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width_tiers1: '',
            height_tiers1: '',
            width_tiers2: '',
            height_tiers2: '',
            width_tiers3: '',
            height_tiers3: '',
            width_tiers4: '',
            height_tiers4: '',
            width_tiers5: '',
            height_tiers5: '',
            tier2: 'none',
            tier3: 'none',
            tier4: 'none',
            tier5: 'none',
            buttAdd2: 'block',
            buttAdd3: 'block',
            buttAdd4: 'block',
            buttAdd5: 'block',
        }
        this.ChangeWidthTiers1 = this.ChangeWidthTiers1.bind(this);
        this.ChangeHeightTiers1 = this.ChangeHeightTiers1.bind(this);
        this.ChangeWidthTiers2 = this.ChangeWidthTiers2.bind(this);
        this.ChangeHeightTiers2 = this.ChangeHeightTiers2.bind(this);
        this.ChangeWidthTiers3 = this.ChangeWidthTiers3.bind(this);
        this.ChangeHeightTiers3 = this.ChangeHeightTiers3.bind(this);
        this.ChangeWidthTiers4 = this.ChangeWidthTiers4.bind(this);
        this.ChangeHeightTiers4 = this.ChangeHeightTiers4.bind(this);
        this.ChangeWidthTiers5 = this.ChangeWidthTiers5.bind(this);
        this.ChangeHeightTiers5 = this.ChangeHeightTiers5.bind(this);


        this.ClickButton = this.ClickButton.bind(this);

        this.ButtonAddTier2 = this.ButtonAddTier2.bind(this);
        this.ButtonAddTier3 = this.ButtonAddTier3.bind(this);
        this.ButtonAddTier4 = this.ButtonAddTier4.bind(this);
        this.ButtonAddTier5 = this.ButtonAddTier5.bind(this);

        this.ClickDel1 = this.ClickDel1.bind(this);
        this.ClickDel2 = this.ClickDel2.bind(this);
        this.ClickDel3 = this.ClickDel3.bind(this);
        this.ClickDel4 = this.ClickDel4.bind(this);


    }

    ChangeWidthTiers1() {
        this.setState({ width_tiers1: event.target.value });
    }
    ChangeHeightTiers1() {
        this.setState({ height_tiers1: event.target.value });
    }


    ChangeWidthTiers2() {
        this.setState({ width_tiers2: event.target.value });
    }
    ChangeHeightTiers2() {
        this.setState({ height_tiers2: event.target.value });
    }


    ChangeWidthTiers3() {
        this.setState({ width_tiers3: event.target.value });
    }
    ChangeHeightTiers3() {
        this.setState({ height_tiers3: event.target.value });
    }


    ChangeWidthTiers4() {
        this.setState({ width_tiers4: event.target.value });
    }
    ChangeHeightTiers4() {
        this.setState({ height_tiers4: event.target.value });
    }


    ChangeWidthTiers5() {
        this.setState({ width_tiers5: event.target.value });
    }
    ChangeHeightTiers5() {
        this.setState({ height_tiers5: event.target.value });
    }

    ClickDel1() {
        this.setState({ width_tiers2: '', height_tiers2: '', tier2: 'none', buttAdd2: 'block' })
    }

    ClickDel2() {
        this.setState({ width_tiers3: '', height_tiers3: '', tier3: 'none', buttAdd3: 'block' })
    }

    ClickDel3() {
        this.setState({ width_tiers4: '', height_tiers4: '', tier4: 'none', buttAdd4: 'block' })
    }

    ClickDel4() {
        this.setState({ width_tiers5: '', height_tiers5: '', tier5: 'none', buttAdd5: 'block' })
    }

    ButtonAddTier2() {
        this.setState({ tier2: 'block', buttAdd2: 'none' })
    }

    ButtonAddTier3() {
        this.setState({ tier3: 'block', buttAdd3: 'none' })
    }

    ButtonAddTier4() {
        this.setState({ tier4: 'block', buttAdd4: 'none' })
    }

    ButtonAddTier5() {
        this.setState({ tier5: 'block', buttAdd5: 'none' })
    }

    ClickButton() {
        this.props.StepTiers(+this.state.width_tiers1, +this.state.height_tiers1,
            +this.state.width_tiers2, +this.state.height_tiers2,
            +this.state.width_tiers3, +this.state.height_tiers3,
            +this.state.width_tiers4, +this.state.height_tiers4,
            +this.state.width_tiers5, +this.state.height_tiers5);


            
           if(+this.state.width_tiers1 > 60 ||  +this.state.height_tiers1 > 40 || +this.state.width_tiers2 > 45 ||  +this.state.height_tiers2 > 25 || +this.state.width_tiers3 > 40 ||  +this.state.height_tiers3 > 25 ||
            +this.state.width_tiers4 > 35 ||  +this.state.height_tiers4 > 25 || +this.state.width_tiers5 > 30 ||  +this.state.height_tiers5 > 25){
                
                this.setState({
                    width_tiers1: '',
            height_tiers1: '',
            width_tiers2: '',
            height_tiers2: '',
            width_tiers3: '',
            height_tiers3: '',
            width_tiers4: '',
            height_tiers4: '',
            width_tiers5: '',
            height_tiers5: ''
                })
            }

    }



    render() {
        return (
            <div id='options'>
                <div>
                    <div className='headline'>Первый ярус</div>

                    <div className='group'>{/*Ширина яруса*/}
                        <input type='number'
                            value={this.state.width_tiers1}
                            onChange={this.ChangeWidthTiers1}
                            required>
                        </input>
                        <span className='bar'></span>
                        <label className='size'>Ширина яруса, см</label>
                    </div>

                    <div className='group'>{/*Высота яруса*/}
                        <input type='number' 
                            value={this.state.height_tiers1}
                            onChange={this.ChangeHeightTiers1}
                            required>
                        </input>
                        <span className='bar'></span>
                        <label className='size'>Высота яруса, см</label>
                    </div>
                    <div className="b_line">
                        <button style={{ display: this.state.buttAdd2 }}
                            onClick={this.ButtonAddTier2}>
                            Добавить ярус
                        </button>
                        <button style={{ display: this.state.buttAdd2 }}
                            onClick={this.ButtonAddTier2}
                            onClick={this.ClickButton}>
                            Применить
                        </button>
                    </div>
                </div>


                <div style={{ display: this.state.tier2 }}>
                    <div className='headline'>Второй ярус <button className='ButDel' onClick={this.ClickDel1}>Удалить ярус</button></div>
                    <div className='group'>{/*Ширина яруса*/}
                        <input type='number' 
                            value={this.state.width_tiers2}
                            onChange={this.ChangeWidthTiers2}>
                        </input>
                        <span className='bar'></span>
                        <label className='size'>Ширина яруса, см</label>
                    </div>

                    <div className='group'>{/*Высота яруса*/}
                        <input type='number' 
                            value={this.state.height_tiers2}
                            onChange={this.ChangeHeightTiers2}>
                        </input>
                        <span className='bar'></span>
                        <label className='size'>Высота яруса, см</label>
                    </div>
                    <div className="b_line">
                        <button style={{ display: this.state.buttAdd3 }}
                            onClick={this.ButtonAddTier3}>
                            Добавить ярус
                        </button>
                        <button style={{ display: this.state.buttAdd3 }}
                            onClick={this.ButtonAddTier3}
                            onClick={this.ClickButton}>
                            Применить
                        </button>
                    </div>
                </div>

                <div style={{ display: this.state.tier3 }}>
                    <div className='headline'>Третий ярус <button className='ButDel' onClick={this.ClickDel2}>Удалить ярус</button></div>
                    <div className='group'>{/*Ширина яруса*/}
                        <input type='number' 
                            value={this.state.width_tiers3}
                            onChange={this.ChangeWidthTiers3}>
                        </input>
                        <span className='bar'></span>
                        <label className='size'>Ширина яруса, см</label>
                    </div>
                    <div className='group'>{/*Высота яруса*/}
                        <input type='number'
                            value={this.state.height_tiers3}
                            onChange={this.ChangeHeightTiers3}>
                        </input>
                        <span className='bar'></span>
                        <label className='size'>Высота яруса, см</label>
                    </div>
                    <div className="b_line">
                        <button style ={{ display: this.state.buttAdd4}} 
                                onClick={this.ButtonAddTier4}>
                                Добавить ярус
                        </button>
                        <button style ={{ display: this.state.buttAdd4}} 
                                onClick={this.ButtonAddTier4}
                                onClick = {this.ClickButton}>
                                Применить
                        </button>
                    </div>   
                </div>

                <div style={{ display: this.state.tier4 }}>
                    <div className='headline'>Четвертый ярус <button className='ButDel' onClick={this.ClickDel3}>Удалить ярус</button></div>
                    <div className='group'>{/*Ширина яруса*/}
                        <input type='number'
                            value={this.state.width_tiers4}
                            onChange={this.ChangeWidthTiers4}>
                        </input>
                        <span className='bar'></span>
                        <label className='size'>Ширина яруса, см</label>
                    </div>
                    <div className='group'>{/*Высота яруса*/}
                        <input type='number'
                            value={this.state.height_tiers4}
                            onChange={this.ChangeHeightTiers4}>
                        </input>
                        <span className='bar'></span>
                        <label className='size'>Высота яруса, см</label>
                    </div>
                    <div className="b_line">
                        <button style ={{ display: this.state.buttAdd5}} 
                                onClick={this.ButtonAddTier5}>
                                Добавить ярус
                        </button>
                        <button style ={{ display: this.state.buttAdd5}} 
                                onClick={this.ButtonAddTier5}
                                onClick = {this.ClickButton}>
                                Применить
                        </button>
                    </div>   
                </div>

                <div style={{ display: this.state.tier5 }}>
                    <div className='headline'>Пятый ярус <button className='ButDel' onClick={this.ClickDel4}>Удалить ярус</button></div>
                    <div className='group'>{/*Ширина яруса*/}
                        <input type='number' 
                            value={this.state.width_tiers5}
                            onChange={this.ChangeWidthTiers5}>
                        </input>
                        <span className='bar'></span>
                        <label className='size'>Ширина яруса, см</label>
                    </div>
                    <div className='group'>{/*Высота яруса*/}
                        <input type='number' 
                            value={this.state.height_tiers5}
                            onChange={this.ChangeHeightTiers5}>
                        </input>
                        <span className='bar'></span>
                        <label className='size'>Высота яруса, см</label>
                    </div>
                    <button
                            onClick = {this.ClickButton}>
                            Применить
                        </button>
                </div>
            </div>
        )
    }
}

