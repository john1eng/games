import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navigationBar.module.css'

export const NavigationBar: React.FunctionComponent<any> = (props) => {
console.log(props)
    return(
        <div>
            <ul>
                <li className={styles.dropdown}>
                    <a href="javascript:void(0)" className={styles.dropbtn}>Menu</a>
                    <div className ={styles.dropdownContent}>
                        {/* <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a> */}
                        <Link className={styles.link} to='/'>HOME</Link>
                        <Link className={styles.link} to='/Tictactoe'>TIC TAC TOE</Link>
                        <Link className={styles.link} to='/Hangman'>HANG MAN</Link>
                        <Link className={styles.link} to='/Random'>RANDOM</Link>
                    </div>
                </li>
            </ul>
                </div>
    )
}


