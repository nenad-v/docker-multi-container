import React, { Component } from 'react';
import axios from 'axios';
import styles from './styles.module.css';

class Fib extends Component {
    state = {
        seenIndexes: [],
        values: {},
        index: ''
    }

    componentDidMount = () => {
        this.fetchValues();
        this.fetchIndexes();
    }

    fetchIndexes = async () => {
        const values = await axios.get('/api/values/current');
        this.setState({ values: values.data });
    }

    fetchValues = async () => {
        const values = await axios.get('/api/values/all');
        this.setState({ seenIndexes: values.data });
    }

    handleSubmit = async event => {
        event.preventDefault();
        
        await axios.post('/api/values', {
            index: this.state.index
        });

        this.setState({ index: '' });
    }

    handleChange = event => {
        this.setState({ index: event.target.value });
    }

    render() {
        return (
            <div className={styles.fib}>
                <div className={styles.widget}>
                    <h1 className={styles.title}>Fibonacci calculator</h1>

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="index">Enter index</label>
                            <input 
                            onChange={this.handleChange} 
                            value={this.state.index}
                            placeholder="Enter your index" 
                            className="form-control"
                            type="text" 
                            id="index" />
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

                <div className={styles.widget}>
                    <h3 className={styles.subtitle}>Indexes used</h3>
                    {this.state.seenIndexes.map(({number}) => number).join(', ')}
                </div>

                <div className={styles.widget}>
                    <h3 className={styles.subtitle}>Calculated values</h3>
                    {Object.values(this.state.values).map(val => val).join(', ')}
                </div>
            </div>
        );
    }
}

export default Fib;