import Heading from '../components/Heading';
import React from 'react'
//import TransactionList from "./TransactionList";
import SpentAnalysis from "./SpentAnalysis";
import DateRange from "./DateRange";

const Home = (props) => {
    return(
        <React.Fragment>
            <Heading>

            </Heading>
            {/*<TransactionList>*/}
            {/*</TransactionList>*/}
            <DateRange>

            </DateRange>
            <SpentAnalysis
                sdate={props.sdate}
                edate={props.edate}
            >

            </SpentAnalysis>
        </React.Fragment>
    )
}

export default Home;