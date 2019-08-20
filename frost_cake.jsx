import React from 'react';


export default class FrostCake extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: '#520599',
            value: 'cream',
        }
        this.ChangeColor = this.ChangeColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    ChangeColor() {
        this.setState({ color: event.target.value})
    }
    handleChange(){
        this.setState({value : event.target.value})
    }

    render() {
        return (
            <div id='options'>
                <div className='inner'>
                    <span className='headline'>Выберите цвет</span> 
                    <div><input  className='color'
                            type='color' 
                            value={this.state.color} 
                            onChange={this.ChangeColor}>
                    </input></div>
                    
                </div>
                <label>
                    <p className='headline'>Выберите покрытие торта:</p> 
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option  value="cream">Крем</option>
                        <option  value="fondant">Мастика</option>
                        <option value="icing">Зеркальная глазурь</option>
                        <option  value="velour">Велюр</option>
                    </select>
                </label>
                <button onClick={() => this.props.StepFrostCake(this.state.color, this.state.value)}>Применить</button>
            </div>
        )
    }

}
